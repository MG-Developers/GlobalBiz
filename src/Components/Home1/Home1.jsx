import React from "react";
import Hero from "../UI Components/Hero/Hero";
import Hero2 from "../UI Components/Hero/Hero2";
import Services from "../Sections/Services/Services";
import Clients from "../UI Components/Clients/Clients";
import FAQs from "../UI Components/FAQs/FAQs";
import WhyUs from "../Sections/Why Us/WhyUs";
import Client from "../Sections/Client/Client";

function Home1() {
  return (
    <>
      {/* <Hero /> */}
      <Hero2 />
      <Services />
      <WhyUs />
      <Client />
      <Clients />
      <FAQs />
    </>
  );
}

export default Home1;
