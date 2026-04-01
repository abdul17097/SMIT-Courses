import React from "react";
import UserCard from "../components/UserCard";

const Dashboard = () => {
  const user = {
    id: 2,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    location: "New York",
    avatar: "https://i.pravatar.cc/150?img=3",
  };
  return (
    <div>
      <UserCard userDetails={user} />
    </div>
  );
};

export default Dashboard;
