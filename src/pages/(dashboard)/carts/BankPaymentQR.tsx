import React from "react";
import { Card, Button, Row, Col, Typography, QRCode } from "antd";
// import QRCode from "qrcode.react";

const { Title, Text } = Typography;

interface PaymentDetails {
  bankName: string;
  accountNumber: string;
  accountName: string;
  amount: number;
  reference: string;
}

const BankPaymentQR: React.FC = () => {
  // Thông tin thanh toán
  const paymentDetails: PaymentDetails = {
    bankName: "Ngân hàng ABC",
    accountNumber: "123456789",
    accountName: "Nguyen Van A",
    amount: 500000,
    reference: "INV-12345",
  };

  // Tạo nội dung QR Code
  const qrCodeContent = JSON.stringify({
    bankName: paymentDetails.bankName,
    accountNumber: paymentDetails.accountNumber,
    accountName: paymentDetails.accountName,
    amount: paymentDetails.amount,
    reference: paymentDetails.reference,
  });

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Card bordered style={{ textAlign: "center" }}>
        <Title level={3}>Thanh toán qua QR Code</Title>
        <Text>
          Quý khách vui lòng quét mã QR bên dưới để thực hiện thanh toán.
        </Text>
        <Row style={{ marginTop: "20px" }} gutter={[16, 16]}>
          <Col span={24}>
            <QRCode value={qrCodeContent} size={200} />
          </Col>
          <Col span={24} style={{ textAlign: "left" }}>
            <Text strong>Ngân hàng:</Text> {paymentDetails.bankName} <br />
            <Text strong>Số tài khoản:</Text> {paymentDetails.accountNumber}{" "}
            <br />
            <Text strong>Chủ tài khoản:</Text> {paymentDetails.accountName}{" "}
            <br />
            <Text strong>Số tiền:</Text>{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(paymentDetails.amount)}
            <br />
            <Text strong>Nội dung:</Text> {paymentDetails.reference}
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Button type="primary" block>
              Xác nhận thanh toán
            </Button>
          </Col>
          <Col span={12}>
            <Button block>Quay lại</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BankPaymentQR;
