import React from "react";
import { Modal, Button, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const PaymentFailed: React.FC = () => {
  return (
    <Modal
      open={true}
      footer={null}
      centered
      closable={false}
      width={400}
      bodyStyle={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <CloseCircleOutlined
        style={{ fontSize: "48px", color: "red", marginBottom: "16px" }}
      />
      <Title level={4}>Thanh toán không thành công</Title>
      <Text style={{ marginBottom: "16px" }}>
        Thanh toán không thàng công, vui lòng đổi phương thức thanh toán hoặc
        thử lại
      </Text>
      <Button type="primary" block>
        Tiếp tục
      </Button>
    </Modal>
  );
};

export default PaymentFailed;
