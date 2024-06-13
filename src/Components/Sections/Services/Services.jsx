import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="mt-4 py-12 bg-white text-black">
      <div className="container lg:w-4/5 w-full mx-auto px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="border-b-4 border-gb-yellow">What</span> We Do{" "}
            <span className="text-gb-yellow">?</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl">
            We cater exclusively to the elite league of{" "}
            <span className="text-xl lg:text-2xl font-semibold text-gb-yellow">
              Ultra High-NetWorth Individuals (UHNIs)
            </span>
            , offering bespoke solutions to minimize your tax liability to zero
            while maximizing your business potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: "images/tax-icon.svg",
              text: "Tax Optimization",
            },
            {
              icon: "images/business-icon.svg",
              text: "Business Setup",
            },
            {
              icon: "images/investment-icon.svg",
              text: "Investment Crafting",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center border-2 border-gray-400 rounded-3xl items-center p-8"
            >
              <img className="w-24 lg:w-28 mb-4" src={item.icon} alt="" />
              <p className="text-xl lg:text-2xl text-center font-bold">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/pricing"
            className="flex items-center justify-center w-3/4 md:w-2/5 lg:w-2/5 hover:text-white bg-gb-yellow text-black font-bold rounded-full py-3 px-6"
          >
            <CiCalendar className="mr-2" size="1.5rem" />
            Book Consultation
          </Link>
        </div>
      </div>

      {/* <div className="h-40 mt-20 bg-gb-bg-1"></div> */}

      <div className="bg-gb-bg-1 text-white mt-28 py-28">
        <div className="container lg:w-4/5 w-full mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                Exclusive{" "}
                <span className="text-gb-yellow text-5xl">
                  Tax Optimization
                </span>{" "}
                <br />&{" "}
                <span className="text-gb-yellow text-5xl">Corporate</span>{" "}
                Concierge
              </h1>
              <p className="text-base text-justify lg:text-xl">
                We specialize in empowering High-Net-Worth Individuals (HNIs)
                worldwide to move to zero tax status and build wealth by
                optimizing the taxes they're currently paying. With a focus on
                personalized service and discretion, we cater exclusively to
                HNIs, offering bespoke solutions to minimize tax liabilities and
                maximize financial opportunities.
              </p>

              {/* <div className="flex justify-center lg:justify-start mt-10">
                <Link
                  to="/pricing"
                  className="flex items-center justify-center w-11/12 md:w-1/2 lg:w-3/4 hover:text-white bg-gb-yellow text-black font-bold rounded-full py-3 px-6"
                >
                  <CiCalendar className="mr-2" size="1.5rem" />
                  Book Consultation
                </Link>
              </div> */}
            </div>
            <div className="w-full lg:w-2/5">
              <img
                src="images/img1.jpg"
                alt="Trade Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="container lg:w-4/5 w-full mx-auto px-8">
          <div className="mt-12 lg:mt-32 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="w-full lg:w-2/5">
              <img
                src="images/img1.jpg"
                alt="Trade Illustration"
                className="w-full"
              />
            </div>

            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                Comprehensive{" "}
                <span className="text-gb-yellow text-5xl">Business Setup</span>{" "}
                Assistance
              </h1>
              <p className="text-base lg:text-xl text-justify text-white">
                Explore options to manage your business without getting into the
                nitty-gritty. Establishing a business in a new country may seem
                daunting, but with our perfected process, it becomes a
                manageable and rewarding endeavor. we handle all formalities on
                your behalf, ensuring compliance and efficiency at every step.
                Our team of seasoned professionals is dedicated to providing you
                with personalized attention and comprehensive support, leaving
                no stone unturned in optimizing your financial affairs.
              </p>

              {/* <div className="flex justify-center lg:justify-start mt-10">
                <Link
                  to="/pricing"
                  className="flex items-center justify-center w-11/12 md:w-1/2 lg:w-3/4 hover:text-white bg-gb-yellow text-black font-bold rounded-full py-3 px-6"
                >
                  <CiCalendar className="mr-2" size="1.5rem" />
                  Book Consultation
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container lg:w-4/5 w-full mx-auto px-8">
          <div className="mt-12 lg:mt-32 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                Compound
                <span className="text-gb-yellow text-5xl"> Money</span>
                .<br />
                We <span className="text-gb-yellow text-5xl">Guide</span> Where
                To Invest Next
              </h1>
              <p className="text-base text-justify lg:text-xl text-white">
                We understand that saving on taxes is just the beginning. We'll
                also empower you to reinvest those saved funds wisely, guiding
                you towards opportunities that promise returns which outperforms
                the market. Our goal is not just to minimize your tax liability
                but to help you build huge wealth.
              </p>

              {/* <div className="flex justify-center lg:justify-start mt-10">
                <Link
                  to="/pricing"
                  className="flex items-center justify-center w-11/12 md:w-1/2 lg:w-3/4 hover:text-white bg-gb-yellow text-black font-bold rounded-full py-3 px-6"
                >
                  <CiCalendar className="mr-2" size="1.5rem" />
                  Book Consultation
                </Link>
              </div> */}
            </div>
            <div className="w-full lg:w-2/5">
              <img
                src="images/img1.jpg"
                alt="Trade Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-40 bg-gb-yellow text-black flex items-center justify-center text-center">
        <p className="capitalize text-2xl font-bold">
          WE have a proven track record of handling $100 million USD in Assets
          Under Management (AUM) to date
        </p>
      </div>
    </section>
  );
}

export default Services;

{
  /* <section className="mt-32 px-12 lg:px-40 py-20 bg-gb-bg-1 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-5/12 mb-8 lg:mb-0 lg:mr-4 rounded-2xl">
            <h1 className="text-5xl font-semibold text-center lg:text-left">
              <span style={{ borderBottom: "6px solid #ffbe00" }}>What</span> We
              Do <span className="text-gb-yellow">?</span>
            </h1>
            <p className="text-xl text-justify leading-relaxed mt-8">
              We cater exclusively to the elite league of{" "}
              <span className="text-gb-yellow font-semibold">
                Ultra/High-NetWorth Individuals (HNIs)
              </span>
              , offering bespoke solutions to minimize your tax liability to
              zero while maximizing your business potential. Our specialized
              services extend beyond borders, serving clients from every corner
              of the globe with unparalleled expertise and discretion.
            </p>
            <Link
              to="/pricing"
              className="flex items-center justify-center w-full mt-10 hover:text-gb-bg-1 bg-gb-yellow text-black font-bold rounded-full px-6 py-3"
            >
              <CiCalendar className="mr-2" size="1.5rem" />
              Book Consultation
            </Link>
          </div>

          <div className="flex flex-col items-end lg:w-7/12 gap-20">
            <div className="flex flex-wrap justify-center gap-20">
              <div className="h-60 w-60 bg-gb-card-1 shadow-md text-center">
                <h1 className="text-xl font-bold">Tax Planning for Zero Tax</h1>
              </div>
              <div className="h-60 w-60 bg-white text-black shadow-md text-center">
                <h1>Business Setup</h1>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-20">
              <div className="h-60 w-60 bg-white text-black shadow-md text-center">
                <h1>Tax Efficient</h1>
              </div>
              <div className="h-60 w-60 bg-gb-card-1 shadow-md text-center">
                <h1>Investing Financial Planning</h1>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
