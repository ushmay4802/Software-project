import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './Pricing.css';
const Pricing = () => {
    return (
       <div className="mainn">
        <div className="boxx">
            <div className="innerr">
                <div className="pricing-content"></div>
                <button className="pricing-btn">Buy Now</button>
            </div>
            <div className="innerr">
                <div className="pricing-content"></div>
                <button className="pricing-btn">Buy Now</button>
            </div>
            <div className="innerr">
                <div className="pricing-content"></div>
                <button className="pricing-btn">Buy Now</button>
            
            </div>
        </div>

            
        
       </div>
    );
}

export default Pricing;