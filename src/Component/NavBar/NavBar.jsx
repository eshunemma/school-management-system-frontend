import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="nav-01">
        <img src="sohisLOGO.png" alt="sohis-logo" />
      </div>
      <div className="nav-02">
        <ul>
          <Link to={`/`}>Home</Link>
          <Link to={`/about`}>About Us</Link>
          <Link to={`/admissions`}>Admissions</Link>
          <Link to={`/contact-us`}>Contact</Link>
          <Link to={`/portal`}>Portal</Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
