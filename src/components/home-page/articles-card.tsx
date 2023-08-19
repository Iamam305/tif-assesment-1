import Image from "next/image";
import React from "react";

interface articlesCardTypes{
    image:string,
    title:string,
    desc:string,
    url?:string,

}

const ArticlesCard = ({image, title, desc, url}:articlesCardTypes) => {
  return (
   <div className="w-full max-w-[271px]  py-10  border-solid border-[1px] border-[#373737] rounded-[27px] flex flex-col items-center lg:max-w-[381px] lg:py-[27px] lg:items-start">
    <Image src={image} width={204} height={166} alt="blog image" className="w-full px-[33px] lg:px-[28px]  lg:rounded-[21px]"/>
    <h3 className="w-full mt-10 text-[#0E2368] text-[16px] font-bold leading-[35px] text-center px-[20px] lg:text-[21px] lg:text-left lg:px-[40px] lg:mt-[35px] lg:leading-[27px] lg:mb-[14px] font-poppins">
    {title}
    </h3>
    <p className="text-[#444957] text-[12px] leading-[22px] px-7 lg:text-[15px] lg:px-10 lg:leading-[27px] font-open-sans">
    {desc}....
    </p>
    <button className="w-[118px] h-[26px] border-2 border-[#424961] border-solid rounded-[27px] text-[11px] font-semibold mt-[26px] lg:w-[131px] lg:h-[42px] lg:rounded-[21px] lg:text-[16px] lg:inline-block lg:ml-10 font-source-sans-pro">
    Read More
    </button>

   </div>
  );
};

export default ArticlesCard;
