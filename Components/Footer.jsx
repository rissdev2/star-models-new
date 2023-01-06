import React from 'react';

const Footer = () => {
    return (
        <>
          <section class="text-white bg-[#0B0A07] body-font">
  <div class="container px-0 py-8 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex justify-start">
        <p className='text-base text-white'>© 2022 <b>Star Model</b> </p>
      </div>
      <div class="p-4 md:w-1/3 flex justify-center ">
       <img src="assets/img/logo.png" alt="" />
      </div>
      <div class="p-4 md:w-1/3 flex justify-end">
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
