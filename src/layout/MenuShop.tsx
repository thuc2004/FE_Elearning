import React from "react";
import { Link } from "react-router-dom";

interface MenuShopProps {
  idVariant?: string;
  idProduct: string;
  img: string; // Kiểu string cho đường dẫn ảnh
  title?: string; // Kiểu string, không bắt buộc (optional)
  number?: string; // Kiểu string, không bắt buộc (optional)
}

const MenuShop: React.FC<MenuShopProps> = ({
  img,
  title,
  number,
  idProduct,
  idVariant,
}) => {
  console.log(img);

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
      <div className="flex justify-center">
        <Link to={`/${idProduct}/detail/${idVariant}`}>
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
