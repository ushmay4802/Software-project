import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import symbol from "./Gratler.png";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const isLoginRoute = location.pathname === "/";
  const isRegisterRoute = location.pathname === "/RegistrationForm";

  const shouldRenderNavbar = !isLoginRoute && !isRegisterRoute;

  const logout = () => {
    localStorage.removeItem("userImage");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return shouldRenderNavbar ? (
    <div className="navbar">
      <div className="symbol">
        <img src={symbol} alt="symbol" />
      </div>
      <div className="navbar-content">
        <Link to="/Layout" className="home">
          Home
        </Link>
        <Link to="/about" className="about-us">
          About Us
        </Link>
        <Link to="/Profile" className="profile">
          Profile
        </Link>
        <Link to="/Pricing" className="pricing">
          Pricing
        </Link>
      </div>

      <div className="navbar-button">
        <button className="signup" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  ) : null;
};

export default Navbar;
