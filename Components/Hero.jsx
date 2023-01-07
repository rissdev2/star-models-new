import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-white bg-transparent body-font">
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-0 md:pr-0 md:items-start md:text-left md:mb-0">
          <h1 className="mb-3 text-5xl font-thin text-white uppercase cervino-thin title-font sm:text-4xl lg:text-9xl lg:mb-8">Your reliable </h1>
          <h1 className="mb-3 text-5xl font-thin text-[#AC7C00] uppercase cervino-black title-font sm:text-4xl lg:text-9xl lg:mb-8"> model agency </h1>
          <p className="mb-8 text-[20px] font-semibold leading-relaxed sm:text-base lg:text-[20px] font-lato">With experience and unparalleled service, we make your shooting or event a success.</p>
            <div className="flex justify-center">
            <button className="inline-flex items-center font-lato font-light text-white bg-tranparent border py-[15px] px-[50px] focus:outline-none hover:bg-transparent rounded-0 text-lg">Inquiry</button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="assets/img/Girl.png"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center -mt-20">
          <a href="#next">
          <p className="text-lg font-normal font-lato">see more</p>
        <img src="assets/img/down.png" className='w-5 ml-6' alt="" />
          </a>
        
        </div>
        <div className="absolute top-[60%] md:top-[22%] lg:top-[42%]  right-32 md:right-14 lg:right-32">
        <ul className="flex flex-row gap-2 md:flex-col">
          <li><a href=""><img src="assets/img/twitter.png" alt="" /></a> </li>
          <li><a href=""><img src="assets/img/facebook.png" className="lg:mt-5" alt="" /></a> </li>
          <li><a href=""><img src="assets/img/pinterst.png" className="lg:mt-5" alt="" /></a> </li>
          <li><a href=""><img src="assets/img/insta.png" className="lg:mt-5" alt="" /></a> </li>
        </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
