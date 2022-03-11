import React from "react";
import pizza from "../../assets/pizza.png";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
const DiscountProduct = () => {
  return (
    <div className="mb-20">
      <p className=" pt-10 text-center text-3xl font-semibold mb-9 italic">
        Sản phẩm <span className="italic text-yellow-400">khuyến mãi</span>
      </p>
      <div className="grid gap-6 mx-16 md:grid-cols-4 grid-cols-2 ">
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
          <div>
            <h1 className=" text-sm mb-3 text-center text-hover">
              CHEESE MANIA - PIZZA PHÔ MAI
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
          <div>
            <h1 className="text-sm  mb-3 text-center text-hover">
              VEGGIE MANIA - PIZZA CHAY
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
          <div>
            <h1 className="text-sm  mb-3 text-center text-hover">
              CHEESE MANIA - PIZZA PHÔ MAI
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
          <div>
            <h1 className="text-sm  mb-3 text-center text-hover">
              CHEESE MANIA - PIZZA PHÔ MAI
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
          <div>
            <h1 className=" text-sm mb-3 text-center text-hover">
              CHEESE MANIA - PIZZA PHÔ MAI
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
        <div className="btn-productItem">
          <img className="pb-6" src={pizza} alt="#" />
          <div>
            <h1 className="text-sm  mb-3 text-center text-hover">
              VEGGIE MANIA - PIZZA CHAY
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
            <h1 className=" text-sm mb-3 text-center text-hover">
              TERIYAKI CHICKEN - GÀ XỐT
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
            <h1 className="text-sm mb-3 text-center text-hover ">
              {" "}
              KID MANIA - PIZZA CHO BẠN NHỎ
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-red-600">59,000đ</p>
              <button className="btn-OderItem">Đặt món +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
