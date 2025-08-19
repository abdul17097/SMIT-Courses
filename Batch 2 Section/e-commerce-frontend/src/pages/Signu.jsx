import React, { useState } from "react";
import { RegisterForm } from "../components/SignupForm";

export const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <RegisterForm />
    </div>
  );
};
