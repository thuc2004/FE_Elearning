import React from "react";
import { Button } from "antd";
import img1 from "./shopping-bag.png";

const NoProduct: React.FC = () => (
  <div
    style={{
      width: "100vw",
      height: "60vh",
      display: "flex",
      flexDirection: "column", // Xếp ảnh và nút theo chiều dọc
      justifyContent: "center", // Căn giữa theo trục dọc
      alignItems: "center", // Căn giữa theo trục ngang
    }}
  >
    <img
      src={img1}
      alt=""
      style={{
        maxWidth: "20%",
        maxHeight: "20%",
        objectFit: "contain", // Giữ tỉ lệ ảnh
        marginBottom: "16px", // Khoảng cách giữa ảnh và nút
      }}
    />
    <span
      style={{
        fontSize: "12px", // Kích thước chữ nhỏ
        color: "rgba(0, 0, 0, 0.6)", // Màu chữ mờ (đen mờ)
        marginBottom: "16px", // Khoảng cách giữa chữ và nút
        textAlign: "center", // Căn giữa chữ
      }}
    >
      Không có sản phẩm nào trong giỏ hàng của bạn
    </span>
    <Button
      style={{
        width: "250px", // Chiều rộng cố định
      }}
      type="primary"
    >
      Tiếp tục mua sắm
    </Button>
  </div>
);

export default NoProduct;
