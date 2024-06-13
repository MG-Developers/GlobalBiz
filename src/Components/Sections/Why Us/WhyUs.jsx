import React from "react";

function WhyUs() {
  return (
    <section className="pb-12 bg-white text-black lg:mb-10 mb-4">
      <div className="container w-11/12 mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center lg:text-6xl md:text-5xl text-3xl font-bold">
            <p className="mr-4 border-b-4 border-gb-yellow">Why</p>
            <img
              className="lg:w-96 md:w-80 w-52 mr-2 lg:mr-4"
              src="images/logo-2.svg"
              alt="GlobalBizHQ Logo"
            />
            <p className="lg:text-7xl md:text-5xl text-4xl text-gb-yellow">?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "images/hni-icon.svg",
              text: "Exclusively Tailored for UHNIs",
            },
            {
              icon: "images/globe-icon.svg",
              text: "Global Clientele",
            },
            {
              icon: "images/dollar-icon.svg",
              text: "$100M+ Taxes Saved",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center border-2 border-gray-400 rounded-3xl items-center p-8"
            >
              <img className="w-20 lg:w-28 mb-4" src={item.icon} alt="" />
              <p className="text-xl lg:text-2xl text-center font-bold mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
