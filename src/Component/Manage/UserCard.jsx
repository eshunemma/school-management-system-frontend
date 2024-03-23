import React from "react";
import "./ManageCard.css";
import { SlOptionsVertical } from "react-icons/sl";
import ModalComponent from "../Modal/ModalComponent";
import SingUp from "../../Pages/Portal/Authentication/SignUp";

const UserCard = (props) => {
  return (
    <div>
      <div className="contact-details">
        <div className="img">
          <img src="/logo192.png" alt="sohis-logo" />
        </div>
        <div className="img-name">
          <p>{props.name}</p>
        </div>
        <div className="">
          <p>{props.staffID}</p>
        </div>
        <div className="u-em">
          <p>{props.email}</p>
        </div>
        <div className="u-role">
          <p>{props.role}</p>
        </div>
        <div className="u-act">
          <p>{props.active}</p>
        </div>
        <div className="opt">
          <SlOptionsVertical className="opt-b" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
