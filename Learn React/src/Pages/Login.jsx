import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const handleChangePassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };

  const handleLogin = () => {
    const { email, password } = userData;

    if (email.trim().length == 0) {
      alert("Please enter email");
      return;
    }
    if (password.trim().length == 0) {
      alert("Please enter password");
      return;
    }
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="w-screen h-screen border flex justify-center items-center">
        <div className="border border-black px-7 py-5 rounded-xl flex flex-col gap-7">
          <div className="flex flex-col gap-1 ">
            <span className="text-[18px]">Email:</span>
            <input
              className="border border-green-400 p-2 rounded-md focus:outline-none"
              value={userData.email}
              onChange={handleChangeEmail}
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <span className="text-[18px]">Password:</span>
            <input
              className="border border-green-400 p-2 rounded-md focus:outline-none"
              value={userData.password}
              onChange={handleChangePassword}
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <button
            className="flex border bg-green-200 justify-center items-center p-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
