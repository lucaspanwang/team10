import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/UnitedWay2.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/food-request/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img shape="circle" src={logo} />
            <div style={{ marginLeft: "10px" }}>
              <p className="nav-title1">United Way</p>{" "}
              <p className="nav-title2">British Columbia</p>
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/food-request/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/food-request/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/food-request/request"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Request
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
