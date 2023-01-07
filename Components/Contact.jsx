import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-[#080600] pb-20" id="contct">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="basis1/2">
              <div className="bg-[#AC7C00] px-2 py-1 text-start w-52">
                <p className="text-base text-center text-white cervino-med">
                  DO YOU HAVE QUESTIONS?
                </p>
              </div>
              <h1 className="text-[70px] font-thin uppercase cervino-thin title-font text-start text-white mb-5">
                CONTACT
              </h1>
              <p className="text-xl lg:text-2xl text-white lato-regular leading-normal lg:leading-[42px]">
                Interest in collaboration? Questions? Write to us, we will get
                back to you as soon as{" "}
                possible
              </p>
              <div className="flex flex-col items-start justify-center mx-auto mt-16">
                <div className="flex items-center w-full text-start gap-7 lg:w-4/5">
                  <img src="assets/img/location.png" alt="" />
                  <div>
                    <h2 className="text-2xl text-white font-lato">
                    Address
                    </h2>
                    <p className="text-base font-thin text-white lato-regular">
                      Your concerns and problems are in good hands with us.
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-full mt-10 text-start gap-7 lg:w-4/5">
                  <img src="assets/img/message.png" alt="" />
                  <div>
                    <h2 className="text-2xl text-white font-lato">E-mail</h2>
                    <p className="text-base font-thin text-white lato-regular">
                    Mail@Email.com.
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-full mt-10 text-start gap-7 lg:w-4/5">
                  <img src="assets/img/tele.png" alt="" />
                  <div>
                    <h2 className="text-2xl text-white font-lato">
                    Telephone
                    </h2>
                    <p className="text-base font-thin text-white lato-regular">
                    ( +49 ) 211 865610
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:basis-1/5"></div>
            {/* <div className="basis-1/5"></div> */}
            <div className="basis-[30%] font-lato mt-20 lg:mt-0">
              <div className="relative float-label-input">
                <input
                  type="text"
                  placeholder=" "
                  className="block bg-transparent text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label className="absolute left-0 px-0 text-white transition duration-200 pointer-events-none top-3 ease-in-outbg-white">
                  Name
                </label>
              </div>
              <div className="relative mt-10 float-label-input">
                <input
                  type="text"
                  placeholder=" "
                  className="block bg-transparent text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label className="absolute left-0 px-0 text-white transition duration-200 pointer-events-none top-3 ease-in-outbg-white">
                Pursue
                </label>
              </div>
              <div className="relative mt-10 float-label-input">
                <input
                  type="text"
                  placeholder=" "
                  className="block bg-transparent text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label className="absolute left-0 px-0 text-white transition duration-200 pointer-events-none top-3 ease-in-outbg-white">
                E-mail address or telephone number
                </label>
              </div>
              <div className="relative mt-10 float-label-input">
                <textarea
                  type="text"
                  placeholder=" "
                  className="block bg-transparent h-32 text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label className="absolute left-0 px-0 text-white transition duration-200 pointer-events-none top-3 ease-in-outbg-white">
                News
                </label>
              </div>
              <div className="flex gap-3 mt-10">  
              <input type="checkbox" />
              <label className="text-xs font-light text-white font-lato">I agree to the processing of my data for the purpose of establishing contact</label>
              </div>
              <button className="mt-20 inline-flex items-center text-white bg-tranparent border-0 py-[8px] px-[20px] bg-[#AC7C00] focus:outline-none hover:bg-[#AC7C00] rounded-0 text-base">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
