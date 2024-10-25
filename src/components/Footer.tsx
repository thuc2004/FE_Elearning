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
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-7 h-7 bg-blue-500 text-white transition-all rounded-full">
              <IoSearch />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
