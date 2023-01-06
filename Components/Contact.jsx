import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-[#080600] pb-20">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex">
            <div className="basis1/2">
              <div className="bg-[#AC7C00] px-2 py-1 text-start w-52">
                <p className="text-sm text-center text-white">
                  DO YOU HAVE QUESTIONS?
                </p>
              </div>
              <h1 className="text-[60px] font-thin uppercase title-font text-start text-white mb-5">
                CONTACT
              </h1>
              <p className="text-base text-white leading-[42px]">
                Interest in collaboration? Questions? Write to us, we will get
                back to you as soon as{" "}
                possible
              </p>
              <div class="mx-auto mt-16 flex items-start justify-center flex-col">
                <div class="text-start flex items-center gap-7 lg:w-4/5 w-full">
                  <img src="assets/img/location.png" alt="" />
                  <div>
                    <h2 className="text-2xl text-white">
                      25 years of experience
                    </h2>
                    <p className="text-lg font-thin text-white">
                      Your concerns and problems are in good hands with us.
                    </p>
                  </div>
                </div>
                <div class="text-start flex items-center gap-7 lg:w-4/5 w-full mt-10">
                  <img src="assets/img/message.png" alt="" />
                  <div>
                    <h2 className="text-2xl text-white">Wide offer</h2>
                    <p className="text-lg font-thin text-white">
                      Models for e-commerce, commercials & TV, trade fairs or
                      showrooms
                    </p>
                  </div>
                </div>
                <div class="text-start flex items-center gap-7 lg:w-4/5 w-full mt-10">
                  <img src="assets/img/tele.png" alt="" />
                  <div>
                    <h2 className="text-2xl text-white">
                      Carefree & Satisfied
                    </h2>
                    <p className="text-lg font-thin text-white">
                      We take care of everything that concerns our models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="basis-1/5"></div>
            <div className="basis-1/5"></div>
            <div className="basis-[30%] ">
              <div class="relative float-label-input">
                <input
                  type="text"
                  placeholder=" "
                  class="block bg-transparent text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label class="absolute top-3 left-0 text-white pointer-events-none transition duration-200 ease-in-outbg-white px-0">
                  Name
                </label>
              </div>
              <div class="relative float-label-input mt-10">
                <input
                  type="text"
                  placeholder=" "
                  class="block bg-transparent text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label class="absolute top-3 left-0 text-white pointer-events-none transition duration-200 ease-in-outbg-white px-0">
                Pursue
                </label>
              </div>
              <div class="relative float-label-input mt-10">
                <input
                  type="text"
                  placeholder=" "
                  class="block bg-transparent text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label class="absolute top-3 left-0 text-white pointer-events-none transition duration-200 ease-in-outbg-white px-0">
                E-mail address or telephone number
                </label>
              </div>
              <div class="relative float-label-input mt-10">
                <textarea
                  type="text"
                  placeholder=" "
                  class="block bg-transparent h-32 text-white w-full focus:outline-none focus:shadow-outline border-b border-[#444444] rounded-0 py-3 px-0 appearance-none leading-normal"
                />
                <label class="absolute top-3 left-0 text-white pointer-events-none transition duration-200 ease-in-outbg-white px-0">
                News
                </label>
              </div>
              <div className="flex gap-3 mt-10">  
              <input type="checkbox" />
              <label className="text-xs font-light text-white ">I agree to the processing of my data for the purpose of establishing contact</label>
              </div>
              <button class="mt-20 inline-flex items-center text-white bg-tranparent border-0 py-[8px] px-[20px] bg-[#AC7C00] focus:outline-none hover:bg-transparent rounded-0 text-base">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
