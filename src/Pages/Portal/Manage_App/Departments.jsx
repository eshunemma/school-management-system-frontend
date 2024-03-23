import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Dashboard from "../Dashoboard/Dashboard";
import Table from "../../../Component/Table/Table";
import { ListAllDepartments } from "../../../utils/Mutations";
import ModalComponent from "../../../Component/Modal/ModalComponent";
import AddDepartment from "../Mutate_Comp/AddDepartment";
import ButtonIn from "../../../Component/Button/ButtonIn";

const Departments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { loading, error, data } = useQuery(ListAllDepartments);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const mainData = data.listAllDepartment;
  const headers = [{ name: "Department Name", key: "name" }];
  return (
    <div>
      <Dashboard />
      <h1>Departments</h1>
      <div className="ct-bu">
        <ButtonIn name="Add Department" onClick={openModal} />
      </div>
      <div className="cont-border">
        <Table tableHeader={headers} tableData={mainData} hasAction={true} />
      </div>
      <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        <AddDepartment closeModal={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Departments;
