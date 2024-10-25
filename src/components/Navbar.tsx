import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import các component con
import TopHeader from "../components/Products/TopHeader";
import NavLinks from "../components/Products/NavLinks";
import SearchBar from "../components/Products/SearchBar";
import AccountButtons from "../components/Products/AccountButtons";
// import Banner from "./header/banner";

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Kiểu dữ liệu cho sự kiện thay đổi của ô tìm kiếm
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  // Kiểu dữ liệu cho sự kiện submit form tìm kiếm
  const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Tìm kiếm:", searchTerm);
  };

  return (
    <div>
      {/* Header nhỏ trên */}
      <TopHeader />

      {/* Thanh điều hướng chính */}
      <div className="bg-white flex justify-between items-center py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="header__logo">
              <img
                src="1.png"
                alt="Logo"
                className="w-40 h-20" // Điều chỉnh kích thước logo
              />
            </Link>
          </div>

          {/* Liên kết điều hướng */}
          <NavLinks />

          {/* Thanh tìm kiếm và các nút */}
          <div className="flex items-center space-x-11">
            <SearchBar
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
            />
            <AccountButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
