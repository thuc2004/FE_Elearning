import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const ContactInfo: React.FC = () => {
  const onFinish = (values: string) => {
    console.log("Submitted values:", values);
  };

  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "15px" }}>
        Thông tin cá nhân
      </h1>

      {/* Chia layout thành 2 cột */}
      <Row gutter={2}>
        <Col span={22}>
          {" "}
          {/* Giảm độ rộng của cột form lại */}
          <Form
            layout="vertical"
            style={{ flex: 1 }}
            onFinish={onFinish}
            initialValues={{
              gender: "male",
              nationality: "Vietnam",
            }}
          >
            <Row gutter={8}>
              {" "}
              {/* Giảm gutter trong form để tạo khoảng cách nhỏ hơn giữa các trường */}
              <Col span={8}>
                <Form.Item label="Số điện thoại" name="sdt">
                  <Input
                    placeholder="nhập số điện thoại"
                    style={{ fontSize: "14px" }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên!" },
                  ]}
                >
                  <Input
                    placeholder="nhập họ và tên"
                    style={{ fontSize: "14px" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Địa chỉ trong CCCD" name="sdt">
              <Input placeholder="nhập địa chỉ" style={{ fontSize: "14px" }} />
            </Form.Item>

            <Form.Item label="Địa chỉ cư chú" name="sdt">
              <Input placeholder="nhập địa chỉ" style={{ fontSize: "14px" }} />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "16px",
                }}
              >
                <Button htmlType="reset">Hủy</Button>
                <Button type="primary" htmlType="submit">
                  Cập nhật thông tin
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ContactInfo;
