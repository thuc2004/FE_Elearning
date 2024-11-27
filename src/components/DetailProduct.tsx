import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Row,
  Col,
  Typography,
  Space,
  Breadcrumb,
  Alert,
} from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { APIProduct } from "../services/APIProduct";
import { APIProductVariant } from "../services/APIProductVariant";
import { APICart } from "../services/APICart";
import formatCurrency from "../util/formatCurrency";

const { Title, Text } = Typography;

const ProductDetail = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [cartId, setCartId] = useState();
  const [variantId, setVariantId] = useState(param?.id);
  const [productVariant, setProductVariant] = useState(null);
  const [products, setProducts] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const cartId = await APICart.getCartByUserId();
        if (cartId === 404) {
          setCartId(undefined);
        } else {
          setCartId(cartId.id);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCartId(undefined); // Xử lý mặc định nếu lỗi xảy ra
      }
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchProduct = async (variantId: unknown) => {
      try {
        const productData = await APIProduct.getProductById(param.productId);
        const productVariantData =
          await APIProductVariant.getProductVariantById(variantId);
        console.log(productVariantData);

        setProducts(productData.data);
        setProductVariant(productVariantData.data);

        // Lấy thông tin kích thước và màu sắc mặc định
        const defaultVariant = productVariantData.data;
        console.log(defaultVariant);

        setSize(defaultVariant.sizeId || null);
        setColor(defaultVariant.colorId || null);
        setSelectedImage(
          defaultVariant.images?.[1]?.url || defaultVariant.images?.[0]?.url
        );
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProduct(variantId);
  }, [variantId, param.productId]);

  const handleClickBuy = async (cartId: unknown) => {
    if (!cartId) {
      const newCart = await APICart.addToCart({
        productId: variantId,
        amount: quantity,
        price: productVariant.price,
      });
      console.log(newCart);
      navigate(`/cart/${newCart?.id}`);
    }
  };

  const handleChangeColor = async (color: string, size: string) => {
    const variantId = products?.productVariants?.filter((product) => {
      return product.color.id === color && product.size.id === size;
    });
    console.log(variantId);

    if (!variantId.length) {
      alert("Variant not eexist");
    } else {
      setColor(color);
      setVariantId(variantId[0].id);
    }
  };

  const handleChangeSize = async (size: string, color: string) => {
    const variantId = products?.productVariants?.filter((product) => {
      return product.color.id === color && product.size.id === size;
    });
    console.log(variantId);

    if (!variantId.length) {
      alert("Variant not eexist");
    } else {
      setSize(size);
      setVariantId(variantId[0].id);
    }
  };

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
                {formatCurrency(productVariant?.price)}
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
                {products?.productVariants
                  ?.filter(
                    (variant, index, self) =>
                      index ===
                      self.findIndex((v) => v.size.id === variant.size.id)
                  )
                  ?.map((variant) => (
                    <Button
                      key={variant?.size?.id}
                      type={size === variant?.size?.id ? "primary" : "default"}
                      onClick={() => handleChangeSize(variant?.size?.id, color)}
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
                {products?.productVariants
                  ?.filter(
                    (variant, index, self) =>
                      index ===
                      self.findIndex((v) => v.color.id === variant.color.id)
                  )
                  ?.map((variant) => (
                    <Button
                      key={variant?.color?.id}
                      type={
                        color === variant?.color?.id ? "primary" : "default"
                      }
                      onClick={() =>
                        handleChangeColor(variant?.color?.id, size)
                      }
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
                onClick={() => handleClickBuy(cartId)}
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
