import React from "react";
import { Checkbox, Typography } from "antd";

const { Text } = Typography;

interface HeaderProps {
  selectAll: boolean;
  onSelectAllChange: (checked: boolean) => void;
  totalProducts: number;
}

const Header: React.FC<HeaderProps> = ({
  selectAll,
  onSelectAllChange,
  totalProducts,
}) => {
  return (
    <div className="flex items-center justify-between pb-4 border-b">
      <Checkbox checked={selectAll} onChange={(e) => onSelectAllChange(e.target.checked)}>
        Chọn tất cả ({totalProducts})
      </Checkbox>
      <Text>Đơn giá</Text>
      <Text>Số lượng</Text>
      <Text>Thành tiền</Text>
      <Text>Thao tác</Text>
    </div>
  );
};

export default React.memo(Header);
