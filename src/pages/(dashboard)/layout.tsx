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
  const [isAddingAddress, setIsAddingAddress] = useState<boolean>(false); // Trạng thái thêm địa chỉ mới
  const [form] = Form.useForm();

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
    // ... Các địa chỉ khác
  ];

  const handleAddAddress = () => {
    setIsAddingAddress(true);
    form.resetFields();
  };

  const handleSaveAddress = () => {
    form.validateFields().then((values) => {
      if (isAddingAddress) {
        addresses.push(values);
        setIsAddingAddress(false);
      } else if (editingAddress !== null) {
        addresses[editingAddress] = values;
      }
      setEditingAddress(null);
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1300px", margin: "auto" }}>
      <Title level={3}>Xác nhận đơn hàng</Title>

      <Row gutter={16}>
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

          <Modal
            title={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Chọn địa chỉ nhận hàng</span>
                <Button type="link" onClick={handleAddAddress}>
                  Thêm địa chỉ mới
                </Button>
              </div>
            }
            visible={addressModalVisible}
            onCancel={() => {
              setAddressModalVisible(false);
              setIsAddingAddress(false);
              setEditingAddress(null);
            }}
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
            {editingAddress === null && !isAddingAddress ? (
              <List
                itemLayout="horizontal"
                dataSource={addresses}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <a key="edit" onClick={() => setEditingAddress(index)}>
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
                <Form.Item name="addressType" label="Loại địa chỉ">
                  <Radio.Group>
                    <Radio value="Nhà riêng">Nhà riêng</Radio>
                    <Radio value="Công ty">Công ty</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="isDefault" valuePropName="checked">
                  <Checkbox>Đặt làm địa chỉ mặc định</Checkbox>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Lưu
                </Button>
                <Button
                  style={{ marginLeft: "8px" }}
                  onClick={() => {
                    setEditingAddress(null);
                    setIsAddingAddress(false);
                  }}
                >
                  Hủy
                </Button>
              </Form>
            )}
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
