import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full lg:flex lg:flex-row-reverse lg:justify-between items-center lg:mb-[150px]">
      <div className="w-full relative max-w-[100vw] lg:w-1/2">
        <Image
          src="/assests/heroVector.png"
          alt="svg-overlay"
          width={752}
          height={839}
          className="absolute top-0 left-0 z-10 object-left w-full"
        />
        <Image
          src="/assests/Hero.png"
          alt="hero img"
          width={735}
          height={804}
          className=" top-0 left-0 object-left w-full"
        />
      </div>
      <div className="p-16 lg:w-1/2 text-center lg:text-start lg:pr-[260px]">
        <h1 className="text-[38px] font-bold leading-[46px] text-[#0E2368] lg:text-start lg:text-[62px] lg:leading-[69px] font-source-sans-pro">
          Discover the <span className="text-[#E23744]"> Best</span> Food and
          Drinks
        </h1>
        <p className=" text-[#444957] text-[11px] leading-[18px] font-normal mt-5 mb-7 lg:text-[17px] lg:mt-[26px] lg:mb-10 lg:leading-[28px] font-open-sans">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>

        <button className="w-[120px] h-[40px] bg-[#E23744] text-white rounded-[30px] font-bold leading-[31px] text-[12px]  mx-auto block lg:inline-block lg:w-[190px] lg:h-[63px] lg:rounded-[34px] lg:text-[18px] font-open-sans">
          Explore Now!
        </button>
      </div>
    </div>
  );
};

export default Hero;
