import React, { useState } from "react";
import Input from "../../../Component/Inputs/Input";
import ButtonIn from "../../../Component/Button/ButtonIn";
import { useMutation } from "@apollo/client";
import { AddStaff_Mutation } from "../../../utils/Mutations";
const CreateStudent = () => {
  const [AddStaffData] = useMutation(AddStaff_Mutation);

  const [val, setVal] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };
  const handleFamilyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({
      ...prev,
      Family_info: {
        [name]: value,
      },
    }));
  };

  const handleSignup = async (e) => {
    try {
      await AddStaffData({
        variables: {
          data: val,
        },
      });
      window.alert("Success");
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div className="">
      <div className="">
        <h1>Register Student</h1>
        <div className="auth">
          <Input
            name="studentId"
            placeholder="Enter Student ID"
            type="text"
            value={val.studentId}
            handleInput={handleInput}
          />
          <Input
            name="studentName"
            placeholder="Enter Student Name"
            type="text"
            value={val.studentName}
            handleInput={handleInput}
          />
          <Input
            name="dateOfBirth"
            placeholder="Enter DOB"
            type="text"
            value={val.DOB}
            handleInput={handleInput}
          />
          <Input
            name="nationality"
            placeholder="Enter Nationality"
            type="text"
            value={val.nationality}
            handleInput={handleInput}
          />
          <Input
            name="gender"
            placeholder="Enter Gender"
            type="text"
            value={val.gender}
            handleInput={handleInput}
          />
          <Input
            name="hometown"
            placeholder="Enter Hometown"
            type="text"
            value={val.hometown}
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
            name="digitalAddress"
            placeholder="Enter digitalAddress"
            type="text"
            value={val.digitalAddress}
            handleInput={handleInput}
          />
          <Input
            name="motherTongue"
            placeholder="Enter Mother Tongue"
            type="text"
            value={val.motherTongue}
            handleInput={handleInput}
          />
          <Input
            name="secondLanguage"
            placeholder="Enter secondLanguage"
            type="text"
            value={val.secondLanguage}
            handleInput={handleInput}
          />
          <Input
            name="religion"
            placeholder="Enter religion"
            type="text"
            value={val.religion}
            handleInput={handleInput}
          />
          <Input
            name="admissionDate"
            placeholder="Enter admissionDate"
            type="text"
            value={val.admissionDate}
            handleInput={handleInput}
          />
          <Input
            name="admissionNumber"
            placeholder="Enter admissionNumber"
            type="text"
            value={val.admissionNumber}
            handleInput={handleInput}
          />
          <Input
            name="classOnAdmission"
            placeholder="Enter classOnAdmission"
            type="text"
            value={val.classOnAdmission}
            handleInput={handleInput}
          />
          <Input
            name="previous_school"
            placeholder="Enter previous_school"
            type="text"
            value={val.previous_school}
            handleInput={handleInput}
          />
          <Input
            name="admissionDate"
            placeholder="Enter admissionDate"
            type="text"
            value={val.admissionDate}
            handleInput={handleInput}
          />
          <Input
            name="previousSchoolLocation"
            placeholder="Enter previousSchoolLocation"
            type="text"
            value={val.previousSchoolLocation}
            handleInput={handleInput}
          />
          <Input
            name="classInPreviousSchool"
            placeholder="Enter classInPreviousSchool"
            type="text"
            value={val.classInPreviousSchool}
            handleInput={handleInput}
          />
          <Input
            name="studentImage"
            placeholder="Enter studentImage"
            type="text"
            value={val.studentImage}
            handleInput={handleInput}
          />
          <Input
            name="previousSchoolLocation"
            placeholder="Enter previousSchoolLocation"
            type="text"
            value={val.previousSchoolLocation}
            handleInput={handleInput}
          />
          <Input
            name="previousSchoolLocation"
            placeholder="Enter previousSchoolLocation"
            type="text"
            value={val.previousSchoolLocation}
            handleInput={handleInput}
          />
          {/* <select name="active" onChange={handleInput}>
            <option value="">Status</option>
            <option className="select-op" value={(val.active = true)}>
              Active
            </option>
            <option className="select-op" value={(val.active = false)}>
              Inactive
            </option>
          </select> */}
          <ButtonIn name="Add Staff" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
