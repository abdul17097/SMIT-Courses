import React from "react";

const UserDetails = ({ data }) => {
  const { name, email, address, age, contact, gender } = data;
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[33%] border border-black rounded-lg h-[50vh] p-5 ">
        <div className="grid gap-3">
          <div className="grid grid-cols-3">
            <label className="" htmlFor="">
              Name:
            </label>
            <span className=" col-span-2">{name}</span>
          </div>
          <div className="grid grid-cols-3">
            <label className="" htmlFor="">
              Email:
            </label>
            <span className=" col-span-2">{email}</span>
          </div>
          <div className="grid grid-cols-3">
            <label className="" htmlFor="">
              Address:
            </label>
            <span className=" col-span-2">{address}</span>
          </div>
          <div className="grid grid-cols-3">
            <label className="" htmlFor="">
              Contact:
            </label>
            <span className=" col-span-2">{contact}</span>
          </div>
          <div className="grid grid-cols-3">
            <label className="" htmlFor="">
              Age:
            </label>
            <span className=" col-span-2">{age}</span>
          </div>
          <div className="grid grid-cols-3">
            <label className="" htmlFor="">
              Gender:
            </label>
            <span className=" col-span-2">{gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
