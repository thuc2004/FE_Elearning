import React, { useEffect, useState } from "react";
import MenuShop from "../layout/MenuShop";
// import img2 from "../assets/img/3.png";
// import img3 from "../assets/img/4.png";
// import img4 from "../assets/img/5.png";
// import img5 from "../assets/img/6.png";
// import img6 from "../assets/img/8.png";
import { APIProduct } from "../services/APIProduct";
import ListHeader from "./Products/ListHeader";
import formatCurrency from "../util/formatCurrency";

interface Product {
  id: string; // hoặc string, tuỳ vào kiểu id của bạn
  productVariants?: { images?: { url: string }[]; id: string; price: string }[];
  name: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await APIProduct.getAllProduct();

      const product: Product[] = response.data;
      setProducts(product);
    };
    fetchProduct();
  }, []);
  // const products = APIProduct.getAllProduct();
  return (
    <div>
      <ListHeader />
      <div className=" grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        {products.map((product: Product) => {
          return (
            <MenuShop
              key={product.id}
              idVariant={product.productVariants?.[0]?.id}
              idProduct={product.id}
              img={
                product.productVariants?.[0]?.images?.[0]?.url ||
                "/default-image.png"
              }
              title={product.name}
              number={formatCurrency(product.productVariants?.[0]?.price)}
            />
          );
        })}
      </div>
      <div className="gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        {/* Nội dung bên trái */}
        <h3 className="text-black font-bold mb-1">Găng tay, đá vợt</h3>
        <p className="text-black text-sm">
          Sản phẩm chất lượng với giá tốt nhất
        </p>
      </div>

      <div className="gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        {/* Nội dung bên trái */}
        <h3 className="text-black font-bold mb-1">Dụng cụ tập luyện</h3>
        <p className="text-black text-sm">
          Sản phẩm chất lượng với giá tốt nhất
        </p>
      </div>

      <div className=" grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        {/* <MenuShop img={img6} />
        <MenuShop
          img={img2}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img3}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img4}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img5}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        /> */}
      </div>
    </div>
  );
};

export default Shop;
