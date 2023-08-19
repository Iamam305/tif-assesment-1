import React, { useEffect, useRef, useState } from "react";
import ArticlesCard from "./articles-card";
import Slider from "react-slick";

const articlesData = [
  [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1693180800&Signature=m0OAZuz76-8Xd-~BUtOptHInZwM2RihX2OlJUc8DvP6EzE0oHWfRw1mWmSMoT5F021XrtrPAMXKcKcO~oENYZO~-K9gbib398P91pww8Cpq47TfIK7jdB-dcC-z1BtzuOQ69yTnBTIuyF0qAna6CtQbk9QFRp4L5nXEICboIghdgark4BWzQnhY0GSwsnfp6JSl7VOG7kGjEC3dzH1C2F0MRv3WCU0QrV1v7d8~fCU9f~z2Le6brGIgAIftfJYLXczikm6A3zWovgP9dwbFszlNhGERPxBbv9fkxOZd4EoGdiThrdvfNko4mmEnEwXtyJDII01XSnQ4Pk2t78Wz-sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Grilled  Tomatoes at Home",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
      url: "/",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1693180800&Signature=RXph5NPs49q12J6RZiSHXVJrshUcA-UHNOeXK05KZ9LrDy-cWTYNkhQGFjUvTp0WIysQT73wyQx1Jcwld3aCXF~qQ4ACL14Ahm296aSx3F0g~zlTYzuaRdYKiYqwXSpWfr2sIUfDM6c1TBeP~S2ZVdsK-G~ysZ9C8yMOKvDV6S43D8TJbWq-YURbkNUPgntmvpaN1VK8mHT63-pOInhCvKx04WAEFnw5DjjTkkP9b6YLluymop3tkg3DtttEYoZPw6fgk8i6FJOzew12S2cQshJ05Dp~UL-Imxv~ygCuomRgEj3NtueA78HCq00ICxR29NZd6ACv-V1k9ePSkHVvLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Snacks for Travel",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
      url: "/",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1693180800&Signature=U5SX2-xcamUroa9hWeZzrze6Bjt9jepeYBGThacsJ7MWpglS0HfaLBHGq6kYrWsB8tSgi3zquTWfdQhhIldAOFKm3juBEHHgH9g3a6e9TnpQAV5S~FcVWlssFOp3Wk1LFjuZkuZHONrH3eYhEUOI8YIOXk5ubHfV6b4XFEPxdE6BUr8Mp1rCk9TF~fJxloj0oF85841XgxoMLJghNutO4Yw90P63QIerAOvoCzQSa~z1XRjrqi5LC8Lgcxki5b8lBgbRkUfqd57yDNs8A1Bf7Q9rNScpSwvkUi4VtBNjtWhegAEh-Y1rBn2Ba3FGuritK1njJUAyOAUv5BYH3Ur4-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Post-workout Recipes",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
      url: "/",
    },
  ],
  [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b457/cb75/2678ff07019c289fb72556852cc6b74f?Expires=1693180800&Signature=NE-p2U89FatYUCufU5DR9L-aAr3qAjw9bjw0bt5PCxXI~CeGDyQO0SUs8wquVdtyqbheoQRNBuUknf0-u5zt-Vk8~6-X-yxxDskhxE3~1~ufxvFvW9P-zgucTTuTMGMDzhFCiP8jJ32HTI~NUYCf2Clc1IEAXIBS8rWsw1lsMygiqzfj5gTHT8~UxX2nEKJeIVwbsPLNijssZxcdHKWP~FSw3Ljqe4twAF9ybm1gOvtgXTMfTrg5i3CDkpDtIiVtWdOCNZ5PYIscAGBP~Jf1sG2lf1cvquHHlKHxunTEsKbWobnEt1cYzw63JenpuQzC-TtwwCL-ST0UNVEfLCEtQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "How To Grill Corn",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
      url: "/",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/36f0/05b2/98fb3af9a51a3627a968ca95735063e2?Expires=1693180800&Signature=LOy2fpgUtHjO9MyUruycbMUw2OCCEL8vX7XWpThUv5gqOSCP2ScPux6XxYA0lTH9TvjEKoZgZQTRTDWt7WvHU4G9jy4IQyS9Qm5Gkta6zrhvbaADf7lzZWWtPll7UW8Ik8aXdaCDXpA3i7zZal78iPPyNa3aWnXIbz~lQLYOKrqY~sCdYtEdKBwo9eAkxvnqOk~x1Kq7Hz20tilmWdE16VH0XWSONJBRu~PT7LbwTorPN1vllNAY4FQ1pr1gA0f6di-uG3B27W6HjfHfZusviPszpsRp~xFTDIMueOqjuokpkq~0f5ZOGBexSOIj-OAEDBxK2tfLE22nYZvX1kB6rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Crunchwrap Supreme",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
      url: "/",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/60f8/cba1/6ae830e61504aecaf6d8b547eb08589a?Expires=1693180800&Signature=P2rXyYjTtMn2dTFRTYyLSiO0KQUmnXS2oOUW09h3Km41W5fnTuoOKSnUmGXluqmm76Zq7dtwS6uIKhZYKb-YTc~4FkqQW~peUkxY2FAC1HMPf7~wK05j2d2Fk7y8Q2phDE76cLXtQbS8EZIEo5JIXKNf1DnMmbInYDV0VNtxEAl9upOPAkCeEiTRQoZYdVPvRgfhnxbMzhS~JodXrdexnqIEggi6T0n6T87rCOIs-ET8NG75E0F0gick3o5kz4TJ5AhriRiwE1-M2UYf3OSVSTsyp1RWIDEeS0Z4WfCpkH8YPN511yDFx93oO5Gepy~QfCi-omlFSIc7cDfq53Q-PQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Broccoli Cheese Soup",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
      url: "/",
    },
  ],
];

