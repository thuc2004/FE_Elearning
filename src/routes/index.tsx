import { Route, Routes } from "react-router-dom";
import { Login } from "../views/login";
import Register from "../views/register";
// import User from "../views/login/user";
// import Band from "../views/login/band";
import ForgotPassword from "../views/login/forgot-password";
// import ResetPassword from "../views/login/resetPassword";
import LayoutWebsite from "../views/layout";
import Shop from "../components/shop";
import Home from "../components/Home";
import Logout from "../views/login/logout";
import PrivateRoute from "../routes/privateRoute";
import LayoutPrivate from "../views/layoutPrivate";
import HomePage from "../components/homePage";
import ProductCatalog from "../pages/(dashboard)/carts/ProductCatalog";
import Order from "../pages/(dashboard)/carts/Order";
import Address from "../pages/(dashboard)/carts/Address";
import ProductDetail from "../components/DetailProduct";
import BankPaymentQR from "../pages/(dashboard)/carts/BankPaymentQR";
import ShoppingCarts from "../pages/(dashboard)/carts/ShoppingCarts";
import LearningVideo from "../components/Course/LearningVideo/LearningVideo";
import OTPVerification from "../views/register/Otp";
import PaymentSuccessModal from "../pages/(dashboard)/order/PaymentSuccess";
import PaymentFailed from "../pages/(dashboard)/order/PaymentFailed";
import NoProduct from "../pages/(dashboard)/order/NoProduct";
import PersonalInfoPage from "../pages/user/PersonalInfoPage";
import PersonalInfo from "../pages/user/Information/PersonalInfo";
import ContactInfo from "../pages/user/Information/ContactInfo";
import Password from "../pages/user/Information/Password";
// import File_image from "../views/login/file_image";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<LayoutWebsite />}>
          <Route path="" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/cart/:cartId" element={<ShoppingCarts />} />
          <Route path="/product" element={<ProductCatalog />} />
          <Route path="/order/:orderId" element={<Order />} />
          <Route path="/address" element={<Address />} />
          <Route path="/bank" element={<BankPaymentQR />} />
          <Route path="/confirm-code" element={<OTPVerification />} />
          <Route path="/payment" element={<PaymentSuccessModal />} />
          <Route path="/failed" element={<PaymentFailed />} />
          <Route path="/no" element={<NoProduct />} />
          <Route path="/" element={<PersonalInfoPage />} />
          {/* <Route path="/info" element={<PersonalInfo />} /> */}
          {/* <Route path="users" element={<User />} /> */}
          <Route path="/" element={<PersonalInfoPage />}>
            <Route path="info" element={<PersonalInfo />} />
            <Route path="contact-info" element={<ContactInfo />} />
            <Route path="change-password" element={<Password />} />
            {/* Các route khác */}
          </Route>
          <Route element={<PrivateRoute />}></Route>
          <Route
            path="/:productId/detail/:id"
            element={<ProductDetail />}
          />{" "}
          <Route path="/learning-course" element={<LearningVideo />} />
          {/*chi tiết sp */}
          {/* <Route path="band" element={<Band />} /> */}
          <Route path="forgot-password" element={<ForgotPassword />} />
          {/* <Route path="resetPassword" element={<ResetPassword />} /> */}
          {/* <Route path="file_image" element={<File_image />} /> */}
        </Route>
      </Route>

      <Route path="/" element={<LayoutPrivate />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
export default Router;
