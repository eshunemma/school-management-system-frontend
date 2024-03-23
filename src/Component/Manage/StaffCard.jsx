import React, { useState } from "react";
import "./ManageCard.css";
import { SlOptionsVertical } from "react-icons/sl";
import ModalComponent from "../Modal/ModalComponent";

const StaffCard = (props) => {
  const [status, setStatus] = useState(props.active);
  const statusStyle = {
    backgroundColor: "red",
    color: "white",
  };
  const statusStyleActive = {
    backgroundColor: "rgb(46, 255, 43)",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="staff-det">
        <div className="img">
          <img src="/logo192.png" alt="sohis-logo" />
        </div>
        <div className="stf-d">
          <div className="stf stf-1" onClick={openModal}>
            <p>{props.staffId}</p>
          </div>
          <div className="stf stf-1" onClick={openModal}>
            <p>{props.staffName}</p>
          </div>
          <div className="stf">
            <p>{props.phoneNumber}</p>
          </div>
          <div className="stf">
            <p
              className="status"
              style={status ? statusStyleActive : statusStyle}
            >
              {props.active ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="opt-stf">
            <SlOptionsVertical className="opt-b" />
          </div>
        </div>
        <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
          <button onClick={closeModal}>Close Modal</button>
          <h1>How was your reaction</h1>
        </ModalComponent>
      </div>
    </div>
  );
};

export default StaffCard;
