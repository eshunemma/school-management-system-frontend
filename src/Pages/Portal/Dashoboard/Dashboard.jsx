import React, { useState } from "react";
import { decodedToken } from "../../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ButtonIn from "../../../Component/Button/ButtonIn";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated") || false
  );

  useEffect(() => {
    const loginUser = sessionStorage.getItem("authenticated");
    if (loginUser) {
      setAuthenticated(loginUser);
    }
  }, []);

  const handleRoute = async (e) => {
    const id = e.target.id;
    console.log(id);
    navigate(`/portal/dashboard/${id}`);
  };
  const verifyToken = decodedToken();

  if (!authenticated) {
    window.alert("Not Authenticated");
    navigate("/portal");
  } else {
    return (
      <div>
        <h1 className="welcome">Welcome {verifyToken?.name}!!!</h1>

        <div className="set-rou">
          <ButtonIn
            id="manage-users"
            class="set-but"
            name="Manage Users"
            onClick={handleRoute}
          />
          <ButtonIn
            id="manage-staffs"
            class="set-but"
            name="Manage Staffs"
            onClick={handleRoute}
          />
          <ButtonIn
            id="manage-classes"
            class="set-but"
            name="Manage Classes"
            onClick={handleRoute}
          />
          <ButtonIn
            id="manage-departments"
            class="set-but"
            name="Manage Departments"
            onClick={handleRoute}
          />
          <ButtonIn
            id="manage-students"
            class="set-but"
            name="Manage Students"
            onClick={handleRoute}
          />
        </div>
      </div>
    );
  }
};

export default Dashboard;
