import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import symbol from "./Gratler.png";
import { useUser } from "./UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { userInfo } = useUser();

  const location = useLocation();
  const isLoginRoute = location.pathname === "/";
  const isRegisterRoute = location.pathname === "/RegistrationForm";
  const [wallet, setWallet] = useState(0);
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userInfo")) || {};
    setWallet(storedUserData.wallet || 0);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUserData = JSON.parse(localStorage.getItem("userInfo")) || {};
      setWallet(storedUserData.wallet || 0);
    };

    const intervalId = setInterval(() => {
      handleStorageChange();
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);
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
        <Link to="/About" className="about-us">
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
        <Link
          to="/Pricing"
          classname="wallet-symbol"
          style={{
            width: "63px",
            display: "flex",
            paddingTop: "8px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
          >
            <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zM415.5 128h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
            <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z" />
          </svg>{" "}
          <div>{wallet}</div>
        </Link>

        <button className="signup" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  ) : null;
};

export default Navbar;
