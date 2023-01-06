import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-white bg-transparent body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl lg:text-7xl text-xl mb-3 lg:mb-8 font-thin text-white uppercase">Your reliable <span className='font-bold text-[#AC7C00]'><br /> <br className="hidden lg:block" /> model agency</span> </h1>
          <p class="leading-relaxed sm:text-base lg:text-lg text-sm mb-8 font-lato font-normal">With experience and unparalleled service, we make your shooting or event a success.</p>
            <div className="flex justify-center">
            <button class="inline-flex items-center text-white bg-tranparent border py-[15px] px-[50px] focus:outline-none hover:bg-transparent rounded-0 text-lg">Inquiry</button>
            </div>
          </div>
          <div className=" md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="assets/img/Girl.png"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
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
