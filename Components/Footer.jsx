import React from 'react';

const Footer = () => {
    return (
        <>
          <section className="text-white bg-[#0B0A07] body-font">
  <div className="container px-0 py-0 mx-auto">
    <div className="flex flex-col flex-wrap justify-center -mx-4 -mt-4 -mb-10 space-y-6 md:flex-row sm:-m-4 md:space-y-0">
      <div className="flex justify-center md:p-4 md:justify-start md:w-1/3">
        <p className='text-base text-white'>© 2022 <b>Star Model</b> </p>
      </div>
      <div className="flex justify-center md:p-4 md:w-1/3 ">
       <img src="assets/img/logo.png" alt="" />
      </div>
      <div className="flex justify-center md:p-4 lg:justify-end md:w-1/3">
        <ul className='flex gap-5'>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Term of Services</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>  
        </>
    );
}

export default Footer;
