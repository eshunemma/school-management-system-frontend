import React, { useState } from "react";
import Dashboard from "../Dashoboard/Dashboard";
import "./Manage.css";
import UserCard from "../../../Component/Manage/UserCard";
import { useQuery } from "@apollo/client";
import { LlistAllUsers_Query } from "../../../utils/Mutations";
import ButtonIn from "../../../Component/Button/ButtonIn";
import ModalComponent from "../../../Component/Modal/ModalComponent";
import SingUp from "../Authentication/SignUp";
import Table from "../../../Component/Table/Table";

const Users = () => {
  const headers = [
    { name: "Name", key: "name" },
    { name: "Email", key: "email" },
    { name: "Role", key: "role" },
    { name: "Status", key: "active" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { loading, error, data } = useQuery(LlistAllUsers_Query);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const mainData = data.listAllUsers;
  return (
    <div>
      <Dashboard />
      <h1>Users</h1>
      <div className="ct-bu">
        <ButtonIn name="Invite A user" onClick={openModal} />
      </div>
      <div className="cont-border">
        <Table tableHeader={headers} tableData={mainData} hasAction={true} />
      </div>
      <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        <SingUp closeModal={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Users;
