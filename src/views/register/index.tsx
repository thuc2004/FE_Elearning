import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (values: {
    fullName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (values.password !== values.confirmPassword) {
      message.error("Mật khẩu xác nhận không trùng khớp.");
      return;
    }

    try {
      const response = await axiosInstance.post("/users/create-user", values);

      // Kiểm tra nếu `response.data` tồn tại
      if (response && response.data) {
        message.success("Đăng ký thành công!");
        navigate("/login");
      } else {
        throw new Error("Dữ liệu trả về không hợp lệ.");
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi đăng ký:", error);
      message.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        name="register-form"
        onFinish={handleSubmit}
        className="w-[500px] border px-4 py-6 rounded shadow-md bg-white flex flex-col gap-4"
      >
        <h3 className="text-center text-[20px] font-semibold uppercase">
          Đăng ký
        </h3>

        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder="Nhập họ và tên" />
        </Form.Item>

        <Form.Item
          label="Tên đăng nhập"
          name="userName"
          rules={[
            { required: true, message: "Vui lòng nhập tên đăng nhập" },
            { min: 6, message: "Tên đăng nhập phải có ít nhất 6 ký tự" },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder="Nhập tên đăng nhập" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu" },
            { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự" },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password placeholder="Nhập lại mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-3 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Hoàn thành
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
