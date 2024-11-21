import React from "react";
import { Button, Col } from "antd";

interface SubjectButtonProps {
  subject: string;
}

const SubjectButton: React.FC<SubjectButtonProps> = ({ subject }) => (
  <Col xs={12} sm={8} lg={4}>
    <Button style={{ width: "100%", fontSize: "14px", padding: "10px" }}>
      {subject}
    </Button>
  </Col>
);

export default SubjectButton;
