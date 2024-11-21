import React from "react";
import img4 from "../b1.png";

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full sm:w-1/3 p-2">
        <img src={img4} alt="Image 1" className="object-cover h-48 w-full" />
      </div>
      <div className="w-full sm:w-1/3 p-2">
        <img src={img4} alt="Image 2" className="object-cover h-48 w-full" />
      </div>
      <div className="w-full sm:w-1/3 p-2">
        <img src={img4} alt="Image 3" className="object-cover h-48 w-full" />
      </div>
    </div>
  );
};

export default ImageGallery;
