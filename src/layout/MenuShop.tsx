import React from "react";
import { Link } from "react-router-dom";

interface MenuShopProps {
  img: string; // Kiểu string cho đường dẫn ảnh
  title?: string; // Kiểu string, không bắt buộc (optional)
  number?: string; // Kiểu string, không bắt buộc (optional)
}

const MenuShop: React.FC<MenuShopProps> = ({ img, title, number }) => {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-center">
        <Link to="">
          <img
            src={img}
            alt={title || "Product Image"}
            className="rounded-lg w-full h-auto"
          />
        </Link>
      </div>
      {title && (
        <div className="mt-2">
          <h4 className="text-base font-semibold">{title}</h4>
        </div>
      )}
      {number && (
        <div>
          <h4 className="text-lg font-semibold text-red-500">{number}</h4>
        </div>
      )}
    </div>
  );
};

export default MenuShop;
