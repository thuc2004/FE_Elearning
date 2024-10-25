// import React, { useState } from "react";
// import { Input } from "antd";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "../register/index.css";

// export default function File_image() {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null); // State để lưu file ảnh
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Khởi tạo useNavigate

//   const handleButtonClick = (buttonName) => {
//     setSelectedButton(buttonName);
//     setError(""); // Xóa lỗi khi chọn chương trình
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file); // Lưu file được chọn vào state
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Ngăn chặn hành vi mặc định của form

//     if (!selectedButton) {
//       setError("Vui lòng chọn chương trình trước khi tiếp tục.");
//       return;
//     }

//     if (!selectedFile) {
//       setError("Vui lòng tải lên hình ảnh chứng chỉ trước khi tiếp tục.");
//       return;
//     }

//     // Tạo FormData để gửi tệp
//     const formData = new FormData();
//     formData.append("program", selectedButton);
//     formData.append("certificate", selectedFile);

//     try {
//       // Gửi tệp đến máy chủ
//       const response = await fetch("YOUR_API_ENDPOINT", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Lỗi khi gửi dữ liệu.");
//       }

//       // Điều hướng đến trang tiếp theo
//       navigate("/");
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Đã xảy ra lỗi khi gửi dữ liệu.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="w-[500px] border px-2 py-5 rounded shadow-md flex flex-col gap-[12px]"
//       >
//         <h3 className="text-center text-[20px] font-bold text-blue-500 uppercase">
//           Chào mừng bạn
//         </h3>
//         <p className="text-center text-xl px-10">
//           Vui lòng tải lên hình ảnh chứng chỉ cho trình độ của bạn
//         </p>
//         <div className="flex justify-center gap-x-4"></div>

//         <div className="mt-4 bg-gray-200 border border-gray-300 rounded p-5 w-1/2 mx-auto">
//           {" "}
//           {/* Giới hạn chiều rộng khung và căn giữa */}
//           <label
//             htmlFor="file-upload"
//             className="cursor-pointer block text-center"
//           >
//             {" "}
//             {/* Label có thể nhấn */}
//             <Input
//               id="file-upload"
//               type="file"
//               onChange={handleFileChange}
//               accept="image/*"
//               className="hidden" // Ẩn input file nhưng vẫn có thể kích hoạt khi nhấn vào label
//             />
//             {/* Hiển thị tên tệp nếu có */}
//             <span className="block text-center text-gray-700 font-semibold">
//               {selectedFile ? (
//                 selectedFile.name
//               ) : (
//                 <>
//                   Chọn file chứng chỉ
//                   <div className="text-center text-gray-500 font-normal mt-1">
//                     {" "}
//                     {/* Đặt khoảng cách giữa hai dòng */}
//                     Định dạng: JPG, PNG, dung lượng tối đa 5MB
//                   </div>
//                 </>
//               )}
//             </span>
//           </label>
//         </div>

//         {/* Hiển thị thông báo lỗi nếu chưa chọn chương trình hoặc chưa tải file */}
//         {error && <p className="text-red-500 text-center mt-2">{error}</p>}

//         <div className="mt-4">
//           <button
//             type="submit"
//             className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//           >
//             Tiếp tục
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
