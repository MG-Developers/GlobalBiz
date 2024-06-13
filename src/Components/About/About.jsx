import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <>
      <section className="bg-gb-bg-1 text-white md:py-16 py-10">
        <div className="mx-auto w-11/12">
          <div className="flex flex-col items-center">
            <div className="flex md:flex-row flex-col">
              <h1 className="xl:text-6xl md:text-5xl text-4xl font-semibold md:mr-4 mr-0">
                <span className="text-gb-yellow">About</span> us.
              </h1>

              <AvatarGroup size="lg" className="md:mt-0 mt-6" isBordered>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </AvatarGroup>
            </div>
            <p className="max-w-xl lg:text-xl md:text-lg text-base text-center mt-10 text-gb-gray-3">
              At GlobalBizHQ, we are committed to pushing the boundaries of
              what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:mt-20 mt-8">
            <img
              className="self-end md:justify-self-start justify-self-center md:mt-0 mt-8 rounded-3xl w-4/5"
              src="images/about1.jpg"
            />
            <img
              className="justify-self-center md:mt-0 mt-8 rounded-3xl w-4/5"
              src="images/about2.jpg"
            />
            <img
              className="md:justify-self-end justify-self-center md:mt-0 mt-8 rounded-3xl w-4/5"
              src="images/about3.jpg"
            />
          </div>

          <div className="md:mt-20 mt-16">
            <p className="lg:text-2xl md:text-xl text-base text-gb-yellow font-semibold">
              About
            </p>
            <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold mt-8 leading-normal">
              At GlobalBizHQ, we are committed to pushing the boundaries of
              what's possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-20 md:mt-16 mt-12">
            <div className="border-t border-gb-yellow lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                $ 10M
              </p>
              <p className="md:mt-8 mt-4 xl:text-lg md:text-base text-sm text-gb-yellow">
                Taxes Saved Till Date
              </p>
            </div>

            <div className="border-t border-gb-yellow lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                100%
              </p>
              <p className="md:mt-8 mt-4 lg:text-lg md:text-base text-sm text-gb-yellow">
                Satisfaction Guarantee
              </p>
            </div>

            <div className="border-t border-gb-yellow lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                #1
              </p>
              <p className="md:mt-8 mt-4 lg:text-lg md:text-base text-sm text-gb-yellow">
                Rated agency
              </p>
            </div>

            <div className="border-t border-gb-yellow lg:py-10 md:py-8 py-4">
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                100%
              </p>
              <p className="md:mt-8 mt-4 lg:text-lg md:text-base text-sm text-gb-yellow">
                Client retention
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:py-16 lg:py-12 py-10 text-bg-gb-bg-1">
        <div className="mx-auto w-11/12">
          <div>
            <p className="xl:text-2xl md:text-xl text-lg font-medium lg:mb-8 mb-6 text-gray-600">
              Values
            </p>
            <p className="max-w-lg xl:text-5xl md:text-4xl text-2xl leading-tight font-medium">
              Core values that guide our business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 xl:mt-16 lg:mt-12 mt-10">
            <div>
              <img className="xl:w-32 md:w-28 w-24" src="images/tax-icon.svg" />
              <p className="mt-4 lg:text-3xl md:text-2xl text-xl font-medium">
                Tax Optimization
              </p>
              <p className="md:mt-4 mt-2 lg:text-lg md:text-base text-sm font-medium text-gray-700">
                Our strategies help you make a big hand and save 100% tax.
              </p>
            </div>

            <div>
              <img
                className="xl:w-32 md:w-28 w-24"
                src="images/business-icon.svg"
              />
              <p className="mt-4 lg:text-3xl md:text-2xl text-xl font-medium">
                Business Setup
              </p>
              <p className="md:mt-4 mt-2 lg:text-lg md:text-base text-sm font-medium text-gray-700">
                Maximize wealth through strategic investments into diversified
                markets, delivering exceptional returns.
              </p>
            </div>

            <div>
              <img
                className="xl:w-32 md:w-28 w-24"
                src="images/investment-icon.svg"
              />
              <p className="mt-4 lg:text-3xl md:text-2xl text-xl font-medium">
                Investment Crafting
              </p>
              <p className="md:mt-4 mt-2 lg:text-lg md:text-base text-sm font-medium text-gray-700">
                Our team of seasoned professionals guides you through every step
                of your business journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="bg-gb-bg-1 text-white p-28 mx-auto max-w-screen-xl rounded-3xl">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-gb-yellow mb-10">Timeline</p>
            <p className="text-5xl font-semibold mb-8">How we got here</p>
          </div>

          <div
            style={{ gridTemplateColumns: "1fr 40px 1fr" }}
            className="grid mt-16 gap-16"
          >
            <div className="flex justify-between">
              <p className="text-xl text-gb-yellow">Start</p>
              <p className="text-2xl font-medium">January 2020</p>
            </div>

            <div></div>

            <div>
              <p className="text-lg text-gb-gray-3 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <img className="rounded-3xl" src="images/tl-1.jpg" />

              <button className="text-gb-yellow mt-8">Learn more</button>
            </div>
          </div>

          <div
            style={{ gridTemplateColumns: "1fr 40px 1fr" }}
            className="grid mt-16 gap-16"
          >
            <div className="flex justify-between">
              <p className="text-xl text-gb-yellow">Merger</p>
              <p className="text-2xl font-medium">March 2022</p>
            </div>

            <div></div>

            <div>
              <p className="text-lg text-gb-gray-3 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <img className="rounded-3xl" src="images/tl-1.jpg" />

              <button className="text-gb-yellow mt-8">Learn more</button>
            </div>
          </div>

          <div
            style={{ gridTemplateColumns: "1fr 40px 1fr" }}
            className="grid mt-16 gap-16"
          >
            <div className="flex justify-between">
              <p className="text-xl text-gb-yellow">Now</p>
              <p className="text-2xl font-medium">July 2023</p>
            </div>

            <div></div>

            <div>
              <p className="text-lg text-gb-gray-3 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <img className="rounded-3xl" src="images/tl-1.jpg" />

              <button className="text-gb-yellow mt-8">Learn more</button>
            </div>
          </div>
        </div>
      </section> */}

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

export default About;
