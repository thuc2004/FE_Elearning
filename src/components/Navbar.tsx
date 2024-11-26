import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {
//   IoHelpCircleOutline,
//   IoNotificationsOutline,
//   IoSearch,
// } from "react-icons/io5";
// import { IoPersonOutline } from "react-icons/io5";
// import { LiaShoppingBagSolid } from "react-icons/lia";
// import { Badge } from "antd";
import NavLinks from "./Products/NavLinks";
import SearchBar from "./Products/SearchBar";
import AccountButtons from "./Products/AccountButtons";
import TopHeader from "./Products/TopHeader";

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Tìm kiếm:", searchTerm);
  };

  return (
    <div>
      <TopHeader />
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/home" className="header__logo">
                <img
                  src="1.png"
                  alt="Logo"
                  className="w-24 h-16 md:w-32 md:h-20"
                />
              </Link>
            </div>

            {/* Navigation Menu - Center */}
            <div className="hidden md:flex justify-center flex-1">
              <NavLinks />
            </div>

            {/* SearchBar + AccountButtons */}
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
              />
              <AccountButtons />
            </div>

            {/* Hamburger Menu Icon (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
