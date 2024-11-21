import React from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../register/index.css";
import axiosInstance from "../../api/axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await axiosInstance.post("/auth/login", values);
      const existingUser = response.data;

      if (existingUser.message === "Incorrect password") {
        message.error("Mật khẩu không chính xác.");
      } else if (!existingUser) {
        message.warning("Tài khoản chưa được đăng ký.");
      } else {
        message.success("Đăng nhập thành công!");
        await localStorage.setItem("token", existingUser.data);
        navigate("/");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi đăng nhập:", error);
      message.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        name="login-form"
        onFinish={handleSubmit}
        className="w-[500px] border px-4 py-6 rounded shadow-md bg-white flex flex-col gap-4"
      >
        <h3 className="text-center text-[20px] font-semibold uppercase">
          Đăng nhập
        </h3>

        <Form.Item
          label="Email đăng nhập"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
          className="flex flex-col gap-1"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder="Nhập email" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu" },
            { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự" },
          ]}
          className="flex flex-col gap-1"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item className="flex justify-between items-center mb-2">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Quên mật khẩu?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-3 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Đăng nhập
          </Button>
        </Form.Item>

        <div className="text-center text-[14px]">
          <span>Bạn chưa có tài khoản? </span>
          <Link to="/register" className="text-blue-700">
            Đăng ký
          </Link>
        </div>
      </Form>
    </div>
  );
};
