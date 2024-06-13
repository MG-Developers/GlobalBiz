import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Hero2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [gsapReady, setGsapReady] = useState(false);

  const textArr = ["Zero % Tax", "Business Expansion", "Financial Planning"];

  const slidesRef = useRef([]);

  const slides = [
    { src: "images/img3.jpg", alt: "Image 1" },
    { src: "images/img2.jpg", alt: "Image 2" },
    { src: "images/img4.jpg", alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setGsapReady(true);
  }, []);

  useGSAP(() => {
    if (!gsapReady) return;

    const currentSlide = slidesRef.current[activeIndex];

    gsap.set(currentSlide, { scale: 1, opacity: 0 });

    gsap.to(currentSlide, {
      scale: 1.15,
      duration: 5,
      ease: "linear",
      opacity: 0.75,
    });
    gsap.to(currentSlide, {
      opacity: 0,
      duration: 0.5,
      delay: 4.5,
    });
  }, [activeIndex, gsapReady]);

  return (
    <div className="relative bg-black w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          ref={(element) => (slidesRef.current[index] = element)}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute w-4/5 top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          Your Gateway To
        </h1>
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-gb-yellow uppercase">
          {textArr[activeIndex]}
        </span>

        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mt-8">
          Designed for UHNIs
          <span className="text-gb-yellow text-4xl md:text-6xl lg:text-8xl">
            .
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero2;
