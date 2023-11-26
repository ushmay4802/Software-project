import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRide } from "./Ridecontext";
import './Bookride.css';

const Bookride = () => {
    const [ispassengercount, setpassengercount] = useState('');
    const [isfrom, setfrom] = useState('');
    const [isto, setto] = useState('');
    const {setRideInfo} = useRide();
    const {RideInfo} = useRide();

    const [errors, setErrors] = useState({
        seat: '',
        from: '',
        to: '',
    });

    const navigate = useNavigate();

    const handleride = async () => {
        const newErrors = {
            seat: ispassengercount ? '' : 'Please select no of passengers.',
            from: isfrom ? '' : 'Please enter the starting location.',
            to: isto ? '' : 'Please enter the destination location.',
        };

        setErrors(newErrors);

        

        if (Object.values(newErrors).some((error) => error !== '')) {
            return;
        }

        try{
const rideresponse = await fetch(`http://localhost:3300/passengerride/${ispassengercount}/${isfrom}/${isto}`);

if (!rideresponse.ok) {
    throw new Error(`HTTP error! Status: ${rideresponse.status}`);
  }

  const ridearray = await rideresponse.json();
  setRideInfo(ridearray);
            navigate('/Ridelist');


        }catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            console.log("finally");
          }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleride();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (

        <>

        <div className="bookride">

<div className="bookride-input">
    <div className="bookride-input-text">
        <div className="bookride-text">From</div>
        <div className="bookride-text">To</div>
        <div className="bookride-text">Passenger</div>
    </div>
    <div className="bookride-input-field">
        <div>
        <input type="text"  className="bookride-field"value={isfrom} onChange={(e) => { setfrom(e.target.value) }} required />
        <div style={{ color: 'red', position: 'absolute', bottom: '525px',left:'180px' }} className="bookride-error">{errors.from}</div>
        </div>
        <div>
        <input type="text" className="bookride-field" value={isto} onChange={(e) => { setto(e.target.value) }} required />
        <div style={{ color: 'red', position: 'absolute', bottom: '525px',left:'580px' }} className="bookride-error">{errors.to}</div>
        </div>
        <div>

        <select value={ispassengercount} className="bookride-field" style={{borderWidth:'2px'}} onChange={(e) => { setpassengercount(e.target.value) }} required>
                     <option value="">Select seat</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                 </select>
                 <div style={{ color: 'red', position: 'absolute', bottom: '525px',left:'980px' }} className="bookride-error">{errors.seat}</div>
        </div>
    </div>
</div>

<button className="bookride-button"  onClick={handleride}>Submit</button>

<div className="bookride-ridelist"></div>


        </div>
        
        </>
        // <div className="licence-container">
    

        //     <div className="detail">
        //         <label>No of passengers: </label>
        //         <select value={ispassengercount} onChange={(e) => { setpassengercount(e.target.value) }} required>
        //             <option value="">Select seat</option>
        //             <option value="1">1</option>
        //             <option value="2">2</option>
        //             <option value="3">3</option>
        //             <option value="4">4</option>
        //             <option value="5">5</option>
        //         </select>
        //         <div className="error-message">{errors.seat}</div>
        //     </div>

        //     <div className="detail">
        //         <label >From:</label>
        //         <input type="text" value={isfrom} onChange={(e) => { setfrom(e.target.value) }} required />
        //         <div className="error-message">{errors.from}</div>
        //     </div>

        //     <div className="detail">
        //         <label >To:</label>
        //         <input type="text" value={isto} onChange={(e) => { setto(e.target.value) }} required />
        //         <div className="error-message">{errors.to}</div>
        //     </div>

        //     <div className="submit">
        //         <button onClick={handleride}>Submit</button>
        //     </div>
        // </div>
    );
}

export default Bookride;
