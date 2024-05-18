import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const styleheader = { height: "50px" };
  const styleimage = { width: "110px" };
  const styletext = { fontSize: "15px" };
  return (
    <header style={props.jack ? styleheader : null}>
      <div className="nav-01">
        <img
          style={props.jack ? styleimage : null}
          src="sohisLOGO.png"
          alt="sohis-logo"
        />
      </div>
      <div className="nav-02">
        <ul style={props.jack ? styletext : null}>
          <Link to={`/`}>
            <p className="nav-p">Home</p>
          </Link>
          <Link to={`/about`}>
            <p className="nav-p">About Us</p>
          </Link>
          <Link to={`/admissions`}>
            <p className="nav-p">Admissions</p>
          </Link>
          <Link to={`/contact-us`}>
            <p className="nav-p">Contact</p>
          </Link>
          <Link to={`/portal`}>
            <p className="nav-p">Portal</p>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
