import React from "react";

function Client() {
  return (
    <section className="mt-4 py-16 bg-gb-bg-1 text-white">
      <div className="container lg:w-4/5 mx-auto px-8">
        <h1 className="text-4xl font-bold mb-8">
          Hear it from one of our clients,
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-bold">MR. PRATIK GAURI</h1>
            <p className="mt-2 text-xl font-medium mb-2">
              FOUNDER AND CEO - 5IRE.ORG <br /> SOCIAL ENTREPRENEUR, INVESTOR,
              <br />
              PUBLIC SPEAKER, WRITER
            </p>
            <hr className="bg-gb-yellow w-1/2 h-1" />
            <div className="mt-10 flex justify-center lg:justify-start">
              <img src="images/pratik.png" alt="profile-img" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl">
              Widely known as the Creator of the 5th Industrial Revolution{" "}
            </h1>
            <p className="mt-4 text-lg lg:text-xl font-light leading-relaxed">
              Engaging with GlobalBizHQ has proven to be an exquisite
              experience, epitomizing the epitome of professionalism and
              expertise. Their discerning approach to financial consultation and
              business expansion strategies has seamlessly aligned with my high
              standards, ensuring every aspect of my ventures receives
              meticulous attention and tailored solutions. Through their astute
              guidance and refined insights, I've navigated complex financial
              landscapes with confidence, achieving exceptional results that
              have fortified my wealth and positioned me for sustained success.
              My association with GlobalBizHQ is not merely transactional; it's
              an investment in excellence, underscored by their unwavering
              commitment to my prosperity.
            </p>
            <div className="flex justify-end mt-4 lg:mt-8">
              <img src="images/signature.png" alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
