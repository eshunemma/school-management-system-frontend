import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="ft-main">
      <div className="ft-con">
        <div className="ft-imgs">
          <img className="ft-img" src="/sohis-logo.png" alt="school-em" />
          <img className="ges-img" src="/ges.png" alt="school-em" />
        </div>
        <div className="ft-info">
          <h4>About Us</h4>
          <p>© 2023 SOHIS. All rights reserved.</p>
          <p>Ghana Post Address GA-111-5469</p>
        </div>
        <div className="ft-info">
          <h4>Contact Us</h4>
          <p>Tel: 054 XXX XXXX | 054 XXX XXXX | 054 XXX XXXX </p>
          <p>Email: greatsohis@gmail.com</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-whatsapp"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
