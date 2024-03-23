import React, { useState } from "react";
import Input from "../../../Component/Inputs/Input";
import ButtonIn from "../../../Component/Button/ButtonIn";
import { useMutation } from "@apollo/client";
import { AddDepartment_Mutation } from "../../../utils/Mutations";

const AddDepartment = ({ closeModal }) => {
  const [AddDepartmentData] = useMutation(AddDepartment_Mutation);

  const [val, setVal] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    try {
      await AddDepartmentData({
        variables: {
          data: val,
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
            name="name"
            placeholder="Enter Department Name"
            type="text"
            value={val.name}
            handleInput={handleInput}
          />
          <ButtonIn name="Add Department" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
