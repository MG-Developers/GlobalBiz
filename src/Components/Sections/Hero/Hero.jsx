import React from "react";

function Hero() {
  const stats = [
    {
      title: "$ 10M",
      text: "Taxes saved till date",
    },

    {
      title: "7 +",
      text: "Years of experience",
    },

    {
      title: "#1",
      text: "Rated Agency",
    },
  ];

  return (
    <section className="bg-gb-bg-1 py-10 text-white h-full">
      <div className="mx-auto w-11/12">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-y-10">
          <div className="xl:mt-20 lg:mt-12 md:mt-10">
            <p className="xl:text-7xl lg:text-5xl text-4xl font-bold">
              Your Gateway To
            </p>
            <p className="xl:text-6xl lg:text-4xl text-3xl font-bold text-gb-yellow mt-6">
              Zero % Tax.
              {/* Business Expansion. */}
            </p>
          </div>

          <div className="flex justify-center">
            <img className="rounded-3xl md:w-11/12" src="images/img4.jpg" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 items-end md:mt-0 mt-12">
          <div>
            <img src="images/star.svg" />

            <p className="xl:text-4xl lg:text-3xl text-2xl font-medium md:mt-8 mt-6">
              “Designed for <span className="text-gb-yellow">HNIs.</span> !”
            </p>

            <p className="xl:text-xl lg:text-lg text-base font-medium md:mt-8 mt-2">
              Rahul Taneja{" "}
              <span className="text-gb-gray-3 ml-2 xl:text-xl lg:text-lg text-base">
                Founder @ GlobalBizHQ
              </span>{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-8 items-start md:text-center md:mt-0 mt-10">
            {stats.map((item, index) => {
              return (
                <div key={index}>
                  <p className="xl:text-5xl lg:text-4xl text-2xl font-semibold">
                    {item.title}
                  </p>
                  <p className="xl:text-base text-sm text-gb-yellow md:mt-6 mt-4">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
