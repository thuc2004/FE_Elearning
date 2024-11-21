import React from "react";
import { Row, Col, Card, Button } from "antd";

interface CardBannerProps {
  title: string;
  image: string;
}

const CardBanner: React.FC<CardBannerProps> = ({ title, image }) => (
  <Card bordered={false} style={{ borderRadius: "8px", overflow: "hidden" }}>
    <Row>
      <Col xs={12} style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
        <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
        <Button type="primary">Đăng ký ngay</Button>
      </Col>
      <Col xs={12} style={{ padding: 0 }}>
        <img
          alt="example"
          src={image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0 8px 8px 0",
          }}
        />
      </Col>
    </Row>
  </Card>
);

export default CardBanner;
