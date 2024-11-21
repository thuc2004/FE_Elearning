import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline, IoHelpCircleOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-blue-700 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 ml-auto">
          <Link
            to="#"
            className="text-white hover:text-gray-800 flex items-center"
          >
            <IoNotificationsOutline className="ml-2" />
            Thông báo
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-800 flex items-center"
          >
            <IoHelpCircleOutline className="ml-2" />
            Hỗ trợ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
