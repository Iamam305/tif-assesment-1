import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative bg-[#F0F1F7] py-[140px] px-[50px] lg:flex lg:justify-between lg:py-0 lg:px-[205px]  lg:gap-[200px] before:bg-[#F0F1F7] before:absolute before:w-screen before:h-full before:left-1/2 before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] z-40 before:-z-10">
      <div className="hidden lg:block  min-w-[384px]">
        <Image
          src={"/assests/about.png"}
          alt="about img"
          width={384}
          height={468}
          className=" h-full w-full"
        />
      </div>
      <div className="lg:py-[108px] text-center lg:text-left">
        <h2 className=" text-[26px] font-semibold leading-[35px] text-[#0E2368] lg:text-[45px] lg:leading-[27px] font-poppins">
          About Us
        </h2>
        <p className="text-[#444957]  text-[11px] leading-[21px] mt-[21px] mb-4 lg:text-[15px] lg:leading-[27px] lg:mt-[28px] lg:mb-[25px] font-open-sans">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="bg-[#E23744] w-[96px] h-[25px] text-white font-semibold text-[11px] rounded-[27px] mx-auto block lg:inline-block lg:h-[42px] lg:w-[132px] lg:text-[16px] font-source-sans-pro">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
