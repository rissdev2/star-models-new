import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-white bg-transparent body-font">
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-3 text-xl font-thin text-white uppercase title-font sm:text-4xl lg:text-7xl lg:mb-8">Your reliable <span className='font-bold text-[#AC7C00]'><br /> <br className="hidden lg:block" /> model agency</span> </h1>
          <p className="mb-8 text-sm font-normal leading-relaxed sm:text-base lg:text-lg font-lato">With experience and unparalleled service, we make your shooting or event a success.</p>
            <div className="flex justify-center">
            <button className="inline-flex items-center text-white bg-tranparent border py-[15px] px-[50px] focus:outline-none hover:bg-transparent rounded-0 text-lg">Inquiry</button>
            </div>
          </div>
          <div className="w-5/6  md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="assets/img/Girl.png"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
        <p className="text-lg">see more</p>
        <img src="assets/img/down.png" className='w-5' alt="" />
        </div>
        <div className="absolute top-[42%] right-32">
        <ul>
          <li><img src="assets/img/twitter.png" alt="" /></li>
          <li><img src="assets/img/facebook.png" className="mt-5" alt="" /></li>
          <li><img src="assets/img/pinterst.png" className="mt-5" alt="" /></li>
          <li><img src="assets/img/insta.png" className="mt-5" alt="" /></li>
        </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
