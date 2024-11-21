import React from "react";
import { Row, Col } from "antd";
import CardBanner from "./Home/CardBanner";
import LessonCard from "./Home/LessonCard";
import SubjectButton from "./Home/SubjectButton";

import img6 from "../assets/img/8.png";
import img7 from "../assets/img/b1.png";
import Banner from "./Products/Banner";
import ImageGallery from "./Home/ImageGallery";
import MenuShop from "../layout/MenuShop";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div style={{ padding: "30px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
            {[...Array(2)].map((_, index) => (
              <Col xs={24} sm={12} key={index}>
                <CardBanner
                  title="Các thế tấn Vovinam Việt Võ Đạo phổ biến"
                  image={img7}
                />
              </Col>
            ))}
          </Row>

          <Row
            gutter={[16, 16]}
            style={{ marginBottom: "300px", padding: "20px 0" }} // padding trên dưới để có khoảng trắng
          ></Row>

          <h2
            style={{
              marginTop: "0px",
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Môn học gợi ý
          </h2>
          {[
            [
              "Vovinam",
              "Thiền định",
              "Karate",
              "Dance Sport",
              "Dance Sport",
              "Dance Sport",
            ],
            [
              "Vovinam",
              "Thiền định",
              "Karate",
              "Dance Sport",
              "Dance Sport",
              "Dance Sport",
            ],
          ].map((row, rowIndex) => (
            <Row
              gutter={[16, 16]}
              key={rowIndex}
              style={{ marginBottom: rowIndex === 1 ? "40px" : "16px" }}
            >
              {row.map((subject) => (
                <SubjectButton key={subject} subject={subject} />
              ))}
            </Row>
          ))}
          <h2
            style={{
              marginTop: "0px",
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Các khóa học nổi bật
          </h2>
          <Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
            {[...Array(4)].map((_, index) => (
              <Col xs={12} sm={8} lg={6} key={index}>
                <LessonCard
                  title="Vovinam"
                  description="Khẩu quyết tinh hoa lưỡng nghi kiếm pháp"
                  image={img6}
                />
              </Col>
            ))}
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
            {[...Array(4)].map((_, index) => (
              <Col xs={12} sm={8} lg={6} key={index}>
                <LessonCard
                  title="Vovinam"
                  description="Khẩu quyết tinh hoa lưỡng nghi kiếm pháp"
                  image={img6}
                />
              </Col>
            ))}
          </Row>
          <ImageGallery />

          <Row
            gutter={[16, 16]}
            style={{ marginBottom: "300px", padding: "20px 0" }} // padding trên dưới để có khoảng trắng
          ></Row>

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
              img={img7}
              title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
              number={"243.000 đ"}
            />
            <MenuShop
              img={img7}
              title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
              number={"243.000 đ"}
            />
            <MenuShop
              img={img7}
              title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
              number={"243.000 đ"}
            />
            <MenuShop
              img={img7}
              title={"Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam"}
              number={"243.000 đ"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
