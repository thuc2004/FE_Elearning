import React, { useState } from "react";
import { Checkbox, Button, Input, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const ShoppingCarts: React.FC = () => {
  const param = use;
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Sản phẩm",
      price: 34000,
      quantity: 2,
      imageUrl: "/path-to-image-1.jpg",
    },
    {
      id: 2,
      name: "Sản phẩm",
      price: 34000,
      quantity: 2,
      imageUrl: "/path-to-image-2.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  const handleRemoveProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="flex justify-center p-6 bg-gray-50">
      <div className="w-full max-w-7xl flex gap-6">
        {/* Product List */}
        <div className="w-2/3 bg-white p-4 rounded shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b">
            <Checkbox>Chọn tất cả ({products.length})</Checkbox>
            <Text>Đơn giá</Text>
            <Text>Số lượng</Text>
            <Text>Thành tiền</Text>
            <Text>Thao tác</Text>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between py-4 border-b"
            >
              <Checkbox />
              <div className="flex items-center gap-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
                <Text>{product.name}</Text>
              </div>
              <Text>{product.price.toLocaleString()} đ</Text>
              <div className="flex items-center gap-2">
                <Button onClick={() => handleQuantityChange(product.id, -1)}>
                  -
                </Button>
                <Input
                  value={product.quantity}
                  readOnly
                  className="w-12 text-center"
                />
                <Button onClick={() => handleQuantityChange(product.id, 1)}>
                  +
                </Button>
              </div>
              <Text className="font-semibold">
                {(product.price * product.quantity).toLocaleString()} đ
              </Text>
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveProduct(product.id)}
                className="text-red-500"
              >
                Xóa
              </Button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-1/3 bg-white p-4 rounded shadow-sm">
          <div className="border-b pb-4">
            <Text strong>Tổng ({products.length} sản phẩm)</Text>
          </div>
          <div className="flex justify-between pt-4 pb-6 border-b">
            <Text className="text-gray-600">Tổng tiền hàng</Text>
            <Text className="text-red-500 font-semibold">
              {totalAmount.toLocaleString()} đ
            </Text>
          </div>
          <Button
            type="primary"
            className="w-full mt-4"
            style={{ backgroundColor: "#1d4ed8", borderColor: "#1d4ed8" }}
          >
            <Link to="/order" style={{ color: "white" }}>
              Mua hàng
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCarts;