const LatestArticles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    slidesToShow: 1, // Number of items displayed horizontally
    slidesToScroll: 1,
    afterChange: (current: any) => setCurrentSlide(current),
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(React.Children.count(sliderRef.current.props.children));
    }
  }, []);

  return (
    <div className="pt-[132px] pb-[57px]  lg:px-[108px]">
      <h2 className="text-[#0E2368] mb-6 text-[28px] font-semibold leading-[54px] text-center lg:text-left lg:text-[56px] lg:leading-[46px] lg:mb-[68px] font-source-sans-pro">
        Latest Articles
      </h2>
      <div>
        <Slider ref={sliderRef} {...settings}>
          {articlesData?.map((e, i) => ( 
            <div   key={i}>
              <div
               
                className="flex flex-col justify-between lg:flex-row gap-[60px] lg:gap-0 "
              >
                {e?.map((card, j) => (
                  <div key={j} className="self-center">
                    <ArticlesCard 
                      desc={card.desc}
                      image={card.image}
                      title={card.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center w-full mt-[60px] gap-3 items-center leading-[0] text-[22px] font-source-sans-pro">
          <button onClick={previous}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={29}
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.442 22.852c.553-.313.733-1.11.366-1.618-.102-.142-1.682-1.603-3.512-3.247L11.97 15l3.327-2.989c1.83-1.644 3.41-3.105 3.512-3.247.12-.166.186-.406.186-.677 0-.372-.04-.455-.365-.752-.334-.305-.41-.334-.871-.334h-.506l-4.126 3.764L9 14.528v.431c0 .255.063.518.154.644.224.308 7.369 6.849 7.805 7.145.429.29 1.074.336 1.483.104z"
                fill="#424961"
              />
              <rect
                x={0.5}
                y={0.5}
                width={27}
                height={28}
                rx={4.5}
                stroke="#424961"
              />
            </svg>
          </button>
          {`${currentSlide + 1}/${totalSlides || 0}`}
          <button onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={29}
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.558 7.148c-.553.313-.733 1.11-.366 1.618.102.142 1.682 1.603 3.512 3.246l3.326 2.989-3.327 2.989c-1.83 1.644-3.41 3.105-3.512 3.247-.12.167-.186.406-.186.677 0 .371.04.455.365.752.334.305.41.334.872.334h.504l4.127-3.764L19 15.472v-.431c0-.255-.063-.518-.154-.644-.224-.308-7.369-6.849-7.805-7.145-.429-.29-1.074-.336-1.483-.104z"
                fill="#424961"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.558 7.148c-.553.313-.733 1.11-.366 1.618.102.142 1.682 1.603 3.512 3.246l3.326 2.989-3.327 2.989c-1.83 1.644-3.41 3.105-3.512 3.247-.12.167-.186.406-.186.677 0 .371.04.455.365.752.334.305.41.334.872.334h.504l4.127-3.764L19 15.472v-.431c0-.255-.063-.518-.154-.644-.224-.308-7.369-6.849-7.805-7.145-.429-.29-1.074-.336-1.483-.104z"
                fill="#424961"
              />
              <rect
                x={0.5}
                y={0.5}
                width={27}
                height={28}
                rx={4.5}
                stroke="#424961"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
