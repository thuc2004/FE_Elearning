import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { IoSearch } from "react-icons/io5";

const ListHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleIconClick = () => {
    // Xử lý sự kiện khi nhấp vào icon tìm kiếm (nếu cần)
    console.log("Icon tìm kiếm được nhấn");
  };

  return (
    <div className="container mx-auto flex justify-center items-center space-x-8 py-4">
      <div className="flex items-center space-x-6">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none active:scale-95 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 shadow-md transition-transform duration-150 ease-in-out flex items-center"
        >
          <MenuOutlined />
          <span className="ml-2">Danh mục sản phẩm</span>
        </button>
        {isDropdownOpen && (
          <div className="flex space-x-6">
            <Link
              to="/product"
              className="text-black hover:text-gray-500"
              onClick={() => setDropdownOpen(false)}
            >
              Võ phục
            </Link>
            <Link
              to="/product"
              className="text-black hover:text-gray-500"
              onClick={() => setDropdownOpen(false)}
            >
              Dụng cụ võ thuật
            </Link>
            <Link
              to="/product"
              className="text-black hover:text-gray-500"
              onClick={() => setDropdownOpen(false)}
            >
              Binh khí võ thuật
            </Link>
          </div>
        )}
      </div>
      {/* Kéo dài thanh tìm kiếm */}
      <div className="flex-grow max-w-lg relative">
        {" "}
        {/* Thêm relative để icon có thể được đặt đúng vị trí */}
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 pr-10" // Thêm pr-10 để tránh overlap với icon
        />
        <span
          className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 text-white transition-all rounded-full cursor-pointer" // Kích thước lớn hơn cho icon
          onClick={handleIconClick}
        >
          <IoSearch />
        </span>
      </div>
    </div>
  );
};

export default ListHeader;
