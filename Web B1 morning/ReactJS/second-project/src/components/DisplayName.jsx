import React from "react";

const DisplayName = ({ name, role = "User" }) => {
  // const DisplayName = (props) => {
  return (
    <div>
      Name: {name} <br />
      Role: {role}
    </div>
  );
};

export default DisplayName;

// const { name, role } = {
//   name: "Alice Smith",
//   role: "Admin",
// };

// console.log(userDetails.name);
// console.log(userDetails.role);
// console.log(name);
// console.log(role);
