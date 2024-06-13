import React from "react";
import { Link } from "react-router-dom";

import Accordion from "../UI Components/Accordion/Accordion";
import Testinomials from "../Sections/Testinomials/Testinomials";

import Hero from "../Sections/Hero/Hero";
import Client from "../Sections/Client/Client";
import WhyUs from "../Sections/Why Us/WhyUs";

import { GoArrowUpRight } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

function Home() {
  const questions = [
    {
      title: "What services do you offer?",
      content:
        "We offer a range of services including tax optimization, business setup assistance, and investment guidance tailored for high-net-worth individuals. Read more about it here.",
    },

    {
      title: "What is your refund policy?",
      content:
        "We offer a full refund within 30 days of purchase if you are not satisfied with our services. Please contact our support team for assistance.",
    },

    {
      title: "How do I update my account information?",
      content:
        "You can update your account information by logging into your account on our website and navigating to the 'Account Settings' section.",
    },

    {
      title: " How do I get started with Enterprise Formation?",
      content:
        "To get started, simply contact us for a consultation. We will guide you through every step of establishing your new business.",
    },

    {
      title: "What is Capital Navigation?",
      content:
        "Capital Navigation offers strategic guidance to help you navigate and maximize investment opportunities.",
    },

    {
      title: "What is Elite Taxation?",
      content:
        "Elite Taxation involves tailored tax strategies designed specifically for high-net-worth individuals to minimize their tax liabilities.",
    },

    {
      title: "What does Corporate Concierge service include?",
      content:
        "Our Corporate Concierge service provides dedicated assistance for all your corporate needs, from administrative tasks to complex business solutions.",
    },
  ];

  const services = [
    {
      img: "y-tax-icon.svg",
      title: "Tax Optimization",
      text: "Strategic financial planning to minimize tax liabilities by expertly channeling funds, ensuring zero to minimum payable tax.",
    },

    {
      img: "y-investment-icon.svg",
      title: "Investment Crafting",
      text: "Maximize returns and manage risk with our tailored investment crafting service, ensuring zero tax liability on capital gains through strategic asset allocation.",
    },

    {
      img: "y-business-icon.svg",
      title: "Business Setup",
      text: "Comprehensive process of establishing a new business, including planning, registration, and operational structuring.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="bg-gb-bg-1 lg:pt-12 lg:pb-24 md:pt-8 md:pb-16 pt-4 pb-8 text-white">
        <div className="mx-auto w-11/12">
          <div className="flex flex-col items-center">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium text-center lg:my-8 my-4 leading-tight">
              Services We <span className="text-gb-yellow">Offer.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-y-0 grid-cols-1 gap-y-20 items-start gap-x-10 lg:mt-16 mt-10">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    className="xl:w-32 lg:w-28 w-28 mb-8"
                    src={`images/${item.img}`}
                  />
                  <p className="xl:text-4xl md:text-3xl text-2xl font-medium text-gb-yellow">
                    {item.title}
                  </p>
                  <p className="xl:text-lg text-base lg:w-full max-w-lg lg:mt-6 mt-4 text-gb-gray-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 lg:my-10 my-4">
        <WhyUs />
        <div className="mx-auto w-11/12 text-gb-bg-1">
          <div className="flex flex-col items-center lg:mb-20 mb-12">
            <p className="xl:text-4xl lg:text-3xl text-2xl font-semibold leading-normal text-center">
              As a UAE-based company, we offer expert local knowledge and
              tailored service with a global perspective.
            </p>
          </div>

          {/* <div className="flex justify-center lg:mb-28 mb-16">
            <div className="relative xl:w-3/4 w-11/12 flex justify-center">
              <img
                src="images/whyus-m-img2.jpg"
                className="rounded-2xl object-cover"
              />
              <div className="absolute lg:top-4 lg:left-4 top-2 left-2 bg-gb-bg-1 text-white marker:text-gb-yellow lg:p-4 p-2 rounded-lg md:flex hidden">
                <div className="flex flex-col justify-center">
                  <ul className="list-disc px-4">
                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Administrative Hurdles
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Navigating Bureaucracy
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Regulatory & Legal Issues
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Market Differences
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Financial Challenges
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Operational Issues
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="absolute lg:top-4 lg:right-4 top-2 right-2 bg-gb-bg-1 text-white marker:text-gb-yellow lg:p-4 p-2 rounded-lg md:flex hidden">
                <div>
                  <ul className="list-disc px-4">
                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Political & Economic Risks
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Market Entry Strategy
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Intellectual Property Protection
                      </p>
                    </li>

                    <li className="mt-2">
                      <p className="lg:text-lg text-sm font-bold">
                        Technological Integration
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex justify-center lg:mb-28 mb-16">
            <div className="relative grid md:grid-cols-2 grid-cols-1 gap-y-12 gap-x-10">
              <div className="flex flex-col lg:gap-y-4 md:gap-y-3 gap-y-2 bg-gb-bg-1 text-white xl:px-8 lg:px-6 px-4 py-8 rounded-3xl">
                <div>
                  <p className="xl:text-4xl md:text-3xl text-2xl font-bold">
                    Say{" "}
                    <span className="text-gb-red xl:text-5xl md:text-4xl text-3xl">
                      No
                    </span>{" "}
                    To
                  </p>
                </div>

                <div className="grid grid-rows-5 lg:gap-y-6 md:gap-y-4 gap-y-2 lg:mt-4 mt-2 md:text-base text-sm">
                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Administrative Hurdles</p>
                    </div>

                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Political & Economic Risks</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Navigating Bureaucracy</p>
                    </div>

                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Market Entry Strategy</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Regulatory & Legal Issues</p>
                    </div>

                    <div className="flex items-center">
                      <ImCross
                        size={26}
                        className="mr-2 text-gb-red text-4xl"
                      />
                      <p>Intellectual Property Protection</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Market Differences</p>
                    </div>

                    {/* <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Technological Integration</p>
                    </div> */}
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <ImCross size={26} className="mr-2 text-gb-red" />
                      <p>Financial Challenges</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:gap-y-4 md:gap-y-3 gap-y-2 xl:px-8 lg:px-6 px-4 py-8 rounded-3xl border-2 border-slate-200 shadow-lg shadow-slate-300">
                <div>
                  <p className="xl:text-4xl md:text-3xl text-2xl text-2xl font-bold">
                    Say{" "}
                    <span className="text-gb-green xl:text-5xl md:text-4xl text-3xl">
                      Yes
                    </span>{" "}
                    To
                  </p>
                </div>

                <div className="grid grid-rows-5 lg:gap-y-6 md:gap-y-4 gap-y-2 lg:mt-4 mt-2 md:text-base text-sm">
                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Streamlined Processes</p>
                    </div>

                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Risk Mitigation</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Efficient Compliance</p>
                    </div>

                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Strategic Market Entry</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Expert Legal Solutions</p>
                    </div>

                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Intellectual Property Security</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Seamless Operations</p>
                    </div>

                    {/* <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Advanced Tech Solutions</p>
                    </div> */}
                  </div>

                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex items-center">
                      <FaCheck size="28px" className="mr-2 text-gb-green" />
                      <p>Financial Optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-3 lg:gap-y-24 md:gap-y-16 gap-y-4">
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 grid-cols-1 xl:w-3/4 w-11/12 md:items-center items-start">
                <div className="relative">
                  <img
                    src="images/img6.jpg"
                    className="rounded-2xl object-cover md:w-4/5 w-full"
                  />
                </div>

                <div className="flex flex-col justify-center gap-y-4 md:mt-0 mt-10">
                  <div>
                    <p className="lg:text-3xl text-2xl font-semibold">
                      Elite Taxation
                    </p>
                    <p className="max-w-md lg:text-xl text-lg mt-4 leading-relaxed text-gray-500 font-normal">
                      Our strategies help you make a big hand and save 100% tax.
                    </p>
                  </div>

                  <hr className="lg:my-4 my-2" />

                  <div className="mt-2 text-base">
                    <ul>
                      <li className="flex items-center">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Global Tax Solutions
                        </p>
                      </li>

                      <li className="flex items-center mt-4">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">Estate Planning</p>
                      </li>

                      <li className="flex items-center mt-4">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Wealth Preservation
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 grid-cols-1 xl:w-3/4 w-11/12 md:items-center items-start">
                <div className="flex flex-col justify-center gap-y-4 md:order-1 order-2">
                  <div>
                    <p className="lg:text-3xl text-2xl font-medium">
                      Wealth Amplification
                    </p>
                    <p className="max-w-md lg:text-xl text-lg mt-8 leading-relaxed text-gray-500 font-normal">
                      Maximize wealth through strategic investments into
                      diversified markets, delivering exceptional returns.
                    </p>
                  </div>

                  <hr className="lg:my-4 my-2" />

                  <div className="mt-2 text-base">
                    <ul>
                      <li className="flex items-center">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Reinvest Saved Funds Wisely
                        </p>
                      </li>

                      <li className="flex items-center mt-4">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Maximum Returns
                        </p>
                      </li>

                      <li className="flex items-center mt-4">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Dedicated Long Term Growth
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end md:order-2 order-1">
                  <img
                    src="images/testinomial-2.jpg"
                    className="rounded-2xl object-cover md:w-11/12 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 grid-cols-1 xl:w-3/4 w-11/12 md:items-center items-start">
                <div className="relative">
                  <img
                    src="images/whyus-img2.jpg"
                    className="rounded-2xl object-cover md:w-4/5 w-full"
                  />
                </div>

                <div className="flex flex-col justify-center gap-y-4 md:mt-0 mt-10">
                  <div>
                    <p className="lg:text-3xl text-2xl font-semibold">
                      Business Expansion
                    </p>
                    <p className="max-w-md lg:text-xl text-lg mt-4 leading-relaxed text-gray-500 font-normal">
                      Our team of seasoned professionals guides you through
                      every step of your business journey.
                    </p>
                  </div>

                  <hr className="lg:my-4 my-2" />

                  <div className="mt-2 text-base">
                    <ul>
                      <li className="flex items-center">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Strategic Growth Planning
                        </p>
                      </li>

                      <li className="flex items-center mt-4">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          CFO Services
                        </p>
                      </li>

                      <li className="flex items-center mt-4">
                        <IoIosCheckmarkCircle
                          size="1.75rem"
                          className="mr-2 text-gb-yellow"
                        />
                        <p className="font-medium text-base">
                          Business Advisory
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:mt-28 mt-16">
            <div className="relative xl:w-3/4 w-11/12">
              <img
                src="images/whyus-m-img1.jpg"
                className="rounded-2xl object-cover"
              />
              <div className="absolute lg:top-4 top-3 lg:right-4 right-3 md:flex hidden">
                <div className="flex flex-col justify-center lg:gap-y-8 gap-y-3">
                  <div className="bg-white rounded-lg lg:p-4 p-2 shadow-lg shadow-current opacity-90">
                    <p className="lg:text-2xl text-xl font-semibold">
                      1. Easy Landing
                    </p>

                    <p className="lg:max-w-xs max-w-56 lg:text-base text-sm lg:mt-2 mt-0 leading-relaxed text-gray-500 font-medium">
                      We handle administrative tasks, ensuring smooth paperwork
                      and optimal office locations.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg lg:p-4 p-2 shadow-lg shadow-current opacity-90">
                    <p className="lg:text-2xl text-xl font-semibold">
                      2. Business Setup
                    </p>

                    <p className="lg:max-w-xs max-w-56 lg:text-base text-sm lg:mt-2 mt-0 leading-relaxed text-gray-500 font-medium">
                      We provide strategic guidance for expanding into new
                      online and offline markets.
                    </p>
                  </div>

                  {/* <div className="bg-white rounded-lg lg:p-4 p-2 shadow-lg shadow-current opacity-90">
                    <p className="lg:text-2xl text-xl font-semibold">
                      3. Tailored Technology
                    </p>

                    <p className="lg:max-w-xs max-w-56 lg:text-base text-sm lg:mt-2 mt-0 leading-relaxed text-gray-500 font-medium">
                      Our tech team creates custom software solutions tailored
                      to your business, enhancing your digital presence
                      alongside physical operations.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Client /> */}

      {/* <Testinomials /> */}

      <section className="lg:py-10 md:py-8 py-6">
        <div className="mx-auto w-11/12 text-gb-bg-1">
          <div className="lg:mt-10 md:mt-4 mt-2 md:max-w-lg max-w-md">
            <p className="md:text-2xl text-xl text-gray-700 font-semibold">
              FAQs
            </p>
            <p className="md:text-5xl md:text-4xl text-3xl font-semibold md:my-8 my-4 leading-tight">
              Your questions answered
            </p>
          </div>

          <div className="flex md:justify-end justify-center mt-4">
            <Accordion questions={questions} />
          </div>
        </div>
      </section>

      <section className="lg:py-10 md:py-6 py-4 lg:mb-10 md:mb-6 mb-4">
        <div className="mx-auto w-11/12">
          <p className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-semibold max-w-2xl leading-relaxed text-bg-gb-bg-1">
            Expand your business with{" "}
            <span className="xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-bold text-black border-b-4 border-gb-yellow">
              GlobalBi
              <span className="text-gb-yellow xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-bold">
                z
              </span>
              HQ
            </span>
            .
          </p>

          <p className="mt-4 mb-8 md:text-lg text-base font-medium text-gray-700">
            At GlobalBizHQ, we are committed to pushing the boundaries of what's
            possible.
          </p>

          <Link
            to="/contact"
            className="flex items-center justify-between md:w-40 w-36 md:text-lg text-sm hover:text-black bg-gb-yellow text-gb-bg-1 font-bold rounded-full py-3 px-6"
          >
            Reach Out <GoArrowUpRight size="1.2rem" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
