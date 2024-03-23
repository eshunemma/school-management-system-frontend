// ModalComponent.js
import React from "react";
import Modal from "react-modal";
import "./Modal.css";

const customStyles = {
  overlay: {
    backdropFilter: "blur(5px)",
  },
  content: {
    /* your modal styles here */
  },
};

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      className={"modal"}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
