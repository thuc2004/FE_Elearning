import React from "react";
import ProductItem from "./ProductItem";

interface Product {
    id: number;
    name: string;
    price: number;
    amount: number;
    imageUrl: string;
    choosen: boolean;
  }

interface ProductListProps {
  cart:object;
  products: Product[];
  onCheckboxChange: (id: string, checked: boolean) => void;
  onQuantityDecreaseChange: (id: string, delta: number) => void;
  onQuantityIncreaseChange: (id: string, delta: number) => void;
  onRemoveProduct: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  cart,
  products,
  onCheckboxChange,
  onQuantityDecreaseChange,
  onQuantityIncreaseChange,
  onRemoveProduct,
}) => {
  return (
    <>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          cart={cart}
          product={product}
          onCheckboxChange={onCheckboxChange}
          onQuantityDecreaseChange={onQuantityDecreaseChange}
          onQuantityIncreaseChange={onQuantityIncreaseChange}
          onRemoveProduct={onRemoveProduct}
        />
      ))}
    </>
  );
};

export default React.memo(ProductList);
