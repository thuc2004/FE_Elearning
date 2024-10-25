import React from "react";
import MenuShop from "../layout/MenuShop";
import img1 from "../assets/img/2.png";
import img2 from "../assets/img/3.png";
import img3 from "../assets/img/4.png";
import img4 from "../assets/img/5.png";
import img5 from "../assets/img/6.png";
import img6 from "../assets/img/8.png";

const Shop = () => {
  return (
    <div>
      <div className=" grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        <MenuShop
          img={img1}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
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
        />

        <MenuShop
          img={img5}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img5}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img5}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img5}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
        <MenuShop
          img={img5}
          title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
          number={"243.000 đ"}
        />
      </div>
      <div className="gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        {/* Nội dung bên trái */}
        <h3 className="text-black font-bold mb-1">Găng tay, đá vợt</h3>
        <p className="text-black text-sm">
          Sản phẩm chất lượng với giá tốt nhất
        </p>
      </div>

      <div className=" grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        <MenuShop img={img6} />
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
        />
      </div>

      <div className="gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        {/* Nội dung bên trái */}
        <h3 className="text-black font-bold mb-1">Dụng cụ tập luyện</h3>
        <p className="text-black text-sm">
          Sản phẩm chất lượng với giá tốt nhất
        </p>
      </div>

      <div className=" grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-10 p-5 max-w-7xl mx-auto">
        <MenuShop img={img6} />
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
        />
      </div>
    </div>
  );
};

export default Shop;