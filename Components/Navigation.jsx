import React from "react";

const Navigation = () => {
  return (
    <>
      <header className="text-white bg-transparent body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-12 font-lato md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a className="mr-8 hover:text-white">Cooperation</a>
            <a className="mr-8 hover:text-white">Models</a>
            <a className="mr-8 hover:text-white">Testimonials</a>
          </nav>
          <button className="inline-flex items-center px-[50px] py-[15px] mt-4 text-base bg-transparent border rounded-none focus:outline-none hover:bg-transparent md:mt-0">
            Contact
          </button>
        </div>
      </header>
    </>
  );
};

export default Navigation;
