import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const AccountButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-11">
      <div>
        <Link
          to="/shop"
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all rounded-full"
        >
          Mua sắm
        </Link>
      </div>
      <div>
        <Link
          to="/" // Đường dẫn khi nhấn vào biểu tượng khóa
          className="flex items-center justify-center w-9 h-9 border-2 border-gray-400 bg-white text-black hover:text-gray-400 rounded-full"
        >
          <LiaShoppingBagSolid />
        </Link>
      </div>
      <div>
        <Link
          to="/login" // Đường dẫn khi nhấn vào biểu tượng tài khoản
          className="flex items-center justify-center w-9 h-9 border-2 border-gray-400 bg-white text-black hover:text-gray-400 rounded-full"
        >
          <IoPersonOutline />
        </Link>
      </div>
    </div>
  );
};

export default AccountButtons;
