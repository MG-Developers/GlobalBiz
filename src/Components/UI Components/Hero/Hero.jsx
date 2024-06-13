import React from "react";

export const Hero = () => {
  return (
    <section className="h-[--hero-height] mt-10">
      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-20 py-12">
        <div className="lg:w-7/12 lg:pr-20">
          <h1 className="mb-10 text-3xl font-normal md:text-5xl">
            <span className="text-5xl capitalize font-bold leading-relaxed">
              Your gateway to{" "}
              <span className="text-gb-yellow text-6xl">Zero</span>% Tax and
              Business Expansion!
            </span>{" "}
          </h1>

          <h1 className="text-4xl font-semibold mt-20">
            Designed for UHNIs<span className="text-gb-yellow text-6xl">.</span>
          </h1>
        </div>

        <div className="lg:w-5/12 mt-10 lg:mt-0">
          <img
            className="object-cover w-full h-auto lg:h-full rounded-lg"
            src="images/img1.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
