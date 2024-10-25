import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="flex space-x-20 mx-5">
      <Link to="/" className="text-black hover:text-gray-500 mx-2 font-medium">
        Trang chủ
      </Link>
      <Link
        to="/about"
        className="text-black hover:text-gray-500 mx-2 font-medium"
      >
        Giới thiệu
      </Link>
      <Link
        to="/courses"
        className="text-black hover:text-gray-500 mx-2 font-medium"
      >
        Khóa học
      </Link>
      <Link
        to="/news"
        className="text-black hover:text-gray-500 mx-2 font-medium"
      >
        Tin tức
      </Link>
      <Link
        to="/contact"
        className="text-black hover:text-gray-500 mx-2 font-medium"
      >
        Liên hệ
      </Link>
    </nav>
  );
};

export default NavLinks;
