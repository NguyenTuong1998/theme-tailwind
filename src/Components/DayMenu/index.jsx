import React from "react";
import pizza from "../../assets/pizza.png";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
const DayMenu = () => {
  return (
    <div className="bg-gray-200">
      <p className=" pt-10 text-center text-3xl font-semibold italic">
        Menu <span className="italic text-yellow-400">Trong ngày</span>
      </p>
      <div className="py-8 flex gap-6 justify-center">
        <button className="btn-Ric text-white">Sản phẩm khuyến mãi</button>
        <button className="btn-Ric">Sản phẩm nổi bật</button>
        <button className="btn-Ric">Tất cả sản phẩm</button>
      </div>
      <div className="grid gap-6 mx-16 md:grid-cols-3 grid-cols-2 ">
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
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
          <img className="pb-6" src={pizza1} alt="" />
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
          <img className="pb-6" src={pizza2} alt="" />
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
          <i className="fa fa-angle-right  hover:bg-yellow-500 hover:text-white cursor-pointer border rounded-full bg-white  px-4 py-3" />
        </div>
      </div>
    </div>
  );
};

export default DayMenu;
