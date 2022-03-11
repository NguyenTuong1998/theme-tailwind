import React from "react";
import pi from "../../assets/pi.webp";
import pi1 from "../../assets/pi1.webp";
import pi2 from "../../assets/pi2.webp";
const NewProductItem = () => {
  return (
    <div className="bg-gray-200">
      <div className="mb-7">
        <p className=" pt-10 text-center text-3xl font-semibold italic">
          Sản phẩm <span className="italic text-yellow-400">mới</span>
        </p>
      </div>
      <div className="grid gap-6 mx-16 md:grid-cols-3 grid-cols-2 ">
        <div className="btn-productItem">
          <img className="pb-6" src={pi} alt="#" />
          <div>
            <h1 className="mb-3 text-center text-hover">
              CHEESE MANIA - PIZZA PHÔ MAI
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem ">
          <img className="pb-6" src={pi1} alt="" />
          <div>
            <h1 className="mb-3 text-center text-hover">
              CHEESE MANIA - PIZZA PHÔ MAI
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem ">
          <img className="pb-6" src={pi2} alt="" />
          <div>
            <h1 className="mb-3 text-center text-hover ">
              {" "}
              HAWAIIAN - PIZZA KIỂU HAWAII
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="justify-center mt-5 pb-5 gap-7 flex">
          <i className="fa fa-angle-left hover:bg-yellow-500 hover:text-white cursor-pointer border rounded-full bg-white  px-4 py-3" />
          <i className="fa fa-angle-right hover:bg-yellow-500 hover:text-white cursor-pointer border rounded-full bg-white  px-4 py-3" />
        </div>
      </div>
    </div>
  );
};

export default NewProductItem;
