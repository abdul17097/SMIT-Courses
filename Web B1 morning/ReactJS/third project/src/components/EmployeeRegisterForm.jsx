import React, { useState } from "react";
import { resume } from "react-dom/server";

const EmployeeRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: null,
    designation: "",
    gender: "",
    hobbies: [],
    department: "",
    resume: null,
  });
  const [hobbies, setHobbies] = useState(["reading"]);
  let handleFile = (event) => {
    console.log(event.target.files[0]);
  };

  let handleHobbies = (e) => {
    const { value, checked } = e.target;

    const filterHobbies = hobbies.filter((hobby) => {
      return hobby !== value;
    });

    // if(checked === true){
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies([...filterHobbies]);
    }

    // checked ? setHobbies([...hobbies, value]) : setHobbies(filterHobbies);
  };
  console.log(hobbies);

  let handleGender = (e) => {
    const { name, value } = e.target;
    console.log("name: ", name, "value:  ", value);
  };
  let handleDepartment = (e) => {
    const { name, value } = e.target;
    console.log("name: ", name, "value:  ", value);
  };

  return (
    <form className="border py-6 px-10 rounded shadow flex flex-col gap-2 w-[40%] m-auto mt-10">
      <h2 className="text-3xl font-semibold text-center">
        Employee Registration Form
      </h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name:</label>
        <input
          className="border p-2 rounded focus:outline-none"
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cnic">CNIC:</label>
        <input
          className="border p-2 rounded focus:outline-none"
          type="text"
          id="cnic"
          name="cnic"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="designation">Designation:</label>
        <input
          className="border p-2 rounded focus:outline-none"
          type="text"
          id="designation"
          name="designation"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Gender:</label>
        <div className="flex gap-2 font-semibold">
          <input
            type="radio"
            onChange={handleGender}
            name="gender"
            value={"male"}
          />{" "}
          Male
          <input
            type="radio"
            onChange={handleGender}
            name="gender"
            value={"female"}
          />{" "}
          Female
        </div>
      </div>
      {/* checkbox */}
      <div className="flex flex-col gap-1">
        <label>Hobbies:</label>
        <div className="flex gap-2 font-semibold">
          <input
            type="checkbox"
            value={"reading"}
            onChange={handleHobbies}
            name="hobbies"
          />{" "}
          Reading
          <input
            type="checkbox"
            onChange={handleHobbies}
            name="hobbies"
            value={"traveling"}
          />{" "}
          Traveling
          <input
            type="checkbox"
            onChange={handleHobbies}
            name="hobbies"
            value={"sports"}
          />{" "}
          Sports
        </div>
      </div>
      {/* options */}
      <div className="flex flex-col gap-1">
        <label htmlFor="department">Department:</label>
        <select
          className="border p-2 rounded focus:outline-none"
          id="department"
          name="department"
          onChange={handleDepartment}
        >
          <option value={"hr"}>HR</option>
          <option value={"it"}>IT</option>
          <option value={"finance"}>Finance</option>
        </select>
      </div>
      {/* file upload */}
      <div className="flex flex-col gap-1">
        <label htmlFor="resume">Upload Resume:</label>
        <input
          className="border p-2 rounded focus:outline-none"
          type="file"
          id="resume"
          name="resume"
          onChange={handleFile}
        />
      </div>
      <button
        type="submit"
        className="border p-2 rounded focus:outline-none hover:bg-green-700 hover:text-white transition-all duration-100 hover:border-none"
      >
        Register
      </button>
    </form>
  );
};

export default EmployeeRegisterForm;
