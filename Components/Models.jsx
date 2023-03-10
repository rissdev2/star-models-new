import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import { Navigation } from "swiper";


const Models = () => {
  return (
    <>
      <section className="bg-[#0B0A07]" id="models">
      <div className="container px-5 pt-24 mx-auto">
        <div className="bg-[#AC7C00] px-1 py-1 text-center  mx-auto w-36">
            <p className="text-lg text-white cervino-med">A FEW OF OURS</p>
          </div>
          <h1 className="text-[70px] font-thin uppercase title-font text-center cervino-thin text-white mb-20">
           Models
          </h1>
        </div>
        <Swiper
          direction={"horizontal"}
          loop={true}
          centeredSlides={true}
          autoHeight={true}
          slidesPerView={1}
          spaceBetween={60}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
           
            1080: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            1650: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1700: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide className="w-full sld-1">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-sm text-white font-lato">Jhon. D</p>
            <div className="flex items-center">
              <div className="basis-1/2">
                <h3 className="text-2xl text-white cervino-med">Gents</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="font-lato inline-flex items-center text-white bg-tranparent border py-1 px-5 md:py-[5px] md:px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-base">
                <a href="">More</a> 
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full sld-2">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-sm text-white font-lato">Merry james</p>
            <div className="flex items-center">
              <div className="basis-1/2">
                <h3 className="text-2xl text-white cervino-med">Ladies</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="font-lato inline-flex items-center text-white bg-tranparent border py-1 px-5 md:py-[5px] md:px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-base">
                <a href="">More</a> 
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full sld-3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-sm text-white font-lato">Merry james</p>
            <div className="flex items-center">
              <div className="basis-1/2">
                <h3 className="text-2xl text-white cervino-med">Ladies</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="font-lato inline-flex items-center text-white bg-tranparent border py-1 px-5 md:py-[5px] md:px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-base">
                <a href="">More</a> 
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full sld-4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-sm text-white font-lato">Sam Khan</p>
            <div className="flex items-center">
              <div className="basis-1/2">
                <h3 className="text-2xl text-white cervino-med">Commercial</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="font-lato inline-flex items-center text-white bg-tranparent border py-1 px-5 md:py-[5px] md:px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-base">
                <a href="">More</a> 
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full sld-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-sm text-white font-lato">Sam Khan</p>
            <div className="flex items-center">
              <div className="basis-1/2">
                <h3 className="text-2xl text-white cervino-med">Commercial</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="font-lato inline-flex items-center text-white bg-tranparent border py-1 px-5 md:py-[5px] md:px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-base">
                 <a href="">More</a> 
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Models;
