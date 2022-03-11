import React from "react";
import pizza from "../../assets/img_home_welcome.webp";
const About = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-5 bg-gray-100 mb-9">
      <div className="hinhanh ml-32 mt-20 ">
        <img className="w-3/4 sm:w-full" src={pizza} alt="" />
      </div>
      <div className="info mt-20 ml-20">
        <h1 className="text-[1.7rem] italic font-semibold">
          Chào mừng đến với Pizza House
        </h1>
        <div>
          <div className="text-2xl my-8 flex gap-2">
            <i className="hover:bg-yellow-300 hover:text-white hover:border-white transition duration-500 cursor-pointer  rounded-full  border-2 border-black px-9 py-9 bg-white  fa fa-pizza-slice" />
            <i className="hover:bg-yellow-300 hover:text-white hover:border-white transition duration-500 cursor-pointer rounded-full  border-2 border-black px-9 py-9 bg-white  fa fa-hamburger" />
            <i className="hover:bg-yellow-300 hover:text-white hover:border-white transition duration-500 cursor-pointer rounded-full  border-2 border-black px-9 py-9 bg-white fa fa-bread-slice" />
          </div>
        </div>
        <p className="mb-8 font-light">
          Chào mừng đến với Pizza House Các đầu bếp của chúng tôi làm việc 24/7
          và sẵn sàng tiếp nhận du khách vào bất kỳ thời điểm nào trong ngày và
          đêm
        </p>
        <button className="btn-Ric">Đặt món ngay</button>
      </div>
    </div>
  );
};

export default About;
