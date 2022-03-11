import React from "react";
import loGo from "../../assets/logo.webp";

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // React.useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowWidth();
  //   });
  // }, [window.innerWidth]);
  // console.log(windowWidth);
  return (
    <header className="bg-black text-white py-4 flex items-center px-5">
      <div>
        <img className="w-[25%] cursor-pointer" src={loGo} alt="" />
      </div>

      {windowWidth < 976 ? (
       <i className="fa fa-bars" />

      ) : (
        <>
          {" "}
          <div className="">
            <ul className=" flex gap-8 text-[0.9rem]">
              <li className="text-hover">Trang Chủ</li>
              <li className="text-hover">Sản Phẩm Mới</li>
              <li className="text-hover">ProductView</li>
              <li className="text-hover">Blog</li>
              <li className="text-hover">Giới Thiệu</li>
              <li className="text-hover">Liên Hệ</li>
            </ul>
          </div>
          <div className="gap-4 flex ml-[16rem] text-[1.2rem]">
            <i className="text-hover fa fa-shopping-cart  hover:bg-[#343a40] px-2 py-2 " />
            <i className="text-hover fa fa-search hover:bg-[#343a40] px-2 py-2" />
            <i className="text-hover fa fa-user hover:bg-[#343a40] px-2 py-2" />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
