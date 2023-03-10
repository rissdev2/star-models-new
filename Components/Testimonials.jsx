import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonials extends Component {
  render() {
    const settings = {
     arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 760,
          settings: {
            slidesToShow: 1,
          }
        },
        {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      },
      ]
    };
    return (
      <section className='bg-[#0B0A07]' id="testimonials">
          <div className="container px-5 pt-24 mx-auto pb-36">
        <div className="bg-[#AC7C00] px-1 py-1 text-start w-28">
            <p className="text-lg text-center text-white cervino-med">FACTS</p>
          </div>
          <h1 className="text-[70px] font-thin cervino-thin uppercase title-font text-start text-white mb-20">
           customer testimonials
          </h1>
      

          <div>
        
        <Slider {...settings}>
          <div>
          <div className="w-full p-4">
        <div className="h-full text-white bg-[#080600] bg-opacity-40 p-8 rounded">
        <a className="inline-flex items-center">
            <img alt="testimonial" src="assets/img/Avatar.png" className="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full" />
            <span className="flex flex-col flex-grow pl-4">
              <span className="text-xl text-white uppercase cervino-med font-med title-font ">Haris Shahid</span>
              <span className="text-xs font-thin text-white">Art Director</span>
            </span>
          </a>
          <h2 className="text-xl lg:text-2xl font-lato " >It was a great expereince</h2>
          <ul className="flex gap-3 mt-3">
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
          </ul>
          <p className="mt-6 font-light leading-[37px] lato-light first-letter:">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
         
        </div>
      </div>
          </div>
          <div>
          <div className="w-full p-4">
        <div className="h-full text-white bg-[#080600] bg-opacity-40 p-8 rounded">
        <a className="inline-flex items-center">
            <img alt="testimonial" src="assets/img/Avatar2.png" className="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full" />
            <span className="flex flex-col flex-grow pl-4">
              <span className="text-xl font-thin text-white uppercase cervino-med title-font">Haris Shahid</span>
              <span className="text-xs font-thin text-white">Art Director</span>
            </span>
          </a>
          <h2 className="text-xl lg:text-2xl font-lato" >It was a great expereince</h2>
          <ul className="flex gap-3 mt-3">
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
          </ul>
          <p className="mt-6 font-light leading-[37px] lato-light first-letter:">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
         
        </div>
      </div>
          </div>
          <div>
          <div className="w-full p-4">
        <div className="h-full text-white bg-[#080600] bg-opacity-40 p-8 rounded">
        <a className="inline-flex items-center">
            <img alt="testimonial" src="assets/img/Avatar3.png" className="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full" />
            <span className="flex flex-col flex-grow pl-4">
              <span className="text-xl font-thin text-white uppercase cervino-med title-font">Haris Shahid</span>
              <span className="text-xs font-thin text-white">Art Director</span>
            </span>
          </a>
          <h2 className="text-xl lg:text-2xl font-lato " >It was a great expereince</h2>
          <ul className="flex gap-3 mt-3">
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
          </ul>
          <p className="mt-6 font-light leading-[37px] lato-light first-letter:">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
         
        </div>
      </div>
          </div>
          <div>
          <div className="w-full p-4">
        <div className="h-full text-white bg-[#080600] bg-opacity-40 p-8 rounded">
        <a className="inline-flex items-center">
            <img alt="testimonial" src="assets/img/Avatar4.png" className="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full" />
            <span className="flex flex-col flex-grow pl-4">
              <span className="text-xl font-thin text-white uppercase cervino-med title-font">Haris Shahid</span>
              <span className="text-xs font-thin text-white">Art Director</span>
            </span>
          </a>
          <h2 className="text-xl lg:text-2xl font-lato " >It was a great expereince</h2>
          <ul className="flex gap-3 mt-3">
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
          </ul>
          <p className="mt-6 font-light leading-[37px] lato-light first-letter:">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
         
        </div>
      </div>
          </div>
          <div>
          <div className="w-full p-4">
        <div className="h-full text-white bg-[#080600] bg-opacity-40 p-8 rounded">
        <a className="inline-flex items-center">
            <img alt="testimonial" src="assets/img/Avatar2.png" className="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full" />
            <span className="flex flex-col flex-grow pl-4">
              <span className="text-xl font-thin text-white uppercase cervino-med title-font">Haris Shahid</span>
              <span className="text-xs font-thin text-white">Art Director</span>
            </span>
          </a>
          <h2 className="text-xl lg:text-2xl font-lato " >It was a great expereince</h2>
          <ul className="flex gap-3 mt-3">
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
          </ul>
          <p className="mt-6 font-light leading-[37px] lato-light first-letter:">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
         
        </div>
      </div>
          </div>
          <div>
          <div className="w-full p-4">
        <div className="h-full text-white bg-[#080600] bg-opacity-40 p-8 rounded">
        <a className="inline-flex items-center">
            <img alt="testimonial" src="assets/img/Avatar4.png" className="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full" />
            <span className="flex flex-col flex-grow pl-4">
              <span className="text-xl font-thin text-white uppercase cervino-med title-font">Haris Shahid</span>
              <span className="text-xs font-thin text-white">Art Director</span>
            </span>
          </a>
          <h2 className="text-xl lg:text-2xl font-lato" >It was a great expereince</h2>
          <ul className="flex gap-3 mt-3">
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
            <li><img src="assets/img/star.svg" alt="" /></li>
          </ul>
          <p className="mt-6 font-light leading-[37px] lato-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
         
        </div>
      </div>
          </div>
        </Slider>
      </div>
      
        </div>


        </section>  







    );
  }
}
