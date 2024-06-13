import React from "react";
import AgencyCard from "../Cards/Agency Card/AgencyCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Clients() {
  const clients = [
    {
      name: "Dubai Chamber",
      img: "client-1.jpg",
      link: "https://www.dubaichamber.com/en/home/",
    },

    {
      name: "UAE",
      img: "uae.png",
      link: "https://u.ae/ar/home#/",
    },

    {
      name: "Government of Dubai",
      img: "government-of-dubai.png",
      link: "https://www.dc.gov.ae/PublicServices/Home.aspx?lang=en",
    },

    {
      name: "Digital Dubai",
      img: "digital-dubai.png",
      link: "https://www.digitaldubai.ae/",
    },

    {
      name: "Dubai Courts",
      img: "dubai-courts.png",
      link: "https://www.dc.gov.ae/PublicServices/Home.aspx",
    },

    {
      name: "Dubai Ministry",
      img: "dubai-ministry.png",
      link: "https://www.mofa.gov.ae/en/the-UAE/The-Government",
    },
  ];

  return (
    <section className="mt-24 bg-gb-bg-1 text-white py-12">
      <div>
        <p className="text-center text-5xl mb-10">
          We work closely with{" "}
          <span className="font-bold text-6xl text-gb-yellow">Government Agencies</span>
        </p>
      </div>

      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          568: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="p-4"
      >
        {clients.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <AgencyCard img={item.img} link={item.link} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Clients;
