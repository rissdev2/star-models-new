import React from "react";

const SecondSec = () => {
  return (
    <>
      <section className="text-white bg-[#090600] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <img src="assets/img/experience.png" alt="" />
              <div className="flex-grow">
                <h2 className="text-white text-2xl mt-5 title-font font-medium mb-3">
                  25 years of experience
                </h2>
                <p className="leading-relaxed text-lg font-thin">
                  Your concerns and problems are in good <br /> hands with us.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <img src="assets/img/offer.png" alt="" />
              <div className="flex-grow">
                <h2 className="text-white text-2xl mt-5 title-font font-medium mb-3">
                  Wide offer
                </h2>
                <p className="leading-relaxed text-lg font-thin">
                  Models for e-commerce, commercials & <br /> TV, trade fairs or
                  showrooms
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <img src="assets/img/carefree.png" alt="" />
              <div className="flex-grow">
                <h2 className="text-white text-2xl mt-5 title-font font-medium mb-3">
                  Carefree & Satisfied
                </h2>
                <p className="leading-relaxed text-lg font-thin">
                  We take care of everything that <br /> concerns our models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSec;
