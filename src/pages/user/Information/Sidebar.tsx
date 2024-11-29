import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  ContactsOutlined,
  LockOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Sidebar: React.FC = () => {
  return (
    <Menu mode="inline" defaultSelectedKeys={["/personal-info"]}>
      <Menu.Item key="/personal-info" icon={<UserOutlined />}>
        <Link to="/personal-info">Thông tin cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="/contact-info" icon={<ContactsOutlined />}>
        <Link to="/contact-info">Thông tin liên hệ</Link>
      </Menu.Item>
      <Menu.Item key="/password-change" icon={<LockOutlined />}>
        <Link to="/password-change">Thay đổi mật khẩu</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="/study-info" icon={<BookOutlined />}>
        <Link to="/study-info">Thông tin học tập</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
