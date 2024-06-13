import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./index.css";

const Slider = () => {
  return (
    <section>
      <Carousel
        autoPlay
        autoFocus
        stopOnHover={false}
        interval={5000}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        animationHandler="fade"
        swipeable={false}
        transitionTime={1000}
        className="home-carousel"
      >
        <div>
          <video muted loop autoPlay>
            <source src="videos/video3.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div>
          <video muted loop autoPlay>
            <source src="videos/video2.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div>
          <video muted loop autoPlay>
            <source src="videos/video1.mp4" type="video/mp4"></source>
          </video>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
