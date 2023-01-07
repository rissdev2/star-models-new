import React from "react";

const Navigation = () => {
  return (
    <>
      <header className="text-white bg-transparent body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-12 font-lato md:border-gray-700">
            <a className="mr-8 font-normal hover:text-white font-lato" href="#cooperation">Cooperation</a>
            <a className="mr-8 font-normal hover:text-white font-lato" href="#models">Models</a>
            <a className="mr-8 font-normal hover:text-white font-lato " href="#testimonials">Testimonials</a>
          </nav>
          <button className="inline-flex font-normal font-lato items-center px-[50px] py-[15px] mt-4 text-base bg-transparent border rounded-none focus:outline-none hover:bg-transparent md:mt-0">
           <a href="#contct">Contact</a> 
          </button>
        </div>
      </header>
    </>
  );
};

export default Navigation;
