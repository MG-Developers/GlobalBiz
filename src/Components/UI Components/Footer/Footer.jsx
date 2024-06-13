import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <section className="mt-4 lg:py-8 md:py-6 py-4 bg-gb-bg-1 text-white">
      <div className="container w-11/12 mx-auto md:mb-20 mb-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:justify-items-center justify-items-start">
          <div className="md:mt-10 mt-8">
            <img className="xl:w-52 lg:w-48 w-44 mb-8" src="images/logo-3.svg" />
            <div>
              <a
                className="text-gb-gray-3 lg:text-base text-sm font-medium"
                target="_blank"
                href="mailto:INFO@GLOBALBIZHQ.com"
              >
                <div className="flex items-center">
                  <IoMdMail size="1.2rem" className="mr-2" />
                  <span className="text-gb-yellow decoration-gb-yellow lowercase underline-offset-4 hover:underline hover:ease-in-out hover:duration-500">
                    INFO@GLOBALBIZHQ.com
                  </span>
                </div>
              </a>
            </div>

            {/* <div className="mt-6">
              <a
                className="text-gb-gray-3 lg:text-base text-sm font-medium"
                target="_blank"
                href="tel:+971 9098764890:"
              >
                <div className="flex items-center">
                  <FaPhoneAlt size="1.2rem" className="mr-2" />
                  <span className="text-gb-yellow decoration-gb-yellow underline-offset-4 hover:underline hover:ease-in-out hover:duration-500">
                    +971 9098764890
                  </span>
                </div>
              </a>
            </div> */}
          </div>

          <div className="mt-10">
            <p className="md:mb-8 mb-6 uppercase font-semibold lg:text-xl text-lg text-gb-yellow">
              Company
            </p>
            <ul className="list-none text-gb-gray-3">
              <li className="mb-4 hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-4 hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="mb-4 hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="md:mb-8 mb-6 uppercase font-semibold lg:text-xl text-lg text-gb-yellow">
              Support
            </p>
            <ul className="list-none text-gb-gray-3">
              <li className="mb-4 hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
              {/* <li className="mb-4 hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer">
                Documentation
              </li>
              <li className="mb-4 hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer">
                Community
              </li> */}
            </ul>
          </div>

          <div className="mt-10">
            <p className="md:mb-8 mb-6 uppercase font-semibold lg:text-xl text-lg text-gb-yellow">
              Social
            </p>
            <ul className="flex list-none text-gb-gray-3 mb-4">
              <li className="mr-4">
                <Link
                  to="https://www.facebook.com/share/6CoN9xqMXzJUhySN/?mibextid=LQQJ4d"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer"
                >
                  <FaFacebookF />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://www.instagram.com/globalbizhq"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer"
                >
                  <FaInstagram />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://x.com/globalbizhq"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer"
                >
                  <FaXTwitter />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://www.linkedin.com/company/globalbizhq"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer "
                >
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>

            {/* <ul className="flex list-none text-gb-gray-3">
              <li className="mr-4">
                <Link
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer "
                >
                  <FaWhatsapp />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer "
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <hr className="border-gb-gray-3" />

      <div className="container w-full lg:w-11/12 xl:w-11/12 mx-auto px-8 mt-4 md:mt-16 text-gb-gray-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-8 md:mb-0">Copyright &copy; 2024 - GlobalBizHQ</p>
          <Link
            to="/contact"
            style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
            className="flex items-center justify-center w-full md:w-1/3 lg:w-1/4 xl:w-1/4 font-bold rounded-full py-3 px-6 border-1 border-gb-yellow text-gb-gray-3 hover:duration-500 hover:bg-gb-yellow hover:text-black"
          >
            Start Your Business
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;