import React, { useState } from "react";
import "./Auth.css";
import Input from "../../../Component/Inputs/Input";
import ButtonIn from "../../../Component/Button/ButtonIn";
import { useMutation } from "@apollo/client";
import { SignUp_Mutation } from "../../../utils/Mutations";
import { useNavigate, Link } from "react-router-dom";

const SingUp = ({ closeModal }) => {
  const [SignUpData] = useMutation(SignUp_Mutation);

  const [val, setVal] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    try {
      const result = await SignUpData({
        variables: {
          data: val,
        },
      });
      window.alert(result.data?.signUp.message);
      closeModal();
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="">
      <div className="">
        <h1>Invite User</h1>
        <div className="auth">
          <Input
            name="name"
            placeholder="Enter Name"
            type="text"
            value={val.name}
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
            name="userName"
            placeholder="Enter User Name"
            type="text"
            value={val.userName}
            handleInput={handleInput}
          />
          <select name="role" onChange={handleInput}>
            <option value="">Select Role</option>
            <option className="select-op" value="Admin">
              Admin
            </option>
            <option className="select-op" value="Teacher">
              Teacher
            </option>
            <option className="select-op" value="student">
              Student
            </option>
          </select>
          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            value={val.password}
            handleInput={handleInput}
          />
          <ButtonIn name="Invite" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default SingUp;
