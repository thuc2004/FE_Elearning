import React from "react";
import Navbar from "../components/Navbar";
// import Shop from "../components/shop";
import Footer from "../components/Footer";
import FooterText from "../components/FooterText";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="shop">
          {/* <Banner /> */}
          <Outlet />
        </div>
      </main>
      <Footer />
      <FooterText />
    </div>
  );
};

export default LayoutWebsite;
