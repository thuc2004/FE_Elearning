import React from "react";
import { Link } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8">
      <Link
        to="/"
        className="text-black hover:text-gray-500 mx-2 font-medium whitespace-nowrap"
      >
        Trang chủ
      </Link>
      <Link
        to="/"
        className="text-black hover:text-gray-500 mx-2 font-medium whitespace-nowrap"
      >
        Giới thiệu
      </Link>
      <Link
        to="/"
        className="text-black hover:text-gray-500 mx-2 font-medium whitespace-nowrap"
      >
        Khóa học
      </Link>
      <Link
        to="/"
        className="text-black hover:text-gray-500 mx-2 font-medium whitespace-nowrap"
      >
        Tin tức
      </Link>
      <Link
        to="/"
        className="text-black hover:text-gray-500 mx-2 font-medium whitespace-nowrap"
      >
        Liên hệ
      </Link>
    </nav>
  );
};

export default NavLinks;
