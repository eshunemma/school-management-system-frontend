import React from "react";
import "./ContactUs.css";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="cu-01">
        <img src="/sch-imgs/img-1.jpg" alt="ima" />
      </div> */}
      <div className="cu-container">
        <div className="cu-info">
          <div className="cu-det">
            <span className="material-symbols-outlined cu-icons">call</span>
            <h1>Call us On</h1>
            <p>Kindly contact us on the following phone numbers:</p>
            <p className="laslas">+233 XXX XXXX | +233 XXX XXXX </p>
          </div>
          <div className="cu-det">
            <span className="material-symbols-outlined cu-icons">mail</span>
            <h1>Email</h1>
            <p>Kindly send us an email using the email address below</p>
            <p className="laslas">greatsohis@gmail.com</p>
          </div>
          <div className="cu-det">
            <span className="material-symbols-outlined cu-icons">map</span>
            <h1>Location</h1>
            <p>Sepaase Bodwesango Newsite- Kumasi, GPS Address: AK-338-3448</p>
            <p className="laslas">
              <a href="google.com">View On Google Map</a>
            </p>
          </div>
        </div>
        <div className="message">
          <h1>LEAVE US YOUR INFO</h1>
          <p>AND WE WILL GET BACK TO YOU.</p>
          <div>
            <form action="/contact-us" method="get" className="form-b">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Full Name*"
              />
              <input type="text" id="lname" name="lname" placeholder="Email*" />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Subject*"
              />
              <textarea
                name="message"
                rows="10"
                cols="30"
                placeholder="Message*"
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
