import React, { useState } from "react";
import Input from "../../../Component/Inputs/Input";
import ButtonIn from "../../../Component/Button/ButtonIn";
import { useMutation, useQuery } from "@apollo/client";
import {
  AddClass_Mutation,
  ListAllDepartments,
} from "../../../utils/Mutations";

const AddClass = ({ closeModal }) => {
  const [AddClassData] = useMutation(AddClass_Mutation);

  const [className, setClassName] = useState("");
  const [deptId, setDeptId] = useState(null);

  console.log("Classname", className);
  console.log("Department Id", deptId);

  const { loading, error, data } = useQuery(ListAllDepartments);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const mainData = data.listAllDepartment;

  const handleSignup = async (e) => {
    try {
      await AddClassData({
        variables: {
          data: { class_name: className, department_id: deptId },
        },
      });
      window.alert("Success");
      closeModal();
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="">
      <div className="">
        <h1>Create Class</h1>
        <div className="auth">
          <Input
            name="class_name"
            placeholder="Enter Class Name"
            type="text"
            value={className}
            handleInput={(e) => setClassName(e.target.value)}
          />

          <select
            name="department_id"
            onChange={(e) => setDeptId(parseInt(e.target.value))}
          >
            <option value="">Select Department</option>;
            {mainData.map((data) => {
              return (
                <option
                  key={data.id}
                  className="select-op"
                  value={data.id}
                  hidden={data.name === "Select Department"}
                >
                  {data.name}
                </option>
              );
            })}
          </select>
          <ButtonIn name="Add Class" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default AddClass;
