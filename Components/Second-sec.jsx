import React from "react";

const SecondSec = () => {
  return (
    <>
      <section className="text-white bg-[#090600] body-font" id="next">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
            <div className="flex flex-col items-center p-4 text-center md:w-1/3">
              <img src="assets/img/experience.png" alt="" />
              <div className="flex-grow">
                <h2 className="mt-5 mb-3 text-2xl font-medium text-white lato-regular title-font">
                  25 years of experience
                </h2>
                <p className="text-lg font-light leading-relaxed">
                  Your concerns and problems are in good <br /> hands with us.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 text-center md:w-1/3">
              <img src="assets/img/offer.png" alt="" />
              <div className="flex-grow">
                <h2 className="mt-5 mb-3 text-2xl font-medium text-white lato-regular title-font">
                  Wide offer
                </h2>
                <p className="text-lg font-light leading-relaxed">
                  Models for e-commerce, commercials & <br /> TV, trade fairs or
                  showrooms
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 text-center md:w-1/3">
              <img src="assets/img/carefree.png" alt="" />
              <div className="flex-grow">
                <h2 className="mt-5 mb-3 text-2xl font-medium text-white lato-regular title-font">
                  Carefree & Satisfied
                </h2>
                <p className="text-lg font-light leading-relaxed">
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
