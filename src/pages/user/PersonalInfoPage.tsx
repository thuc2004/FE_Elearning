import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  ContactsOutlined,
  LockOutlined,
  BookOutlined,
  HeartOutlined,
  TeamOutlined,
  WalletOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

const PersonalInfoPage: React.FC = () => {
  return (
    <Layout style={{ padding: "20px 220px" }}>
      {/* Sidebar */}
      <Sider
        width={230}
        theme="light"
        style={{
          padding: "24px 0", // Thêm padding để cách nội dung trong Sidebar
          marginRight: "16px", // Khoảng cách giữa Sidebar và Content
          background: "#fff",
        }}
      >
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/info">Thông tin cá nhân</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ContactsOutlined />}>
            <Link to="/contact-info">Thông tin liên hệ</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LockOutlined />}>
            <Link to="/change-password">Thay đổi mật khẩu</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="4" icon={<BookOutlined />}>
            <Link to="/study-info">Thông tin học tập</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />}>
            <Link to="/study-schedule">Lịch học</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<HeartOutlined />}>
            <Link to="/favorite-subjects">Bộ môn yêu thích</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            <Link to="/guardian-info">Người giám hộ</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<WalletOutlined />}>
            <Link to="/minor-account">Tài khoản vị thành niên</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<ShoppingCartOutlined />}>
            <Link to="/purchase-history">Lịch sử mua hàng</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Content */}
      <Layout>
        <Content
          style={{
            padding: "24px",
            backgroundColor: "#fff",
            borderRadius: "8px", // Bo góc cho Content
            margin: "16px", // Khoảng cách nhỏ bao quanh toàn bộ Content
          }}
        >
          {/* Dùng Outlet để render nội dung con */}

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PersonalInfoPage;
