import Image from "next/image";
import React from "react";

const MainNav = () => {
  return (
    <div>
      <div className="flex justify-end items-top pr-5 mt-4 lg:pl-[100px] lg:mt-8 absolute w-full z-50 lg:justify-between ">
        <Image
          src={
            "/assests/logo.png"
          }
          alt="logo"
          width={107}
          height={83}
          className="hidden lg:block"
        />
        <div className="flex items-start h-full align-top">
          <button className="  rounded-[27px]  w-[88px] h-[31px] font-semibold text-white border-[1px] border-solid border-white  text-[11px] align-top lg:w-[122px] lg:h-[42px] lg:rounded-[21px] lg:text-base font-source-sans-pro">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
