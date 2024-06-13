import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./index.css";

function Offers() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);

  return (
    <section>
      <div className="offer-heading-container" ref={ref}>
        <motion.h1
          style={{ x, opacity: scrollYProgress }}
          className="offer-heading"
        >
          What We Offer
        </motion.h1>
        <p className="offer-text">
          Let's see what are the services that we offer to our clients.
        </p>
      </div>

      <div className="service-group">
        <div className="service-container">
          <div className="service-heading-container">
            <h2>Business Setup</h2>
          </div>
          <div className="card-group">
            <div className="card">
              <img src="images/freezone.jpg" alt="" />
              Freezone
            </div>

            <div className="card">
              <img src="images/mainland.jpg" alt="" />
              Mainland
            </div>

            <div className="card">
              <img src="images/offshore.jpg" alt="" />
              Offshore
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Offers;
