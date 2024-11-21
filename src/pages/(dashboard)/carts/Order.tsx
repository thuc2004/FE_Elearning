import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Radio,
  Space,
  Divider,
  Checkbox,
  Button,
  Modal,
  List,
  Input,
  Form,
  Select,
} from "antd";
import { BankOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
const { Option } = Select;

const Order = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("visa");
  const [includeVAT, setIncludeVAT] = useState<boolean>(false);
  const [addressModalVisible, setAddressModalVisible] =
    useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<number>(0);
  const [editingAddress, setEditingAddress] = useState<number | null>(null);

  const [form] = Form.useForm();

  // Dữ liệu sản phẩm với giá và số lượng
  const products = [
    {
      name: "Sản phẩm 1",
      price: 10000,
      quantity: 1,
      imageUrl:
        "https://cdn.icon-icons.com/icons2/674/PNG/512/Mastercard_icon-icons.com_60554.png",
    },
    {
      name: "Sản phẩm 2",
      price: 10000,
      quantity: 1,
      imageUrl:
        "https://cdn.icon-icons.com/icons2/674/PNG/512/Mastercard_icon-icons.com_60554.png",
    },
  ];

  const addresses = [
    {
      name: "Nguyễn Văn A",
      phone: "0321 654 987",
      district: "Quận Hoàn Kiếm",
      ward: "Phường Bạch Đằng",
      address: "Số 9, ngõ 4, Duy Tân, Cầu Giấy, Hà Nội",
      addressType: "Nhà riêng",
      isDefault: true,
    },
    {
      name: "Nguyễn Văn B",
      phone: "0321 654 987",
      district: "Quận Hoàn Kiếm",
      ward: "Phường Bạch Đằng",
      address: "Số 10, ngõ 5, Duy Tân, Cầu Giấy, Hà Nội",
      addressType: "Nhà riêng",
      isDefault: true,
    },
    {
      name: "Nguyễn Văn C",
      phone: "0321 654 987",
      district: "Quận Hoàn Kiếm",
      ward: "Phường Bạch Đằng",
      address: "Số 11, ngõ 6, Duy Tân, Cầu Giấy, Hà Nội",
      addressType: "Nhà riêng",
      isDefault: true,
    },
    {
      name: "Nguyễn Văn D",
      phone: "0321 654 987",
      district: "Quận Hoàn Kiếm",
      ward: "Phường Bạch Đằng",
      address: "Số 12, ngõ 7, Duy Tân, Cầu Giấy, Hà Nội",
      addressType: "Nhà riêng",
      isDefault: true,
    },
  ];

  // Tính tổng tiền sản phẩm
  const totalProductPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleUpdateAddress = (index: number) => {
    setEditingAddress(index);
    form.setFieldsValue(addresses[index]);
  };

  const handleSaveAddress = () => {
    form.validateFields().then((values) => {
      addresses[selectedAddress] = values;
      setEditingAddress(null);
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1300px", margin: "auto" }}>
      <Title level={3}>Xác nhận đơn hàng</Title>

      <Row gutter={16}>
        {/* Địa chỉ nhận hàng */}
        <Col span={16}>
          <Card
            title="Địa chỉ nhận hàng"
            extra={<a onClick={() => setAddressModalVisible(true)}>Thay đổi</a>}
          >
            <div>
              <Text>
                {addresses[selectedAddress].name} -{" "}
                {addresses[selectedAddress].phone}
              </Text>
              <br />
              <Text>{addresses[selectedAddress].address}</Text>
            </div>
          </Card>

          {/* Modal chọn địa chỉ */}
          <Modal
            title={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Chọn địa chỉ nhận hàng</span>
                <Button type="link">Thêm địa chỉ mới</Button>
              </div>
            }
            visible={addressModalVisible}
            onCancel={() => setAddressModalVisible(false)}
            footer={[
              <Button key="close" onClick={() => setAddressModalVisible(false)}>
                Đóng
              </Button>,
              <Button
                key="apply"
                type="primary"
                onClick={() => setAddressModalVisible(false)}
              >
                Áp dụng
              </Button>,
            ]}
          >
            {editingAddress === null ? (
              <List
                itemLayout="horizontal"
                dataSource={addresses}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <a key="edit" onClick={() => handleUpdateAddress(index)}>
                        Cập nhật
                      </a>,
                    ]}
                    onClick={() => setSelectedAddress(index)}
                  >
                    <List.Item.Meta
                      avatar={<Radio checked={selectedAddress === index} />}
                      title={<Text strong>{item.name}</Text>}
                      description={
                        <>
                          <div>{item.phone}</div>
                          <div>{item.address}</div>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            ) : (
              <Form form={form} layout="vertical" onFinish={handleSaveAddress}>
                <Form.Item
                  name="name"
                  label="Tên người nhận"
                  rules={[{ required: true, message: "Vui lòng nhập tên" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="district"
                  label="Chọn Quận/Huyện"
                  rules={[
                    { required: true, message: "Vui lòng chọn quận/huyện" },
                  ]}
                >
                  <Select placeholder="Chọn quận/huyện">
                    <Option value="Quận Hoàn Kiếm">Quận Hoàn Kiếm</Option>
                    <Option value="Quận Ba Đình">Quận Ba Đình</Option>
                    {/* Thêm các quận/huyện khác */}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="ward"
                  label="Chọn Phường/Xã"
                  rules={[
                    { required: true, message: "Vui lòng chọn phường/xã" },
                  ]}
                >
                  <Select placeholder="Chọn phường/xã">
                    <Option value="Phường Bạch Đằng">Phường Bạch Đằng</Option>
                    <Option value="Phường Hàng Bạc">Phường Hàng Bạc</Option>
                    {/* Thêm các phường/xã khác */}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Địa chỉ cụ thể"
                  rules={[
                    { required: true, message: "Vui lòng nhập địa chỉ cụ thể" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                  Lưu
                </Button>
                <Button
                  style={{ marginLeft: "8px" }}
                  onClick={() => setEditingAddress(null)}
                >
                  Hủy
                </Button>
              </Form>
            )}
          </Modal>

          {/* Thanh toán */}
          <Card
            title="Thanh toán qua cổng thanh toán BIDV"
            style={{ marginTop: 16 }}
          >
            <Radio.Group
              style={{ width: "100%" }}
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
              <Space
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "15px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <Radio value="visa">
                    <div className="flex items-center">
                      <img
                        src="https://cdn.icon-icons.com/icons2/1487/PNG/512/8408-visa_102499.png"
                        alt="VISA logo"
                        className="ml-2 w-12 h-12"
                      />
                      <Text className="font-bold">VISA</Text>
                    </div>
                    <Text style={{ marginLeft: "8px" }}>
                      4032 **** **** 1234
                    </Text>
                  </Radio>
                </div>

                <div
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "15px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <Radio value="mastercard">
                    <div className="flex items-center">
                      <img
                        src="https://cdn.icon-icons.com/icons2/674/PNG/512/Mastercard_icon-icons.com_60554.png"
                        alt="MasterCard logo"
                        className="ml-2 w-12 h-12"
                      />
                      <Text className="font-bold">MASTER CARD</Text>
                    </div>
                    <Text style={{ marginLeft: "8px" }}>
                      4032 **** **** 1234
                    </Text>
                  </Radio>
                </div>

                <div
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "15px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <Radio value="other">
                    <BankOutlined style={{ marginRight: "8px" }} />
                    <span className="font-bold">Chọn thẻ khác</span>
                  </Radio>
                </div>
              </Space>
            </Radio.Group>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Sản phẩm">
            <Space direction="vertical" style={{ width: "100%" }}>
              {products.map((product, index) => (
                <Row justify="space-between" key={index}>
                  <Col span={8}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        marginRight: "8px",
                      }}
                    />
                  </Col>

                  <Col span={12}>
                    <div className="flex justify-between">
                      <Text style={{ marginLeft: -90, paddingLeft: 0 }}>
                        {product.name}
                      </Text>
                      <Text>x {product.quantity}</Text>
                    </div>
                    <div>
                      <Text strong style={{ marginLeft: -90, paddingLeft: 0 }}>
                        {product.price.toLocaleString()} đ
                      </Text>
                    </div>
                  </Col>
                </Row>
              ))}

              <Divider />
              <Row justify="space-between">
                <Col>
                  <Text strong>Tổng tiền hàng</Text>
                </Col>
                <Col>
                  <Text strong>{totalProductPrice.toLocaleString()} đ</Text>
                </Col>
              </Row>

              <Divider />
              <Card title="Tổng tiền thanh toán">
                <Row justify="space-between">
                  <Col>
                    <Text strong>Tổng tiền thanh toán</Text>
                  </Col>
                  <Col>
                    <Text strong>{totalProductPrice.toLocaleString()} đ</Text>
                  </Col>
                </Row>

                {includeVAT && (
                  <Row justify="end">
                    <Text style={{ color: "green", fontSize: "14px" }}>
                      (Đã bao gồm VAT)
                    </Text>
                  </Row>
                )}

                <Divider />
              </Card>
            </Space>
          </Card>

          <Row justify="space-between">
            <Col>
              <Checkbox onChange={(e) => setIncludeVAT(e.target.checked)}>
                Xuất hóa đơn VAT
              </Checkbox>
            </Col>
          </Row>

          {/* Nút đặt mua */}
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Text type="danger">
              Xin vui lòng kiểm tra lại đơn hàng trước khi thanh toán
            </Text>
            <br />
            <Button
              type="primary"
              size="large"
              style={{ marginTop: 10, width: "100%" }}
            >
              Đặt mua
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
