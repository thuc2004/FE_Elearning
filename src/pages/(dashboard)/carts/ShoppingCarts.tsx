import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Checkbox, message, Button } from "antd";
import { Link } from "react-router-dom";
import { APICart } from "../../../services/APICart";
import Header from "./header";
import ProductList from "./ProductList";
import Summary from "./Summary";
import { APIOrderItem } from "../../../services/APIOrderItem";
import { APIOrder } from "../../../services/APIOrder";

const ShoppingCarts: React.FC = () => {
  const [cart, setCart] = useState<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const fetchedCart = await APICart.getCartByUserId();
        const mappedProducts = fetchedCart.orderItems.map((item: any) => ({
          id: item.id,
          name: item.product.product.name,
          price: item.price,
          amount: item.amount,
          imageUrl: item.product.images[0].url,
          choosen: item.choosen,
        }));
        setCart(fetchedCart);
        setProducts(mappedProducts);
      } catch (error) {
        message.error("Lỗi khi tải giỏ hàng!");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleCheckboxChange = useCallback(
    async (id: string, checked: boolean) => {
      console.log(id);

      // Cập nhật trạng thái sản phẩm trong UI trước
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, choosen: checked } : product
        )
      );

      try {
        // Gửi yêu cầu API để cập nhật trạng thái
        if (id) {
          const order = await APIOrder.getOrderByUserId();
          console.log(order);
          if (order.status === 400) {
            const newOrder = await APIOrder.createOrder({ total: totalPrice });
            console.log(newOrder);
            await APIOrderItem.updateOrderItem(id, {
              choosen: checked,
              orderId: newOrder.id,
            });
            await APICart.updateCart(cart?.id);
            message.success("Cập nhật thành công!");
          } else {
            await APIOrderItem.updateOrderItem(id, {
              choosen: checked,
              orderId: order.id,
            });
            await APICart.updateCart(cart?.id);
            message.success("Cập nhật thành công!");
          }
        }
      } catch (error) {
        // Xử lý lỗi và thông báo
        message.error("Lỗi khi cập nhật trạng thái sản phẩm!");
        console.error("Error updating order item:", error);

        // Khôi phục trạng thái ban đầu trong UI nếu API thất bại
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, choosen: !checked } : product
          )
        );
      }
    },
    []
  );

  const handleSelectAll = useCallback((checked: boolean) => {
    setSelectAll(checked);
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, choosen: checked }))
    );
  }, []);

  const handleQuantityDecreaseChange = useCallback(
    async (id: string, delta: number) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Math.max(1, product.amount - delta) }
            : product
        )
      );
      try {
        // Gửi yêu cầu API để cập nhật trạng thái
        await APICart.decreaseItemQuantity(cart?.id, {
          productId: id,
          amount: delta,
        });
        message.success("Cập nhật thành công!");
      } catch (error) {
        // Xử lý lỗi và thông báo
        message.error("Lỗi khi cập nhật trạng thái sản phẩm!");
        console.error("Error updating order item:", error);
      }
    },
    [cart]
  );

  const handleQuantityIncreaseChange = useCallback(
    async (id: string, delta: number) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id
            ? { ...product, amount: Math.max(1, product.amount + delta) }
            : product
        )
      );
      try {
        // Gửi yêu cầu API để cập nhật trạng thái
        await APICart.increaseItemQuantity(cart?.id, {
          productId: id,
          amount: delta,
        });
        message.success("Cập nhật thành công!");
      } catch (error) {
        // Xử lý lỗi và thông báo
        message.error("Lỗi khi cập nhật trạng thái sản phẩm!");
        console.error("Error updating order item:", error);
      }
    },
    [cart]
  );

  const handleRemoveProduct = useCallback(
    async (id: string) => {
      try {
        await APICart.removeProductFromCart(cart?.id, id);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        message.success("Xóa sản phẩm thành công!");
      } catch (error) {
        message.error("Lỗi khi xóa sản phẩm!");
      }
    },
    [cart]
  );

  const totalPrice = useMemo(
    () =>
      products.reduce(
        (sum, product) =>
          product.choosen ? sum + product.price * product.amount : sum,
        0
      ),
    [products]
  );

  return (
    <div className="flex justify-center p-6 bg-gray-50">
      <div className="w-full max-w-7xl flex gap-6">
        <div className="w-2/3 bg-white p-4 rounded shadow-sm">
          <Header
            selectAll={selectAll}
            onSelectAllChange={handleSelectAll}
            totalProducts={products.length}
          />
          <ProductList
            products={products}
            onCheckboxChange={handleCheckboxChange}
            onQuantityDecreaseChange={handleQuantityDecreaseChange}
            onQuantityIncreaseChange={handleQuantityIncreaseChange}
            onRemoveProduct={handleRemoveProduct}
          />
        </div>
        <Summary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default ShoppingCarts;
