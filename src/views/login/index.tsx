import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../register/index.css"; // Import file CSS tùy chỉnh
import axiosInstance from "../../api/axios";

export const Login: React.FC = () => {
  const navigate = useNavigate(); // Hook dùng để điều hướng
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState(""); // Trạng thái lỗi cho tên đăng nhập
  const [passwordError, setPasswordError] = useState(""); // Trạng thái lỗi cho mật khẩu

  // Hàm kiểm tra dữ liệu nhập
  const validateData = (name: string, value: string) => {
    let isValid = true;
    switch (name) {
      case "userName":
        if (!value) {
          setUsernameError("Tên đăng nhập không được bỏ trống");
          isValid = false;
        } else {
          setUsernameError(""); // Xóa lỗi nếu hợp lệ
        }
        break;
      case "password":
        if (!value) {
          setPasswordError("Mật khẩu không được bỏ trống");
          isValid = false;
        } else if (value.length < 8) {
          setPasswordError("Mật khẩu phải có ít nhất 8 ký tự");
          isValid = false;
        } else {
          setPasswordError(""); // Xóa lỗi nếu hợp lệ
        }
        break;
      default:
        break;
    }
    return isValid;
  };

  // Hàm xử lý thay đổi dữ liệu nhập
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateData(name, value); // Kiểm tra dữ liệu khi nhập
  };

  // Hàm xử lý gửi form đăng nhập
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra tính hợp lệ của dữ liệu
    const usernameValid = validateData("userName", user.userName);
    const passwordValid = validateData("password", user.password);

    if (usernameValid && passwordValid) {
      try {
        // Gọi API kiểm tra tài khoản dựa trên username
        const response = await axiosInstance.post("/users/login", user);
        const existingUser = response.data; // Giả định response trả về danh sách người dùng
        console.log(existingUser);

        if (!existingUser) {
          // alert("Tài khoản chưa được đăng ký.");
        } else if (existingUser.message == "Incorrect password") {
          alert("Mật khẩu không chính xác.");
        } else {
          alert("Đăng nhập thành công!");
          await localStorage.setItem("token", existingUser.data);
          navigate("/users"); // Điều hướng đến trang người dùng sau khi đăng nhập thành công
        }
      } catch (error) {
        console.error("Có lỗi xảy ra khi đăng nhập:", error);
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] border px-2 py-5 rounded shadow-md flex flex-col gap-[12px]"
      >
        <h3 className="text-center text-[20px] font-semibold uppercase">
          Đăng nhập
        </h3>

        <div className="flex flex-col gap-2">
          <label className="block text-[14px] font-semibold">
            Tên đăng nhập
          </label>
          <Input
            onChange={handleChange}
            name="userName"
            placeholder="Tên đăng nhập"
          />
          {usernameError && (
            <span className="error-message text-red-500">{usernameError}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="block text-[14px] font-semibold">Mật khẩu</label>
          <Input
            onChange={handleChange}
            name="password"
            placeholder="Nhập mật khẩu"
            type="password"
          />
          {passwordError && (
            <span className="error-message text-red-500">{passwordError}</span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Ghi nhớ mật khẩu
          </label>
          <Link
            to="/forgot-password"
            className="text-blue-500 hover:underline ml-4"
          >
            Quên mật khẩu?
          </Link>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Đăng nhập
          </button>
        </div>

        <div className="text-center text-[14px]">
          <span>Bạn chưa có tài khoản? </span>
          <Link to="/register" className="text-blue-700">
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  );
};
