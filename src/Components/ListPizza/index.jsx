import React from "react";
import list1 from "../../assets/list_1.jpg";
const ListPizza = () => {
  return (
    <div className="mb-20">
      <p className="text-center my-8 text-3xl font-semibold italic">
        Danh mục <span className="text-yellow-400">Pizza</span>
      </p>
      <div className=" grid grid-cols-3 mb-7 gap-10 mx-16">
        <div className="shadow-lg shadow-indigo-500/40">
          <img className="rounded pb-6 " src={list1} alt="" />
          <div className="px-10">
            <p>Pizza Gà</p>
            <ul className="list-disc pt-3 pb-5">
              <li>Margherita</li>
              <li>Xúc xích gà</li>
              <li>Paneer</li>
              <li>Rau</li>
              <li>Gia vị</li>
              <li>Gà cay</li>
              <li>Gà Lebanon</li>
              <li>Soya Masala</li>
            </ul>
          </div>
        </div>
        <div className="shadow-lg shadow-indigo-500/40">
          <img className="rounded pb-6 " src={list1} alt="" />
          <div className="px-10">
            <p>Pizza Gà</p>
            <ul className="list-disc pt-3 pb-5">
              <li>Margherita</li>
              <li>Xúc xích gà</li>
              <li>Paneer</li>
              <li>Rau</li>
              <li>Gia vị</li>
              <li>Gà cay</li>
              <li>Gà Lebanon</li>
              <li>Soya Masala</li>
            </ul>
          </div>
        </div>
        <div className="shadow-lg shadow-indigo-500/40">
          <img className="rounded pb-6 " src={list1} alt="" />
          <div className="px-10">
            <p>Pizza Gà</p>
            <ul className="list-disc pt-3 pb-5">
              <li>Margherita</li>
              <li>Xúc xích gà</li>
              <li>Paneer</li>
              <li>Rau</li>
              <li>Gia vị</li>
              <li>Gà cay</li>
              <li>Gà Lebanon</li>
              <li>Soya Masala</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPizza;
