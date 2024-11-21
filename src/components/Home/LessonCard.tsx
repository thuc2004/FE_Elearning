import React from "react";
import { Card, Tag } from "antd";

interface LessonCardProps {
  title: string;
  description: string;
  image: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  image,
}) => (
  <Card
    cover={
      <img
        alt="example"
        src={image}
        style={{
          maxHeight: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    }
    style={{ fontSize: "12px" }}
  >
    <Card.Meta
      title={
        <span style={{ marginBottom: "8px", display: "block" }}>{title}</span>
      }
      description={
        <span
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "16px",
            marginBottom: "8px",
            display: "block",
          }}
        >
          {description}
        </span>
      }
    />
    <Tag color="green" style={{ marginTop: "8px" }}>
      Blogger
    </Tag>
  </Card>
);

export default LessonCard;
