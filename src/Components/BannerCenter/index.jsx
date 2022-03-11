import React from "react";
import banner1 from "../../assets/img_home_banner_1.webp";
import banner2 from "../../assets/img_home_banner_2.webp";
const BannerCenter = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 my-16">
      <div className="w-4/5 ml-16 border-8 border-yellow-500 cursor-pointer ">
        <img className="" src={banner1} alt="#" />
      </div>
      <div className="w-4/5 border-8 border-yellow-500  ml-16">
        <img src={banner2} alt="#" />
      </div>
    </div>
  );
};

export default BannerCenter;
