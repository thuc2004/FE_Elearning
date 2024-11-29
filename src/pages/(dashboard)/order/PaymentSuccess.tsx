import React from "react";
import { Modal, Button, Card, List, Typography, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const PaymentSuccessModal: React.FC = () => {
  const productList = [
    { name: "Cherry New Zealand", price: 34000, quantity: 1 },
    { name: "Táo Mỹ", price: 34000, quantity: 2 },
  ];

  //   const totalPrice = productList.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0
  //   );

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
      <CheckCircleOutlined
        style={{ fontSize: "48px", color: "#4CAF50", marginBottom: "16px" }}
      />
      <Title level={4}>Thanh toán thành công</Title>
      <Text>
        Chúc mừng bạn đã mua hàng thành công, theo dõi chi tiết đơn hàng tại
        Quản lý đơn hàng.
      </Text>
      <div style={{ marginTop: "8px", marginBottom: "16px" }}>
        Mã số đơn hàng của bạn là: <Text strong>PC3068299CCb1f4</Text>
      </div>
      <Button type="primary" block>
        Tiếp tục
      </Button>
      {/* Danh sách sản phẩm
      <Card
        title="Sản phẩm"
        style={{ marginTop: "20px" }}
        bodyStyle={{ padding: "16px" }}
      >
        <List
          itemLayout="horizontal"
          dataSource={productList}
          renderItem={(item) => (
            <List.Item>
              <Space>
                <Text>{item.name}</Text>
                <Text>
                  {item.quantity} × {item.price.toLocaleString()} ₫
                </Text>
              </Space>
            </List.Item>
          )}
        />
        <div style={{ textAlign: "right", marginTop: "8px" }}>
          Tổng tiền hàng: <Text strong>{totalPrice.toLocaleString()} ₫</Text>
        </div>
      </Card> */}
      {/* Chi tiết thanh toán */}
      {/* <Card
        title="TỔNG TIỀN THANH TOÁN"
        style={{ marginTop: "20px" }}
        bodyStyle={{ padding: "16px" }}
      >
        <List>
          <List.Item>
            Phí vận chuyển: <Text>14.000 ₫</Text>
          </List.Item>
          <List.Item>
            Khuyến mãi: <Text>-14.000 ₫</Text>
          </List.Item>
          <List.Item>
            Tổng thanh toán: <Text strong>{totalPrice.toLocaleString()} ₫</Text>
          </List.Item>
        </List>
      </Card> */}
    </Modal>
  );
};

export default PaymentSuccessModal;
