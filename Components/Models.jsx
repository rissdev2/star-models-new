import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import { Navigation } from "swiper";


const Models = () => {
  return (
    <>
      <section className="bg-[#0B0A07]">
      <div className="container px-5 pt-24 mx-auto">
        <div className="bg-[#AC7C00] px-1 py-1 text-center  mx-auto w-36">
            <p className="text-base text-white ">A FEW OF OURS</p>
          </div>
          <h1 className="text-[60px] font-thin uppercase title-font text-center text-white mb-20">
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
            992: {
              slidesPerView: 5,
              spaceBetween: 60,
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
            <p className="text-sm text-white">Jhon. D</p>
            <div className="flex ">
              <div className="basis-1/2">
                <h3 className="text-3xl text-white">Gents</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="inline-flex items-center text-white bg-tranparent border py-[5px] px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-lg">
                  More
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
            <p className="text-sm text-white">Merry james</p>
            <div className="flex ">
              <div className="basis-1/2">
                <h3 className="text-3xl text-white">Ladies</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="inline-flex items-center text-white bg-tranparent border py-[5px] px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-lg">
                  More
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
            <p className="text-sm text-white">Merry james</p>
            <div className="flex ">
              <div className="basis-1/2">
                <h3 className="text-3xl text-white">Ladies</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="inline-flex items-center text-white bg-tranparent border py-[5px] px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-lg">
                  More
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
            <p className="text-sm text-white">Sam Khan</p>
            <div className="flex ">
              <div className="basis-1/2">
                <h3 className="text-3xl text-white">Commercial</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="inline-flex items-center text-white bg-tranparent border py-[5px] px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-lg">
                  More
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
            <p className="text-sm text-white">Sam Khan</p>
            <div className="flex ">
              <div className="basis-1/2">
                <h3 className="text-3xl text-white">Commercial</h3>
              </div>
              <div className="flex justify-end basis-1/2">
                {" "}
                <button className="inline-flex items-center text-white bg-tranparent border py-[5px] px-[35px] focus:outline-none hover:bg-transparent rounded-0 text-lg">
                  More
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
