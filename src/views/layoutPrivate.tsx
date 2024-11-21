import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FooterText from "../components/FooterText";

const LayoutPrivate = () => {
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

export default LayoutPrivate;
