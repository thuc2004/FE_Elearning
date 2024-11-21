import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Footer: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearchChange,
  handleSearchSubmit,
}) => {
  return (
    <div className="bg-blue-700 flex items-center">
      {" "}
      {/* Căn giữa nội dung theo chiều dọc */}
      <div className="container mx-auto flex justify-between items-center ">
        {" "}
        {/* Chia ra 2 bên */}
        <div className="">
          {" "}
          {/* Nội dung bên trái */}
          <h3 className="text-white mb-4 font-bold mt-4">
            Đăng ký nhận tin tức
          </h3>
          <p className="text-white mb-4 text-sm whitespace-nowrap">
            Đăng ký để nhận được những thông tin mới và sản phẩm khuyến mại.
          </p>
        </div>
        <div className="flex w-full justify-end">
          {" "}
          {/* Thanh tìm kiếm bên phải */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-grow max-w-lg relative"
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 pr-10"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 text-white transition-all rounded-full cursor-pointer">
              <IoSearch />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
