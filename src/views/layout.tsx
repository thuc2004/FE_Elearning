import React from "react";
import Navbar from "../components/Navbar";
import Shop from "../components/shop";
import Footer from "../components/Footer";
import FooterText from "../components/FooterText";

const LayoutWebsite = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="shop">
          {/* <Banner /> */}
          <Shop />
        </div>
      </main>
      <Footer />
      <FooterText />
    </div>
  );
};

export default LayoutWebsite;
