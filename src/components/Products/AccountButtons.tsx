import { Badge } from "antd";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const AccountButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
      {/* Nút "Mua sắm" */}
      <div>
        <Link
          to="/shop"
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all rounded-full block text-center"
        >
          Mua sắm
        </Link>
      </div>

      {/* Nút "Giỏ hàng" */}
      <div>
        <Link
          to="/shopping"
          className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 bg-white text-black hover:text-gray-400 rounded-full relative"
        >
          <Badge count={4} offset={[10, -5]} color="red">
            <LiaShoppingBagSolid style={{ fontSize: "1.5rem" }} />
          </Badge>
        </Link>
      </div>

      {/* Nút "Tài khoản" */}
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 bg-white text-black hover:text-gray-400 rounded-full"
        >
          <IoPersonOutline style={{ fontSize: "1.5rem" }} />
        </Link>
      </div>
    </div>
  );
};

export default AccountButtons;
