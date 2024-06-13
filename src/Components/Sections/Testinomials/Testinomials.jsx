import React from "react";
import ClientCard from "../../UI Components/Cards/Client Card/ClientCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Testinomials() {
  const clients = [
    {
      img: "testinomial-1.jpg",
      name: "Pratik Gauri",
      logo: "5ire.png",
      text: "Working with the GlobalBizHQ has been a breeze from start to finish! Not only was it easy to use, but the design — I am truly blown away",
    },

    {
      img: "testinomial-2.jpg",
      name: "Mira Rai",
      logo: "5ire.png",
      text: "Working with the GlobalBizHQ has been a breeze from start to finish! Not only was it easy to use, but the design — I am truly blown away",
    },

    {
      img: "testinomial-1.jpg",
      name: "Rahul Taneja",
      logo: "5ire.png",
      text: "Working with the GlobalBizHQ has been a breeze from start to finish! Not only was it easy to use, but the design — I am truly blown away",
    },

    {
      img: "testinomial-2.jpg",
      name: "Kale Doe",
      logo: "5ire.png",
      text: "Working with the GlobalBizHQ has been a breeze from start to finish! Not only was it easy to use, but the design — I am truly blown away",
    },
  ];

  return (
    <section className="bg-gb-bg-1 text-white py-20">
      <div className="mx-auto max-w-screen-xl text-white">
        <div>
          <p className="text-gb-yellow text-2xl font-medium">Testimonials</p>
          <p className="text-5xl mt-10 mb-20">
            See what our clients are saying
          </p>
        </div>

        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            568: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          {clients.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ClientCard
                  img={item.img}
                  name={item.name}
                  logo={item.logo}
                  text={item.text}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testinomials;
