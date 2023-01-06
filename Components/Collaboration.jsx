import React from 'react';

const Collaboration = () => {
    return (
        <>
           <section className="text-gray-400 col-sec body-font">
  <div className="container flex flex-col items-center px-5 pt-24 mx-auto md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
    <h1 className="mb-3 text-xl font-thin text-white uppercase title-font sm:text-4xl lg:text-6xl lg:mb-8">Interest in <span className='font-bold text-[#AC7C00]'>collaboration?</span> </h1>
      <div className="flex justify-center">
      <button className="inline-flex items-center text-white bg-tranparent border py-[15px] px-[50px] focus:outline-none hover:bg-transparent rounded-0 text-lg">Inquiry</button>
      </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <img className="object-cover object-center rounded" alt="hero" src="assets/img/girl-2.png" />
    </div>
  </div>
</section>     
        </>
    );
}

export default Collaboration;
