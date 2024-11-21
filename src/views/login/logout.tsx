import React from "react";
import { Form, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token
    message.success("Đăng xuất thành công!");
    navigate("/login"); // Điều hướng về trang đăng nhập
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        name="logout-form"
        className="w-[500px] border px-4 py-6 rounded shadow-md bg-white flex flex-col gap-4"
      >
        <h3 className="text-center text-[20px] font-semibold uppercase">
          Bạn đã đăng nhập
        </h3>

        <Form.Item>
          <Button
            type="primary"
            htmlType="button"
            className="w-full py-3 bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleLogout}
          >
            Đăng xuất
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Logout;
