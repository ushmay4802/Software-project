import React from "react";
import "./Driverbill.css";
import { useParams } from "react-router-dom";

const Driverbill = () => {
  const { objectString } = useParams();

  // Parse the objectString back to an object
  const billdata = JSON.parse(decodeURIComponent(objectString));
  console.log(billdata.charge);
  return (
    <div className="bill-main">
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
          <div className="bill-input">Date: {}</div>
          <div className="bill-input">Distance: {10}</div>
          <div className="bill-input">amount: {10}</div>
        </div>
      </div>
    </div>
  );
};

export default Driverbill;
