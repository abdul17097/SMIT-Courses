import { useState } from "react";

const ThirdForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border flex flex-col p-5 rounded shadow gap-5 w-[30%]"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border focus:outline-none p-2 rounded shadow"
            placeholder="example@gmailcom"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="border focus:outline-none p-2 rounded shadow"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </div>
        <button className="border focus:outline-none p-2 rounded shadow bg-blue-700 text-white cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default ThirdForm;
