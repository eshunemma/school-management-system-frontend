import React, { useState } from "react";
import Input from "../../../Component/Inputs/Input";
import ButtonIn from "../../../Component/Button/ButtonIn";
import { useMutation } from "@apollo/client";
import { AddStaff_Mutation } from "../../../utils/Mutations";
import { useNavigate, Link } from "react-router-dom";
const AddStaff = ({ closeModal }) => {
  const [AddStaffData] = useMutation(AddStaff_Mutation);

  const [val, setVal] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  console.log(val);

  const handleSignup = async (e) => {
    try {
      await AddStaffData({
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
        <h1>Add a Staff</h1>
        <div className="auth">
          <Input
            name="staffName"
            placeholder="Enter Name"
            type="text"
            value={val.staffName}
            handleInput={handleInput}
          />
          <Input
            name="staffId"
            placeholder="Enter Staff ID"
            type="text"
            value={val.staffId}
            handleInput={handleInput}
          />
          <Input
            name="snnitId"
            placeholder="Enter SNNIT ID"
            type="text"
            value={val.snnitId}
            handleInput={handleInput}
          />
          <Input
            name="phoneNumber"
            placeholder="Enter Phone"
            type="text"
            value={val.phoneNumber}
            handleInput={handleInput}
          />
          <Input
            name="nationalId"
            placeholder="Enter National ID"
            type="text"
            value={val.nationalId}
            handleInput={handleInput}
          />
          <Input
            name="email"
            placeholder="Enter Email"
            type="email"
            value={val.email}
            handleInput={handleInput}
          />
          <Input
            name="destination"
            placeholder="Enter Destination"
            type="text"
            value={val.destination}
            handleInput={handleInput}
          />
          <Input
            name="dateJoined"
            placeholder="Enter Date Joined"
            type="text"
            value={val.dateJoined}
            handleInput={handleInput}
          />
          <Input
            name="DOB"
            placeholder="Enter DOB"
            type="text"
            value={val.DOB}
            handleInput={handleInput}
          />
          <select name="active" onChange={handleInput}>
            <option value="">Status</option>
            <option className="select-op" value={(val.active = true)}>
              Active
            </option>
            <option className="select-op" value={(val.active = false)}>
              Inactive
            </option>
          </select>
          <ButtonIn name="Add Staff" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
