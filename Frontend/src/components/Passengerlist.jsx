import React, { useEffect, useState } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./Passengerlist.css";

const Passengerlist = () => {
  const { userInfo } = useUser();
  const [names, setNames] = useState([]);
  const [driverUsername, setdriverUsername] = useState("");
  // console.log(userInfo.username);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3300/passengerRequest/${userInfo.username}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setNames(data.innerMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval for fetching data every 5 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [driverUsername]);

  const handleconfirm = async (index, name) => {
    try {
      const requestData = {
        passenger: name.data.username,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      };

      const res = await fetch(
        `http://localhost:3300/requestDelete`,
        requestOptions
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const objectString = encodeURIComponent(JSON.stringify(name.data));
      console.log(objectString);
      //const billcharge = encodeURIComponent(JSON.stringify());
      // Navigate to the Driverbill component with the objectString as a parameter
      navigate(`/Driverbill/${objectString}`);
    } catch (error) {
      console.log("not clicked");
    }
  };
  // Use some static data for testing

  return (
    <div className="Passengerlist-main">
      <div className="Passengerlist-box">
        <label className="Passengertext">Passenger List</label>

        <div className="Passengerlist-detail">
          {names.length > 0 ? (
            names.map((name, index) => (
              <div className="Passengerlist-list" key={index}>
                <div className="Passengerlist-order">
                  <div className="Passengerlist-textstyle">
                    Passenger Username: {name.data.username} &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;Gender: {name.data.gender} &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;Seats: {name.data.seat}
                  </div>
                  <button
                    className="Passengerlist-confirm-btn"
                    onClick={() => handleconfirm(index, name)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="Passengerlist-box-nodata">No Request available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Passengerlist;
