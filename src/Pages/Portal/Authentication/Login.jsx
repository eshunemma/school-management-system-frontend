import React, { useState } from "react";
import "./Auth.css";
import Input from "../../../Component/Inputs/Input";
import ButtonIn from "../../../Component/Button/ButtonIn";
import { useMutation } from "@apollo/client";
import { Login_Mutation } from "../../../utils/Mutations";
import { setToken } from "../../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData] = useMutation(Login_Mutation);

  const [val, setVal] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    try {
      const result = await loginData({
        variables: {
          data: val,
        },
      });
      window.alert(result.data?.signIn.message);
      sessionStorage.setItem("authenticated", true);
      setToken(result.data?.signIn.token);
      navigate("/portal/dashboard");
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="mn-con">
      <a href="/">Go back home</a>
      <div className="mn-c">
        <div className="top-img">
          <img src="sohis-logo.png" alt="sohis-logo" />
        </div>
        <h1>Welcome to SOHIS Portal</h1>
        <h1>Login</h1>
        <div className="auth">
          <Input
            name="email"
            placeholder="Enter Email"
            type="text"
            value={val.email}
            handleInput={handleInput}
          />
          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            value={val.password}
            handleInput={handleInput}
          />
          <ButtonIn name="Login" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
