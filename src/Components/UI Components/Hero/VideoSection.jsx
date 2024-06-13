import React from "react";
import { Container } from "../Container/Container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function VideoSection() {
  const videoContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="bg-black h-[300vh] text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute h-[150vh] left-0 w-full"
      >
        <video
          muted
          loop
          autoPlay
          className="sticky top-0 h-screen w-full object-cover"
        >
          <source src="videos/video5.mp4" type="video/mp4"></source>
        </video>
      </motion.div>

      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.75 }}
        >
          <div className="flex justify-center">
            <h1 className="mb-10 text-3xl w-8/12 text-center font-normal md:text-5xl">
              Welcome to <span className="text-6xl font-bold">GlobalBizHQ</span>{" "}
              <br />
              Your Gateway to Tax Optimization and Business Expansion!
            </h1>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default VideoSection;
