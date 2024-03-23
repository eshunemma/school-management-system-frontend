import React, { useEffect, useState } from "react";
import Dashboard from "../Dashoboard/Dashboard";
import "./Manage.css";
import { useQuery } from "@apollo/client";
import { ListAllStaffs_Query } from "../../../utils/Mutations";
import ButtonIn from "../../../Component/Button/ButtonIn";
import ModalComponent from "../../../Component/Modal/ModalComponent";
import Table from "../../../Component/Table/Table";
import AddStaff from "../Mutate_Comp/AddStaff";

const Staffs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { loading, error, data } = useQuery(ListAllStaffs_Query);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const mainData = data.listAllStaffs;

  const headers = [
    { name: "Staff Id", key: "staffId" },
    { name: "Name", key: "staffName" },
    { name: "Phone", key: "phoneNumber" },
    { name: "Status", key: "active" },
  ];
  return (
    <div>
      <Dashboard />
      <h1>Staffs</h1>
      <div className="ct-bu">
        <ButtonIn name="Add Staff" onClick={openModal} />
      </div>
      <div className="cont-border">
        <Table tableHeader={headers} tableData={mainData} hasAction={true} />
      </div>
      <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        <AddStaff closeModal={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Staffs;
