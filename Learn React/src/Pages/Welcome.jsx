import React from "react";

const Welcome = ({ message1, message2, message3, message4 }) => {
  return (
    <>
      <div>welcome to {message1} </div>;<div>welcome to {message2} </div>;
      <div>welcome to {message3} </div>;<div>welcome to {message4} </div>;
    </>
  );
};

export default Welcome;
