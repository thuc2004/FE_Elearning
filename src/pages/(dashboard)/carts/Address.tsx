import React, { useState } from "react";
import { Modal, List, Radio, Button, Typography } from "antd";

const { Text } = Typography;

const Address: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<number>(0);

  const addresses = [
    {
      name: "Nguyễn Văn A",
      phone: "0321 654 987",
      address: "Số 9, ngõ 4, Duy Tân, Cầu Giấy, Hà Nội",
    },
    {
      name: "Nguyễn Văn A",
      phone: "0321 654 987",
      address: "Số 9, ngõ 4, Duy Tân, Cầu Giấy, Hà Nội",
    },
    {
      name: "Nguyễn Văn A",
      phone: "0321 654 987",
      address: "Số 9, ngõ 4, Duy Tân, Cầu Giấy, Hà Nội",
    },
    {
      name: "Nguyễn Văn A",
      phone: "0321 654 987",
      address: "Số 9, ngõ 4, Duy Tân, Cầu Giấy, Hà Nội",
    },
  ];

  const handleSelectAddress = (index: number) => {
    setSelectedAddress(index);
  };

  const handleApply = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Chọn địa chỉ nhận hàng
      </Button>
      <Modal
        title="Chọn địa chỉ nhận hàng"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="close" onClick={() => setVisible(false)}>
            Đóng
          </Button>,
          <Button key="apply" type="primary" onClick={handleApply}>
            Áp dụng
          </Button>,
        ]}
      >
        <List
          itemLayout="horizontal"
          dataSource={addresses}
          renderItem={(item, index) => (
            <List.Item actions={[<a key="edit">Cập nhật</a>]}>
              <List.Item.Meta
                avatar={
                  <Radio
                    checked={selectedAddress === index}
                    onChange={() => handleSelectAddress(index)}
                  />
                }
                title={
                  <div>
                    <Text strong>{item.name}</Text>
                    <Text type="secondary" style={{ marginLeft: 8 }}>
                      Mặc định
                    </Text>
                  </div>
                }
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
      </Modal>
    </>
  );
};

export default Address;
