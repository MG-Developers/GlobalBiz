import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Accordion from "../UI Components/Accordion/Accordion";
import PricingCard from "../UI Components/Cards/Pricing Card/PricingCard";

function Pricing() {
  const pricingDetails = [
    {
      name: "Human Capital",
      title:
        "People are your greatest asset. Let's empower, engage, and evolve together.",
      price: "20",
      listItems: [
        "Talent Management Strategies",
        "Organizational Culture Change",
        "Leadership Development Programs",
      ],
      bg: "white",
      textColor: "gb-bg-1",
    },

    {
      name: "Operational",
      title:
        "Maximize efficiency and uncover the potential within your operations.",
      price: "15",
      listItems: [
        "Supply Chain Optimization",
        "Process Redesign",
        "Cost Reduction Strategies",
      ],
      bg: "gb-bg-1",
      textColor: "gb-yellow",
    },

    {
      name: "IT",
      title: "Harness the power of technology and innovate for the future.",
      price: "10",
      listItems: [
        "Digital Transformation",
        "Systems Integration",
        "IT Security Assessments",
      ],
      bg: "white",
      textColor: "gb-bg-1",
    },
  ];

  const questions = [
    {
      title: "Do I need to be a US citizen to work with GlobalBizHQ?",
      content:
        "No, you don't! We work with entrepreneurs from around the world to get their businesses incorporated. Don't take our word for it, though; check out our TrustPilot Page to hear what people globally have to say about doola.",
    },

    {
      title: "What information do you need from me to get started?",
      content:
        "We don't need any documents to get started. We just need a few pieces of info from you",
    },

    {
      title: "What is an EIN?",
      content:
        "An Employer Identification Number is the tax identification number for your organization and a requirement of many banks or institutions (such as the IRS) to carry out business in the US. Once your EIN is acquired, you can apply for business bank accounts and payment gateways. Learn more about the full process.",
    },

    {
      title: "What is an ITIN?",
      content:
        "An Individual Tax Identification Number (ITIN) can be used as an alternative for a Social Security Number (SSN) in some cases and is not a requirement in most cases. However, you will be required to have one if you wish to apply for a PayPal account or certain bank accounts. We walk you through how this process looks like in our guide!",
    },

    {
      title: "What is an EIN?",
      content:
        "An Employer Identification Number is the tax identification number for your organization and a requirement of many banks or institutions (such as the IRS) to carry out business in the US. Once your EIN is acquired, you can apply for business bank accounts and payment gateways. Learn more about the full process.",
    },

    {
      title: "Do I need to be a US citizen to work with GlobalBizHQ?",
      content:
        "No, you don't! We work with entrepreneurs from around the world to get their businesses incorporated. Don't take our word for it, though; check out our TrustPilot Page to hear what people globally have to say about doola.",
    },
  ];

  return (
    <>
      <section className="text-white bg-gb-bg-1 py-32">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex">
            <h1 className="text-7xl font-medium mr-6">
              <span>Pricing</span> plans we{" "}
              <span className="text-gb-yellow">offer.</span>
            </h1>
            <AvatarGroup size="lg" isBordered>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </AvatarGroup>
          </div>

          <div className="mt-6">
            <p className="text-gb-gray-3 text-xl font-normal max-w-lg leading-normal">
              Sign up to our newsletter and be the first to get notified when
              new product features drop.
            </p>

            <button className="mt-8 text-black text-lg font-normal rounded-lg bg-gb-yellow px-8 py-4 hover:bg-white hover:duration-1000 hover:ease-in-out">
              Follow Us
            </button>
          </div>
        </div>
      </section>

      <section className="mt-16 text-gb-bg-1">
        <div className="mx-auto px-4 py-10 grid grid-cols-3 gap-x-4">
          {pricingDetails.map((item) => {
            return (
              <PricingCard
                name={item.name}
                title={item.title}
                price={item.price}
                listItems={item.listItems}
                bg={item.bg}
                textColor={item.textColor}
              />
            );
          })}
        </div>
      </section>

      <section className="py-10 mb-10">
        <div className="mx-auto max-w-screen-xl text-gb-bg-1">
          <div className="mt-10 max-w-lg">
            <p className="text-2xl text-gray-700 font-semibold">FAQs</p>
            <p className="text-5xl font-semibold my-8 leading-tight">
              Your questions answered
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <Accordion questions={questions} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
