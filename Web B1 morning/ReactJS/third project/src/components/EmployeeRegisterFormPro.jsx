import React, { useState } from "react";
import { resume } from "react-dom/server";

const EmployeeRegisterFormPro = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: null,
    designation: "",
    gender: "",
    hobbies: [],
    department: "",
    resume: null,
  });

  let handleChange = (e) => {
    const { name, value, checked, files } = e.target;
    // hobbies
    if (name === "hobbies") {
      if (checked) {
        setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
      } else {
        setFormData({
          ...formData,
          hobbies: [...formData.hobbies.filter((hobby) => hobby !== value)],
        });
      }
    } else if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border py-6 px-10 rounded shadow flex flex-col gap-2 w-[40%] m-auto mt-10"
    >
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
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cnic">CNIC:</label>
        <input
          className="border p-2 rounded focus:outline-none"
          type="text"
          id="cnic"
          name="cnic"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="designation">Designation:</label>
        <input
          className="border p-2 rounded focus:outline-none"
          type="text"
          id="designation"
          name="designation"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Gender:</label>
        <div className="flex gap-2 font-semibold">
          <input
            type="radio"
            onChange={handleChange}
            name="gender"
            value={"male"}
          />{" "}
          Male
          <input
            type="radio"
            onChange={handleChange}
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
            onChange={handleChange}
            name="hobbies"
          />{" "}
          Reading
          <input
            type="checkbox"
            onChange={handleChange}
            name="hobbies"
            value={"traveling"}
          />{" "}
          Traveling
          <input
            type="checkbox"
            onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <button className="border p-2 rounded focus:outline-none hover:bg-green-700 hover:text-white transition-all duration-100 hover:border-none">
        Register
      </button>
    </form>
  );
};

export default EmployeeRegisterFormPro;
