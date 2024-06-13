import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Accordion from "../UI Components/Accordion/Accordion";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Service() {
  const questions = [
    {
      title: "How can I contact you for more information?",
      content:
        "You can contact us via email at info@globalbizhq.com or call us at +971 9098764890. We also have a contact form on our website.",
    },

    {
      title: "What is GlobalBizHQ?",
      content:
        "GlobalBizHQ is a comprehensive platform that supports businesses at every stage, from incorporation and compliance to growth strategies and international expansion.",
    },

    {
      title: "How does GlobalBizHQ assist with international expansion?",
      content:
        "GlobalBizHQ provides tools and services for market research, compliance, strategic planning, and logistics to help your business expand successfully into new markets.",
    },

    {
      title: "Do you offer personalized consultations?",
      content:
        "Yes, we offer personalized consultations to understand your unique needs and tailor our services accordingly. Please contact us to schedule a consultation.",
    },

    {
      title: "What makes your services different from others?",
      content:
        "Our services are distinguished by our commitment to personalized attention, transparency, and comprehensive support at every stage of your financial journey. Our team of seasoned professionals ensures you receive expert guidance tailored to your specific needs.",
    },

    {
      title: "How do I get started with your services?",
      content:
        "Simply contact us via email, phone, or our website to discuss your needs. We will guide you through the process and help you choose the best services for your goals.",
    },
  ];

  return (
    <>
      <section className="text-white bg-gb-bg-1 xl:py-32 lg:py-28 md:py-20 py-10">
        <div className="mx-auto w-11/12">
          <div className="flex md:flex-row flex-col md:items-start items-center">
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-medium mr-6">
              Services We <span className="text-gb-yellow">Offer.</span>
            </h1>
            {/* <AvatarGroup className="md:mt-0 mt-8" size="lg" isBordered>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </AvatarGroup> */}
          </div>

          <div className="mt-6">
            <p className="text-gb-gray-3 xl:text-xl lg:text-lg md:text-base text-sm md:text-left text-center font-normal max-w-xl leading-normal">
              Expert tax optimization, business growth, and fund management to
              help your business thrive. Partner with us for tailored solutions
              and maximized profits.
            </p>
          </div>

          {/* <div className="flex md:justify-start justify-center">
            <button className="mt-8 text-black lg:text-lg md:text-base text-sm font-normal rounded-lg bg-gb-yellow lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 hover:bg-white hover:duration-1000 hover:ease-in-out">
              Follow Us
            </button>
          </div> */}
        </div>
      </section>

      <section className="md:py-10 py-4">
        <div className="mx-auto w-11/12 text-gb-bg-1">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 md:gap-y-0 gap-x-0 gap-y-8 lg:mt-14 md:mt-12 mt-8">
            <div className="relative">
              <img src="images/service1.jpg" className="rounded-2xl" />
            </div>

            <div className="flex flex-col justify-center lg:gap-y-4 gap-y-2">
              <div>
                <p className="lg:text-4xl md:text-3xl text-2xl font-medium">
                  Tax Optimization.
                </p>
                <p className="max-w-md lg:text-xl md:text-lg text-base lg:mt-8 md:mt-6 mt-4 leading-relaxed text-gray-500 font-normal">
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
                    <p className="font-medium text-base">Wealth Preservation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 md:gap-y-0 gap-x-0 gap-y-8 lg:my-28 md:my-20 my-16">
            <div className="flex flex-col justify-center lg:gap-y-4 gap-y-2 md:order-1 order-2">
              <div>
                <p className="lg:text-4xl md:text-3xl text-2xl font-medium">
                  Investment Crafting.
                </p>
                <p className="max-w-md lg:text-xl md:text-lg text-base lg:mt-8 md:mt-6 mt-4 leading-relaxed text-gray-500 font-normal">
                  Maximize wealth through strategic investments into diversified
                  markets, delivering exceptional returns.
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
                    <p className="font-medium text-base">Maximum Returns</p>
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

            <div className="relative justify-self-end md:order-2 order-1">
              <img src="images/service3.jpg" className="rounded-2xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 md:gap-y-0 gap-x-0 gap-y-8 lg:mt-28 md:mt-20 mt-16">
            <div className="relative">
              <img src="images/service2.jpg" className="rounded-2xl" />
            </div>

            <div className="flex flex-col justify-center lg:gap-y-4 gap-y-2">
              <div>
                <p className="lg:text-4xl md:text-3xl text-2xl font-medium">
                  Business Expansion.
                </p>
                <p className="max-w-md lg:text-xl md:text-lg text-base lg:mt-8 md:mt-6 mt-4 leading-relaxed text-gray-500 font-normal">
                  Our team of seasoned professionals guides you through every
                  step of your business journey.
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
                    <p className="font-medium text-base">Business Advisory</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}

export default Service;
