import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Portal/Authentication/Login";
import Dashboard from "./Pages/Portal/Dashoboard/Dashboard";
import Users from "./Pages/Portal/Manage_App/Users";
import Staffs from "./Pages/Portal/Manage_App/Staffs";
import Class from "./Pages/Portal/Manage_App/Class";
import Students from "./Pages/Portal/Manage_App/Student";
import Departments from "./Pages/Portal/Manage_App/Departments";
import CreateStudent from "./Pages/Portal/Manage_App/CreateStudent";
import HomeSwiper from "./Component/Swiper/HomeSwiper";
import Button from "./Component/Button/Button";

function App() {
  return (
    <>
      <div className="underconstruction">
        <img src="sohisLOGO.png" alt="sohis-logo" />
        <h1>Page Not Available</h1>
        <p>
          The page you are looking for is temporarily unavailable on mobile.
        </p>
        <Button name={"Go Home"} link={"/"} />
      </div>
      <div className="real-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="admissions" element={<CreateStudent />} />
            <Route path="portal" element={<Login />} />
            {/* <Route path="register" element={<SingUp />} /> */}
            <Route path="portal/dashboard" element={<Dashboard />} />
            <Route path="portal/dashboard" element={<Dashboard />} />
            <Route path="portal/dashboard/manage-users" element={<Users />} />
            <Route path="portal/dashboard/manage-staffs" element={<Staffs />} />
            <Route path="portal/dashboard/manage-classes" element={<Class />} />
            <Route
              path="portal/dashboard/manage-students"
              element={<Students />}
            />
            <Route
              path="portal/dashboard/manage-departments"
              element={<Departments />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
