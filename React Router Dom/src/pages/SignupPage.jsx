// import { useEffect, useRef, useState } from "react";

// export const SignupPage = () => {
//   const searchInputRef = useRef();
//   const [message, setMessage] = useState("Hello");
//   console.log(message);

//   const handleSearch = () => {
//     searchInputRef.current.focus();
//   };

//   useEffect(() => {
//     searchInputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <h1>Signup Page</h1>
//       <div className="">
//         <input
//           ref={searchInputRef}
//           type="text"
//           placeholder="Search ..."
//           className="border border-black rounded-md my-5 p-2"
//         />
//         <button
//           onClick={handleSearch}
//           className="border p-2 ml-5 rounded-lg border-black"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const SignupPage = () => {
  // const history = useNavigate();

  // const userLoginSuccess = false;

  // const handleLogin = () => {
  //   if (userLoginSuccess) {
  //     history("/products");
  //   } else {
  //     history("/");
  //   }
  // };
  // const history("/");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // const { data } = await axios.post("http://localhost:3000/user/addUser", {
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password,
    // });
    const response = await fetch("http://localhost:3000/user/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data.success) {
      alert(data.message);
    } else {
      alert(data.message);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="my-10">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 border border-black rounded-lg p-4 w-[500px]"
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="">UserName:</label>
          <input
            className="border border-black focus:outline-none rounded-md px-2 py-1"
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="">Email:</label>
          <input
            className="border border-black focus:outline-none rounded-md px-2 py-1"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="">Password:</label>
          <input
            className="border border-black focus:outline-none rounded-md px-2 py-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-400 text-white rounded-md px-2 py-1"
        >
          Signup
        </button>
      </form>

      {/* Form for user login */}
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};
