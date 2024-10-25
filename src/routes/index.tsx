import { Route, Routes } from "react-router-dom";
import { Login } from "../views/login";
import Register from "../views/register";
import User from "../views/login/user";
// import Band from "../views/login/band";
import ForgotPassword from "../views/login/forgot-password";
import ResetPassword from "../views/login/resetPassword";
import LayoutWebsite from "../views/layout";
// import File_image from "../views/login/file_image";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutWebsite />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="users" element={<User />} />
      {/* <Route path="band" element={<Band />} /> */}
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />
      {/* <Route path="file_image" element={<File_image />} /> */}
    </Routes>
  );
};
export default Router;
