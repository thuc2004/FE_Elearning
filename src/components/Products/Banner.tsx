import React from "react";

const Banner = () => {
  return (
    <section className="banner flex items-center justify-center">
      <img
        src="https://picsum.photos/id/10/1440/500"
        alt="Banner"
        className="mx-auto w-[100%] h-auto" // Chiều rộng 100%
      />
    </section>
  );
};

export default Banner;
