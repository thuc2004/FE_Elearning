import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Radio,
  Button,
  Select,
  Avatar,
  Upload,
  message,
  Row,
  Col,
} from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload";

const { Option } = Select;

const PersonalInfo: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(""); // State quản lý ảnh đại diện

  const onFinish = (values: string) => {
    console.log("Submitted values:", values);
  };

  const handleFileChange = (info: any) => {
    const file = info.file.originFileObj;
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result as string); // Cập nhật ảnh từ file local
    };

    if (file) {
      reader.readAsDataURL(file); // Đọc ảnh từ file
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Bạn chỉ có thể tải lên các file ảnh!"); // Thông báo lỗi khi không phải ảnh
    }
    return isImage;
  };

  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "15px" }}>
        Thông tin cá nhân
      </h1>

      {/* Chia layout thành 2 cột */}
      <Row gutter={8}>
        {" "}
        {/* Điều chỉnh gutter nhỏ hơn để giảm khoảng cách giữa các cột */}
        {/* Cột bên trái chứa ảnh */}
        <Col span={3}>
          {" "}
          {/* Giảm độ rộng của cột ảnh lại */}
          <Upload
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleFileChange}
          >
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={imageSrc ? undefined : <AntDesignOutlined />}
              src={imageSrc}
              style={{ marginTop: "16px" }}
            />
          </Upload>
        </Col>
        {/* Cột bên phải chứa form */}
        <Col span={21}>
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
                <Form.Item
                  label="Họ và tên"
                  name="fullName"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên!" },
                  ]}
                >
                  <Input style={{ fontSize: "14px" }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Căn cước công dân" name="idCard">
                  <Input style={{ fontSize: "14px" }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Quốc tịch" name="nationality">
                  <Select style={{ fontSize: "14px" }}>
                    <Option value="Vietnam">Việt Nam</Option>
                    <Option value="USA">Hoa Kỳ</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              {" "}
              {/* Giảm gutter trong form để tạo khoảng cách nhỏ hơn giữa các trường */}
              <Col span={12}>
                <Form.Item label="Ngày sinh" name="dob">
                  <DatePicker style={{ width: "65%", fontSize: "14px" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Giới tính" name="gender">
                  <Radio.Group>
                    <Radio value="male">Nam</Radio>
                    <Radio value="female">Nữ</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Tình trạng sức khỏe" name="health">
              <Input.TextArea
                rows={3}
                placeholder="Nhập tình trạng sức khỏe cụ thể"
              />
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

export default PersonalInfo;
