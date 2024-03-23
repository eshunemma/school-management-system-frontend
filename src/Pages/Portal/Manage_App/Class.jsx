import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ListAllClasses, ListAllDepartments } from "../../../utils/Mutations";
import Dashboard from "../Dashoboard/Dashboard";
import Table from "../../../Component/Table/Table";
import ModalComponent from "../../../Component/Modal/ModalComponent";
import ButtonIn from "../../../Component/Button/ButtonIn";
import AddClass from "../Mutate_Comp/AddClass";

const Class = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    loading: loadingClass,
    error: errorClass,
    data: dataClass,
  } = useQuery(ListAllClasses);
  const {
    loading: loadingDepartment,
    error: errorDepartment,
    data: dataDepartment,
  } = useQuery(ListAllDepartments);
  if (loadingClass || loadingDepartment) return "Loading...";
  if (errorClass || errorDepartment)
    return `Error! ${errorClass.message || errorDepartment.message}`;
  const mainData = dataClass.listAllClasses;
  const data2 = [];
  mainData.map((data) => {
    data2.push({
      id: data.id,
      class_name: data.class_name,
      department: data.department.name,
    });
  });
  const departmentData = dataDepartment;

  const headers = [
    { name: "Class Name", key: "class_name" },
    { name: "Department Associated", key: "department" },
  ];
  return (
    <div>
      <Dashboard />
      <h1>Class</h1>
      <div className="ct-bu">
        <ButtonIn name="Add Class" onClick={openModal} />
      </div>
      <div className="cont-border">
        <Table tableHeader={headers} tableData={data2} hasAction={true} />
      </div>
      <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        <AddClass closeModal={closeModal} />
      </ModalComponent>
    </div>
  );
};

export default Class;
