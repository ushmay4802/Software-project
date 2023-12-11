import React from "react";
import { useState } from "react";
import "./Driverbill.css";
import { useUser } from "./UserContext";
import { useParams, useNavigate } from "react-router-dom";

const Driverbill = () => {
  const userInfo = useUser();
  const { objectString } = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = currentDate.toLocaleDateString();
  const billdata = JSON.parse(decodeURIComponent(objectString));
  const navigate = useNavigate();
  const [distanceTravelled, setDistanceTravelled] = useState(10);
  const [showPopup, setShowPopup] = useState(false);

  const formattedDistanceTravelled = parseInt(distanceTravelled);
  const handleconfirm = async () => {
    const confirmRide = {
      driverUsername: billdata.driverUsername,
      passengerUsername: billdata.username,
      from: billdata.from,
      to: billdata.to,
      date: formattedDate,
      passenger: billdata.seat,
      distance: distanceTravelled,
      amount: distanceTravelled * parseInt(billdata.charge),
    };

    if (
      userInfo.userInfo.wallet <
      formattedDistanceTravelled * parseInt(billdata.charge)
    ) {
      setShowPopup(true);

      // Close the popup after 1000 milliseconds (1 second)
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
      return;
    }

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(confirmRide),
      };
      const res = await fetch(
        `http://localhost:3300/confirmRide`,
        requestOptions
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      navigate("/Layout");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bill-main">
      {showPopup && (
        <div className="popup">
          <p>{`Not Enough Balance`}</p>
        </div>
      )}
      <div className="bill-box">
        <div className="bill-head">
          <div className="logo-frame"></div>
          <div className="head-frame">
            <div className="heading-textt">Bill Details</div>
          </div>

          <div className="order-detail-head"></div>
        </div>

        <div className="bill-detail">
          <div className="bill-input">username: {billdata.username}</div>
          <div className="bill-input">No. of Passenger: {billdata.seat}</div>
          <div className="bill-input">From: {billdata.from}</div>
          <div className="bill-input">To: {billdata.to}</div>
          <div className="bill-input">Date: {formattedDate}</div>
          <div className="bill-input">Distance: {distanceTravelled}</div>
          <div className="bill-input">
            amount: {10 * parseInt(billdata.charge)}
          </div>
          <button
            className="driverbill-btn"
            onClick={() => {
              handleconfirm();
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Driverbill;
