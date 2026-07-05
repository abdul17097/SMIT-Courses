import React from "react";

const ConditionalStatement = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <div>Page Not Found!</div>;
  }

  return <div>Welcome to the Dashboard!</div>;
};

export default ConditionalStatement;
