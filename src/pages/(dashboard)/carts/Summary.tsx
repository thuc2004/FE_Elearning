import React from "react";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../../util/formatCurrency";
import { APIOrder } from "../../../services/APIOrder";

const { Text } = Typography;

interface SummaryProps {
  totalPrice: number;
}

const Summary: React.FC<SummaryProps> = ({ totalPrice }) => {
  const navigate = useNavigate();
  const handleCreateOrder = async () => {
    const order = await APIOrder.getOrderByUserId();
    console.log(order);
    if (order.status === 400) {
      const newOrder = await APIOrder.createOrder({ total: totalPrice });
      console.log(newOrder);
      navigate(`/order/${newOrder.id}`);
    } else navigate(`/order/${order.id}`);
  };
  return (
    <div className="w-1/3 bg-white p-4 rounded shadow-sm">
      <div className="border-b pb-4">
        <Text strong>Tổng tiền hàng</Text>
      </div>
      <div className="flex justify-between pt-4 pb-6 border-b">
        <Text className="text-gray-600">Tổng tiền</Text>
        <Text className="text-red-500 font-semibold">
          {formatCurrency(totalPrice)}
        </Text>
      </div>
      <Button
        type="primary"
        className="w-full mt-4"
        style={{
          backgroundColor: "#1d4ed8",
          borderColor: "#1d4ed8",
          color: "white",
        }}
        onClick={handleCreateOrder}
      >
        Thanh toán
      </Button>
    </div>
  );
};

export default React.memo(Summary);
