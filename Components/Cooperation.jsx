import React from "react";

const Cooperation = () => {
  return (
    <>
      <section className="text-white bg-[#0B0A07] body-font" id="cooperation">
        <div className="container px-5 py-24 mx-auto">
        <div className="bg-[#AC7C00] px-5 py-1 text-center  mx-auto w-32">
            <p className="text-lg text-white cervino-med ">Exemplary</p>
          </div>
          <h1 className="text-[70px] font-thin uppercase title-font text-center cervino-thin text-white mb-20">
           Cooperation
          </h1>
          <div className="flex flex-wrap pl-0 -mx-4 -mt-4 -mb-10 lg:space-y-6 lg:pl-60 sm:-m-4 md:space-y-0">
            <div className="flex items-center lg:p-4 md:w-1/2">
              <h2 className="text-[140px] cervino-light -mt-4 text-[#272216] font-bold">
                1
              </h2>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-lato text-[19px] lg:text-[28px] font-medium lg:mb-5">
                Contact & budget clarification
                </h2>
                <p className="text-sm font-light leading-tight lg:text-base lg:leading-loose font-lato">
                You contact us or we contact you and we discuss your needs <br className="hidden lg:block" /> and your budget so that everything runs as you imagine it.
                </p>
              </div>
            </div>
            <div className="flex items-center lg:p-4 md:w-1/2">
            <h2 className="text-[140px] cervino-light -mt-4 text-[#272216] font-bold">
                2
              </h2>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-lato text-[19px] lg:text-[28px] font-medium lg:mb-5">
                Model selection & appointment
                </h2>
                <p className="text-sm font-light leading-tight lg:text-base lg:leading-loose font-lato">
                Based on your requirements, we create suggestions for <br className="hidden lg:block" /> suitable models and arrange an appointment with you
                </p>
              </div>
            </div>
            <div className="flex items-center lg:p-4 md:w-1/2">
            <h2 className="text-[140px] cervino-light -mt-4 text-[#272216] font-bold">
                3
              </h2>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-lato text-[19px] lg:text-[28px] font-medium lg:mb-5">
                Getting there & execution
                </h2>
                <p className="text-sm font-light leading-tight lg:text-base lg:leading-loose font-lato">
                We make sure that our models are there when <br className="hidden lg:block" />
you need them
                </p>
              </div>
            </div>
            <div className="flex items-center lg:p-4 md:w-1/2">
            <h2 className="text-[140px] -mt-4 cervino-light text-[#272216] font-bold">
                4
              </h2>
              <div className="flex-grow pl-6">
                <h2 className="text-white title-font font-lato text-[19px] lg:text-[28px] font-medium lg:mb-5">
                invoicing
                </h2>
                <p className="text-sm font-light leading-tight lg:text-base lg:leading-loose font-lato">
                After the booking you will receive an <br className="hidden lg:block" />
invoice from us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cooperation;
