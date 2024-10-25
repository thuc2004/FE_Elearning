import React from "react";

interface MenuShopProps {
  img: string; // Kiểu string cho ảnh
  title: string; // Kiểu string cho tiêu đề
  number: number; // Kiểu number cho số (hoặc có thể là string nếu số dạng chuỗi)
}

const MenuShop: React.FC<MenuShopProps> = (props) => {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-center">
        <img
          src={props.img}
          alt={props.title}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="mt-2">
        <h4 className="text-base font-semibold">{props.title}</h4>
        <h4 className="text-lg font-semibold text-red-500">{props.number}</h4>
      </div>
    </div>
  );
};

export default MenuShop;
