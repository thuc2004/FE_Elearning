// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../register/index.css';

// export default function Band() {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const navigate = useNavigate();  // Khởi tạo useNavigate
//   const [error, setError] = useState('');

//   const handleButtonClick = (buttonName) => {
//     setSelectedButton(buttonName);
//     setError(''); // Xóa thông báo lỗi nếu có lựa chọn
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedButton) {
//       setError('Vui lòng chọn chương trình trước khi tiếp tục.');
//       return;
//     }
//     // Chuyển hướng đến trang file_image
//     navigate('/file_image');
//   };

//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <form
//         onSubmit={handleSubmit}
//         className='w-[500px] border px-2 py-5 rounded shadow-md flex flex-col gap-[12px]'
//       >
//         <h3 className='text-center text-[20px] font-bold text-blue-500 uppercase'>
//           Chào mừng bạn
//         </h3>
//         <p className='text-center'>Vui lòng chọn chương trình của bạn</p>

//         <div className="flex justify-center gap-x-4">
//           <button
//             type="button"
//             className={`px-4 py-2 border rounded-full ${selectedButton === 'tuve' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
//             onClick={() => handleButtonClick('tuve')}
//           >
//             Tự vệ
//           </button>

//           <button
//             type="button"
//             className={`px-4 py-2 border rounded-full ${selectedButton === 'lamdaidon' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
//             onClick={() => handleButtonClick('lamdaidon')}
//           >
//             Lam đai đơn
//           </button>
//         </div>

//         <div className="flex justify-center gap-x-4">
//           <button
//             type="button"
//             className={`px-4 py-2 border rounded-full ${selectedButton === 'lamdainhat' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
//             onClick={() => handleButtonClick('lamdainhat')}
//           >
//             Lam đai nhất
//           </button>

//           <button
//             type="button"
//             className={`px-4 py-2 border rounded-full ${selectedButton === 'lamdainhi' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
//             onClick={() => handleButtonClick('lamdainhi')}
//           >
//             Lam đai nhị
//           </button>
//         </div>

//         <div className="flex justify-center gap-x-4">
//           <button
//             type="button"
//             className={`px-4 py-2 border rounded-full ${selectedButton === 'lamdaitam' ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-500'}`}
//             onClick={() => handleButtonClick('lamdaitam')}
//           >
//             Lam đai tam
//           </button>
//         </div>

//         {/* Hiển thị thông báo lỗi nếu không có lựa chọn */}
//         {error && <p className='text-red-500 text-center'>{error}</p>}

//         <div>
//           <button
//             type='submit'
//             className={`w-full py-3 text-white rounded-md ${selectedButton ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
//             disabled={!selectedButton} // Vô hiệu hóa nút nếu không có lựa chọn
//           >
//             Tiếp tục
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
