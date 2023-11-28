import React, { useEffect, useState } from "react";

import "./Passengerlist.css";

const Passengerlist = () => {
  const [names, setNames] = useState([]);

  // Use some static data for testing
  const hardcodedNames = [
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    { username: "John", gender: "Male", seats: 5 },
    { username: "Jane", gender: "Female", seats: 3 },
    { username: "Bob", gender: "Male", seats: 2 },
    // Add more static data as needed
  ];

  useEffect(() => {
    // Set the names to the hardcoded values
    setNames(hardcodedNames);
  }, []);

  return (
    <div className="Passengerlist-main">
      <div className="Passengerlist-box">
        <label className="Passengertext">Passenger List</label>

        <div className="Passengerlist-detail">
          {names.map((name, index) => (
            <div className="Passengerlist-list">
              <div key={index} className="-Passengerlistorder">
                <div className="Passengerlist-textstyle">
                  Passenger Username: {name.username} &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;Gender: {name.gender} &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;Seats: {name.seats}
                </div>
                <button className="Passengerlist-confirm-btn">Confirm</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Passengerlist;
