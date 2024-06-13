import React from "react";
import Accordion from "../Accordion/Accordion";
import "./index.css";

function FAQs() {
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
    <section className="mt-24 pb-10">
      <div className="faq-heading-container">
        <h1 className="faq-heading">Frequently asked questions</h1>
        <p className="faq-text">
          Everything you need to know about GlobalBizHQ.
        </p>
      </div>
      <div className="flex justify-center">
        <Accordion questions={questions} />
      </div>
    </section>
  );
}

export default FAQs;
