import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params.id);

  return <div>UserDetails</div>;
};

export default UserDetail;
