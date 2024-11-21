import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearchChange,
  handleSearchSubmit,
}) => {
  // Thêm hàm handleIconClick để submit form khi nhấn vào icon
  const handleIconClick = () => {
    // Tạo một sự kiện submit giả để form xử lý
    const fakeEvent = new Event("submit", { cancelable: true, bubbles: true });
    const formElement = document.querySelector("form");
    if (formElement) {
      formElement.dispatchEvent(fakeEvent);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative flex items-center">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
      />
      <span
        className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-7 h-7 bg-blue-500 text-white transition-all rounded-full cursor-pointer" // Thêm cursor-pointer để hiển thị trỏ chuột
        onClick={handleIconClick} // Gọi hàm handleIconClick khi nhấn vào icon
      >
        <IoSearch />
      </span>
    </form>
  );
};

export default SearchBar;
