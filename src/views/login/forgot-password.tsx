import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('Email không được bỏ trống');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email không hợp lệ');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleSubmit = async (e:  React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        // Gửi yêu cầu tới server
        const response = await axios.post('/users/create-user', { email });
        if (response.data.success) {
          setMessage('Email khôi phục mật khẩu đã được gửi, vui lòng kiểm tra email của bạn.');
        } else {
          setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        }
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-[400px] border px-4 py-6 rounded shadow-md flex flex-col gap-4">
        <h3 className="text-center text-xl font-semibold">Quên mật khẩu</h3>
        
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <Input 
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={handleChange}
          />
          {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
        </div>

        <Button type="primary" htmlType="submit" className="w-full">
          Gửi yêu cầu
        </Button>

        {message && <p className="text-green-500 text-center mt-4">{message}</p>}

        <div className="text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Quay lại trang đăng nhập</Link>
        </div>
      </form>
    </div>
  );
}
