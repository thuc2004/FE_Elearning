import React, { useEffect, useState } from "react";
import { Button, Divider, Row, Col, Typography, Space, Breadcrumb } from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { APIProduct } from "../services/APIProduct";
import { APIProductVariant } from "../services/APIProductVariant";
import { APICart } from "../services/APICart";

const { Title, Text } = Typography;

const ProductDetail = () => {
  
  const navigate = useNavigate();
  const param = useParams();
  const [cartId,setCartId] = useState()
  const [productVariant, setProductVariant] = useState(null);
  const [products, setProducts] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    async function fetchAPI() {
      const cartId = await APICart.getCartByUserId();
      console.log(cartId);
      setCartId(cartId.id)
    }
    fetchAPI();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await APIProduct.getProductById(param.productId);
        const productVariantData =
          await APIProductVariant.getProductVariantById(param.id);

        setProducts(productData.data);
        setProductVariant(productVariantData.data);

        // Lấy thông tin kích thước và màu sắc mặc định
        const defaultVariant = productVariantData.data;
        setSize(defaultVariant.size?.name || null);
        setColor(defaultVariant.color?.name || null);
        setSelectedImage(
          defaultVariant.images?.[1]?.url || defaultVariant.images?.[0]?.url
        );
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProduct();
  }, [param.productId, param.id]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const imageList = productVariant?.images || [];

  return (
    <div style={{ padding: "20px", maxWidth: "1300px", margin: "auto" }}>
      {/* Breadcrumb */}
      <Breadcrumb style={{ marginBottom: "20px" }}>
        <Breadcrumb.Item>
          <Link to="/home">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/shop">Cửa hàng</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{products?.category || "Danh mục"}</Breadcrumb.Item>
        <Breadcrumb.Item>{products?.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row gutter={16}>
          {/* Cột ảnh nhỏ */}
          <Col span={3}>
            <Space direction="vertical" size="small">
              {imageList.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Vovinam ${index + 1}`}
                  style={{
                    width: "64px",
                    height: "64px",
                    cursor: "pointer",
                    objectFit: "cover",
                    border:
                      selectedImage === image.url
                        ? "2px solid #1890ff"
                        : "none",
                  }}
                  onClick={() => setSelectedImage(image.url)}
                />
              ))}
            </Space>
          </Col>

          {/* Cột ảnh lớn */}
          <Col span={9} style={{ textAlign: "center" }}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Võ phục Vovinam"
                style={{
                  width: "100%",
                  maxWidth: "440px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            )}
          </Col>

          {/* Thông tin sản phẩm */}
          <Col span={12} style={{ padding: "20px" }}>
            <Title level={3}>{products?.name}</Title>
            <div style={{ marginBottom: "20px" }}>
              <Text
                style={{ color: "red", fontSize: "25px", fontWeight: "bold" }}
              >
                245.000đ
              </Text>
            </div>

            <Divider />

            {/* Số lượng */}
            <div style={{ marginBottom: "20px" }}>
              <Text style={{ marginRight: "80px" }}>Số lượng</Text>
              <Space>
                <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
              </Space>
            </div>

            {/* Kích thước */}
            <div style={{ marginBottom: "20px" }}>
              <Text style={{ marginRight: "70px" }}>Kích thước</Text>
              <Space>
                {products?.productVariants?.map((variant) => (
                  <Button
                    key={variant?.size?.id}
                    type={size === variant?.size?.name ? "primary" : "default"}
                    onClick={() => setSize(variant?.size?.name)}
                  >
                    {variant?.size?.name}
                  </Button>
                ))}
              </Space>
            </div>

            {/* Màu sắc */}
            <div style={{ marginBottom: "20px" }}>
              <Text style={{ marginRight: "85px" }}>Màu sắc</Text>
              <Space>
                {products?.productVariants?.map((variant) => (
                  <Button
                    key={variant?.color?.id}
                    type={
                      color === variant?.color?.name ? "primary" : "default"
                    }
                    onClick={() => setColor(variant?.color?.name)}
                  >
                    {variant?.color?.name}
                  </Button>
                ))}
              </Space>
            </div>

            <Divider />

            {/* Nút hành động */}
            <Space>
              <Button
                type="primary"
                style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
              >
                + Thêm vào giỏ
              </Button>
              <Button
                type="primary"
                style={{ backgroundColor: "green", borderColor: "green" }}
                onClick={() => navigate(`/cart/${cartId}`)}
              >
                <ShopOutlined />
                Mua ngay
              </Button>
            </Space>
          </Col>
        </Row>

        <Divider />

        {/* Mô tả sản phẩm */}
        <Title level={4}>Mô tả sản phẩm</Title>
        <Text>
          {isExpanded ? "Nội dung mô tả đầy đủ..." : "Mô tả ngắn gọn..."}
        </Text>
        <Button type="link" onClick={toggleExpand}>
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
