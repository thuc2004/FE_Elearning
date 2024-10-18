import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../register/index.css';

export default function User() {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();  // Khởi tạo useNavigate

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Ngăn chặn hành vi mặc định của form
    // Điều hướng đến trang mới, ví dụ "/nextPage"
    navigate('/band');  
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='w-[500px] border px-2 py-5 rounded shadow-md flex flex-col gap-[12px]'>
        <h3 className='text-center text-[20px] font-bold text-blue-500 uppercase'>
          Chào mừng bạn
        </h3>
        <p className='text-center'>Vui lòng chọn chương trình của bạn</p>

        <div className="flex justify-center gap-x-4">
          <button
            type="button"
            className={`px-4 py-2 border rounded-full ${selectedButton === 'lam' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
            onClick={() => handleButtonClick('lam')}
          >
            lam đai
          </button>

          <button
            type="button"
            className={`px-4 py-2 border rounded-full ${selectedButton === 'hoang' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
            onClick={() => handleButtonClick('hoang')}
          >
            hoàng đai
          </button>

          <button
            type="button"
            className={`px-4 py-2 border rounded-full ${selectedButton === 'hong' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
            onClick={() => handleButtonClick('hong')}
          >
            hồng đai
          </button>
        </div>

        <div>
          <button type='submit' className='w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
            tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
}
