import Image from "next/image";
import React from "react";

const MainFooter = () => {
  return (
    <div className="bg-[#F8F8F8] relative bottom-0">

    
    <div className="max-w-[1440px] mx-auto   py-[52px] px-[42px] flex flex-col justify-between items-center lg:flex-row lg:justify-between lg:items-stretch lg:pt-[84px] lg:pb-[92px] lg:px-[103px] h-full font-source-sans-pro">
      <Image
        src="/assests/logo.png"
        alt="logo"
        width={161}
        height={125}
        className="w-[75] h-[58] lg:w-[161px] lg:h-[125px] self-center object-contain"
      />

      <div className="mt-[42px] relative w-full text-left font-source-sans-pro lg:w-auto lg:max-w-[220px]">
        <div className="  leading-[35px] font-semibold text-[16px] text-[#0e2368] lg:text-[19px] lg:leading-[27px] ">
          Contact Us
        </div>
        <div className="  text-[9px] text-[#646874] lg:text-[15px] lg:leading-[23px] lg:flex lg:flex-col lg:gap-[15px] lg:mt-[14px]">
          <div>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </div>
          <div className=" leading-[30px]">example2020@gmail.com</div>
          <div className=" leading-[30px] ">(904) 443-0343</div>
        </div>
      </div>

      <div className=" w-full text-left  font-source-sans-pro mt-[30px] lg:w-auto">
        <div className="  leading-[35px] font-semibold  text-[16px] text-[#0e2368] lg:text-[19px]">
          More
        </div>
        <div className=" text-[9px] text-[#646874] leading-[35px] lg:text-[15px] lg:leading-[23px] lg:flex lg:flex-col lg:gap-[14px] lg:mt-[14px]">
          <div>Products</div>
          <div>Career</div>
          <div>Contact Us</div>
          <div>About Us</div>
        </div>
      </div>

      <div className="mt-[30px] lg:flex lg:flex-col-reverse lg:justify-between h-full ">
        <div className=" text-[9px] leading-[32.13px] font-roboto text-[#646874] text-center lg:text-[15px] lg:leading-[25px] flex-[1] lg:absolute lg:bottom-[92px] lg:right-[104px] ">
          © 2022 Food Truck Example
        </div>
        <div>
          <div className="hidden lg:block  leading-[35px] font-semibold  text-[16px] text-[#0e2368] lg:text-[19px] text-center">
            Social Links
          </div>
          <div className="flex gap-[18px] w-full justify-center ">
            <svg
              width={21}
              height={21}
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 lg:w-5 lg:h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1.077c.799-.03 1.599-.008 2.395.067.386-.005.77.063 1.13.2.5.232.9.632 1.132 1.13.137.362.204.746.2 1.132 0 .599.066.799.066 2.395.03.8.008 1.6-.066 2.396.004.386-.063.77-.2 1.131a2.337 2.337 0 01-1.131 1.131 3.084 3.084 0 01-1.131.2c-.599 0-.799.067-2.395.067-.799.03-1.599.008-2.395-.067a3.084 3.084 0 01-1.13-.2 2.337 2.337 0 01-1.132-1.13 3.087 3.087 0 01-.2-1.132c0-.599-.066-.799-.066-2.396-.03-.799-.008-1.599.066-2.395-.004-.386.063-.77.2-1.131a2.39 2.39 0 01.466-.666c.156-.233.393-.399.665-.465a3.085 3.085 0 011.131-.2A18.355 18.355 0 016 1.077zM6 .012A19.652 19.652 0 003.538.08c-.5-.001-.995.089-1.463.266-.404.132-.769.36-1.064.665a2.605 2.605 0 00-.666 1.066c-.209.458-.3.96-.266 1.463-.074.819-.096 1.641-.067 2.462-.029.822-.007 1.644.067 2.463-.001.5.09.996.267 1.464.131.404.36.77.665 1.065.295.305.66.533 1.064.665.468.177.964.268 1.464.267.818.073 1.64.095 2.461.066.821.029 1.643.007 2.462-.067.5 0 .996-.09 1.464-.267a2.792 2.792 0 001.73-1.73 4.11 4.11 0 00.266-1.464c-.001-.665.066-.865.066-2.462.029-.82.007-1.643-.067-2.462.001-.5-.09-.996-.266-1.464a2.606 2.606 0 00-.666-1.065A2.604 2.604 0 009.925.345 4.106 4.106 0 008.462.079 19.652 19.652 0 006 .012zM6 2.94a3.01 3.01 0 00-3.06 3.061 3.062 3.062 0 005.224 2.165A3.061 3.061 0 006 2.94zm0 5.058a1.96 1.96 0 01-1.996-1.997A1.96 1.96 0 016 4.005 1.96 1.96 0 017.996 6 1.961 1.961 0 016 7.998zm3.194-5.922a.732.732 0 100 1.463.732.732 0 000-1.463z"
                fill="#0E2368"
              />
            </svg>

            <svg
              width={21}
              height={21}
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 lg:w-5 lg:h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.8 11.235a6.935 6.935 0 007-7.002V3.9A5.418 5.418 0 0012 2.633a5.531 5.531 0 01-1.4.4 2.594 2.594 0 001.066-1.334c-.482.268-.998.47-1.533.6a2.381 2.381 0 00-1.8-.8 2.504 2.504 0 00-2.467 2.468 1.3 1.3 0 00.067.533A6.89 6.89 0 01.866 1.9c-.22.385-.334.822-.333 1.266A2.65 2.65 0 001.6 5.234 2.25 2.25 0 01.466 4.9a2.438 2.438 0 002 2.4 2.054 2.054 0 01-.666.067 1.134 1.134 0 01-.467-.067 2.526 2.526 0 002.334 1.734A5.032 5.032 0 01.6 10.102a1.844 1.844 0 01-.6-.067 6.29 6.29 0 003.8 1.2z"
                fill="#0E2368"
              />
            </svg>

            <svg
              width={21}
              height={21}
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 lg:w-5 lg:h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.066 12.003V6.538h1.867L9.2 4.405H7.066V3.072c0-.6.2-1.067 1.067-1.067h1.133V.072C9 .072 8.333.006 7.6.006a2.574 2.574 0 00-2.733 2.799v1.6H3v2.133h1.867v5.465h2.2z"
                fill="#0E2368"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainFooter;
