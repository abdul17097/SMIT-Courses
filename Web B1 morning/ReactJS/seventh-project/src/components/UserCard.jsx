import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const UserCard = ({ userDetails }) => {
  return (
    <Link to={`/user-details/${userDetails.id}`}>
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 cursor-pointer border hover:border-blue-500">
        {/* Avatar */}
        <div className="flex items-center space-x-4">
          <img
            src={userDetails.avatar || "https://via.placeholder.com/80"}
            alt="user avatar"
            className="w-16 h-16 rounded-full object-cover border"
          />

          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaUser className="text-blue-500" />
              {userDetails.name}
            </h2>
            <p className="text-sm text-gray-500">@{userDetails.username}</p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-2 text-gray-600 text-sm">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-green-500" />
            {userDetails.email}
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            {userDetails.location || "Unknown location"}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 text-right">
          <span className="text-blue-500 text-sm font-medium hover:underline">
            View Profile →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
