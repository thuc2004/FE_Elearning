import React, { useState, useEffect } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { APIOtp } from "../../services/APIOtp";

const { Title, Text } = Typography;

const OTPVerification: React.FC = () => {
  const [param] = useSearchParams();
  console.log(param.get("email"));
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(10); // 5 phút

  // Đếm ngược thời gian
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Xử lý gửi lại mã OTP
  const resendOTP = () => {
    setTimeLeft(300); // Reset thời gian
    message.success("Mã OTP mới đã được gửi!");
  };

  // Xử lý xác thực
  const handleVerify = async () => {
    const res = await APIOtp.authenticateOTP(param.get("email"), otp);
    if (res.status === 201) {
      message.success("Xác thực thành công!");
      navigate("/login");
    } else {
      message.error("Mã OTP không hợp lệ. Vui lòng kiểm tra lại!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #eaeaea",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Title level={4}>Xác minh tài khoản</Title>
      <Text>
        Một mã xác thực đã được gửi tới email của bạn. Vui lòng kiểm tra tin
        nhắn.
      </Text>
      <Form
        style={{ marginTop: "20px" }}
        layout="vertical"
        onFinish={handleVerify}
      >
        <Form.Item
          label="Nhập mã OTP"
          rules={[{ required: true, message: "Vui lòng nhập mã OTP!" }]}
        >
          <Input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="123456"
            maxLength={6}
          />
        </Form.Item>
        <Text type="secondary">
          Mã xác minh sẽ hết hạn sau:{" "}
          <Text strong>
            {`${Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0")}:${(timeLeft % 60)
              .toString()
              .padStart(2, "0")}`}
          </Text>
        </Text>
        <Form.Item style={{ marginTop: "20px" }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={timeLeft === 0}
          >
            Xác thực
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Bạn không nhận được mã?{" "}
        <Button type="link" onClick={resendOTP}>
          Gửi lại
        </Button>
      </Text>
    </div>
  );
};

export default OTPVerification;
