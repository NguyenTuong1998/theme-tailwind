import React from "react";
import peo from "../../assets/peo.png";
const PeopleComment = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <h1 className=" py-10 text-center text-3xl font-semibold italic">
        Ý kiến khách hàng
      </h1>
      <p className="mx-96 w-1/2">
        Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus
        lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales
        suscipit tortor ditaemcos condimentum
      </p>
      <div className="text-center my-7">
        <img className="block ml-auto mr-auto rounded-full mb-5 " src={peo} alt="" />
        <h1>Sebastian</h1>
        <p>Graphic Designer</p>
      </div>
      <div>
        <div className="justify-center mt-10 pb-10 gap-7 flex">
          <i className="fa fa-angle-left hover:bg-yellow-500 hover:text-white cursor-pointer border rounded-full bg-white  px-4 py-3" />
          <i className="fa fa-angle-right  hover:bg-yellow-500 hover:text-white cursor-pointer border rounded-full bg-white  px-4 py-3" />
        </div>
      </div>
    </div>
  );
};

export default PeopleComment;
