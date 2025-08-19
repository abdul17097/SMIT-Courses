import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <LoginForm />
    </div>
  );
};
