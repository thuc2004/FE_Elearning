import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import img1 from "../carts/3.png";
import {
  Layout,
  Menu,
  Input,
  Select,
  Card,
  Row,
  Col,
  Checkbox,
  Typography,
  Breadcrumb,
  Pagination,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const categories = [
  { label: "Ngành hàng con", count: 3 },
  { label: "Everlast", count: 85 },
  { label: "BN", count: 2 },
  { label: "Fighter Việt Nam", count: 52 },
  { label: "Mongkol", count: 34 },
];

const products = Array(80).fill({
  image: img1,
  name: "Vợt Đá Đôi Fighter | Taekwondo, Võ Cổ Truyền, Vovinam",
  price: "243.000 đ",
});

const ProductCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout style={{ padding: "20px 220px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Title level={1}>Dụng Cụ Luyện Võ Thuật</Title>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/shop">List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Layout>
        <Sider
          width={200}
          style={{
            background: "#fff",
            padding: "20px",
            height: "auto",
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          <Title level={4}>Ngành hàng</Title>
          <Menu mode="inline" style={{ borderRight: 0 }}>
            {categories.map((category, index) => (
              <Menu.Item key={index}>
                <Checkbox>
                  {category.label} ({category.count})
                </Checkbox>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Text>{products.length} sản phẩm</Text>
            <Input
              placeholder="Tìm kiếm sản phẩm"
              prefix={<SearchOutlined />}
              style={{ width: 300 }}
            />
            <Select defaultValue="Bán chạy nhất" style={{ width: 150 }}>
              <Option value="ban-chay-nhat">Bán chạy nhất</Option>
              <Option value="gia-thap-den-cao">Giá: Thấp đến Cao</Option>
              <Option value="gia-cao-den-thap">Giá: Cao đến Thấp</Option>
            </Select>
          </div>

          <Row gutter={[16, 16]}>
            {paginatedProducts.map((product, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Link to={`/detail/${index + 1}`}>
                  {" "}
                  {/* Product link to a dynamic page */}
                  <Card
                    hoverable
                    cover={<img alt="example" src={product.image} />}
                    style={{ borderRadius: "8px" }}
                  >
                    <Text strong style={{ fontSize: "16px" }}>
                      {product.name}
                    </Text>
                    <br />
                    <Text type="danger" strong style={{ fontSize: "18px" }}>
                      {product.price}
                    </Text>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <Pagination
            current={currentPage}
            onChange={onPageChange}
            total={products.length}
            pageSize={itemsPerPage}
            style={{ marginTop: "20px", textAlign: "center" }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProductCatalog;
