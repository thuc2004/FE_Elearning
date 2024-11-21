// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input, Button } from 'antd';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function ResetPassword() {
//   const { token } = useParams(); // Lấy token từ URL
//   const navigate = useNavigate();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [message, setMessage] = useState('');

//   const validatePassword = () => {
//     if (!password) {
//       setPasswordError('Mật khẩu không được bỏ trống');
//       return false;
//     } else if (password.length < 8) {
//       setPasswordError('Mật khẩu phải có ít nhất 8 ký tự');
//       return false;
//     } else if (password !== confirmPassword) {
//       setPasswordError('Mật khẩu xác nhận không khớp');
//       return false;
//     } else {
//       setPasswordError('');
//       return true;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validatePassword()) {
//       try {
//         const response = await axios.post(`http://localhost:3000/reset-password/${token}`, { password });
//         if (response.data.success) {
//           setMessage('Mật khẩu đã được đặt lại thành công.');
//           setTimeout(() => {
//             navigate('/login');
//           }, 2000); // Điều hướng về trang đăng nhập sau 2 giây
//         } else {
//           setMessage('Token không hợp lệ hoặc đã hết hạn.');
//         }
//       } catch (error) {
//         console.error('Có lỗi xảy ra:', error);
//         setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="w-[400px] border px-4 py-6 rounded shadow-md flex flex-col gap-4">
//         <h3 className="text-center text-xl font-semibold">Đặt lại mật khẩu</h3>

//         <div className="flex flex-col gap-2">
//           <label>Mật khẩu mới</label>
//           <Input.Password
//             placeholder="Nhập mật khẩu mới"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label>Xác nhận mật khẩu</label>
//           <Input.Password
//             placeholder="Xác nhận mật khẩu mới"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}

//         <Button type="primary" htmlType="submit" className="w-full">
//           Đặt lại mật khẩu
//         </Button>

//         {message && <p className="text-green-500 text-center mt-4">{message}</p>}
//       </form>
//     </div>
//   );
// }
