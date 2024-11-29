import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const Password: React.FC = () => {
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
            <Form.Item
              label="Mật khẩu cũ"
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu" },
                { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu cũ"
              name="confirmPassword"
              rules={[
                { required: true, message: "Vui lòng nhập lại mật khẩu" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>

            <Form.Item
              label="Nhập lại mật khẩu"
              name="confirmPassword"
              rules={[
                { required: true, message: "Vui lòng nhập lại mật khẩu" },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" />
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

export default Password;
