import React from "react";
import { Checkbox, Button, Input, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import formatCurrency from "../../../util/formatCurrency";

const { Text } = Typography;

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imageUrl: string;
  choosen: boolean;
}

interface ProductItemProps {
  cart: object;
  product: Product;
  onCheckboxChange: (id: string, checked: boolean) => void;
  onQuantityDecreaseChange: (id: string, delta: number) => void;
  onQuantityIncreaseChange: (id: string, delta: number) => void;
  onRemoveProduct: (id: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  cart,
  product,
  onCheckboxChange,
  onQuantityDecreaseChange,
  onQuantityIncreaseChange,
  onRemoveProduct,
}) => {
  console.log(product.id);
  
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <Checkbox
        checked={product.choosen}
        onChange={(e) => onCheckboxChange(cart,product.id, e.target.checked)}
      />
      <div className="flex items-center gap-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-16 h-16 object-cover"
        />
        <Text>{product.name}</Text>
      </div>
      <Text>{formatCurrency(product.price)}</Text>
      <div className="flex items-center gap-2">
        <Button onClick={() => onQuantityDecreaseChange(cart,product.id, 1)}>-</Button>
        <Input value={product.amount} readOnly className="w-12 text-center" />
        <Button onClick={() => onQuantityIncreaseChange(cart,product.id, 1)}>+</Button>
      </div>
      <Text>{formatCurrency(product.price * product.amount)}</Text>
      <Button
        type="link"
        icon={<DeleteOutlined />}
        onClick={() => onRemoveProduct(cart,product.id)}
        className="text-red-500"
      >
        Xóa
      </Button>
    </div>
  );
};

export default React.memo(ProductItem);
