import React, { useEffect, useMemo, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { countries } from "./countries";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  const countryItems = useMemo(() => {
    return countries.map((item) => (
      <SelectItem
        key={item.name}
        startContent={
          <Avatar
            alt="Argentina"
            className="w-6 h-6"
            src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
          />
        }
      >
        {item.name}
      </SelectItem>
    ));
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");

  const raiseQuery = (e) => {
    e.preventDefault();

    const queryObj = {
      firstName,
      lastName,
      email,
      phone,
      nationality,
      query,
      description,
    };
    console.log(queryObj);
  };

  useEffect(() => {
    setGsapReady(true);
  }, []);

  const [gsapReady, setGsapReady] = useState(false);

  useGSAP(() => {
    if (!gsapReady) return;

    gsap.from("#contact-details", {
      x: -100,
      duration: 1,
      ease: "power1.inOut",
      opacity: 0,
    });
  }, [gsapReady]);

  return (
    <>
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-24 bg-gb-bg-1">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-white">
          <div id="contact-details" className="w-full md:w-1/2">
            <p className="text-lg uppercase font-bold">
              <span className="border-b-3 border-gb-yellow">Reach</span> out to
              us
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-relaxed">
              Headquartered in <br />
              Dubai, UAE
            </h1>

            <p className="uppercase text-base font-bold text-gb-gray-3 mt-8">
              <span className="border-b-3 border-gb-yellow">Visit</span> Us
            </p>
            <p className="mt-4">
              One Central 8th and 9th Floor, Trade Centre, Trade Centre 2, Dubai
              - UAE
            </p>

            <p className="uppercase text-base font-bold text-gb-gray-3 mt-8">
              <span className="border-b-3 border-gb-yellow">Email</span> Us
            </p>

            <div className="mt-4">
              <a
                href="mailto:INFO@GLOBALBIZHQ.com"
                target="_blank"
                className="font-bold text-gb-yellow"
              >
                <span className="text-gb-yellow lowercase decoration-gb-yellow underline-offset-4 hover:underline hover:ease-in-out hover:duration-500">
                  INFO@GLOBALBIZHQ.com
                </span>
              </a>
            </div>

            <p className="uppercase text-base font-bold text-gb-gray-3 mt-8">
              <span className="border-b-3 border-gb-yellow mt-4">Follow</span>{" "}
              Us
            </p>

            <ul className="flex list-none text-gb-gray-3 mt-6">
              <li className="mr-4">
                <Link
                  to="https://www.facebook.com/share/6CoN9xqMXzJUhySN/?mibextid=LQQJ4d"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer "
                >
                  <FaFacebookF />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://www.instagram.com/globalbizhq"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer "
                >
                  <FaInstagram />
                </Link>
              </li>

              <li className="mr-4">
                <Link
                  to="https://x.com/globalbizhq"
                  style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
                  className="p-2 inline-block border-1 border-gb-yellow rounded-full hover:ease-in-out hover:duration-500 hover:text-white cursor-pointer "
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
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            {/* Map Box */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20347.527427137786!2d55.28610121815047!3d25.22155291595918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432d6a37d4bf%3A0x315c77c169e5a12d!2sWeWork%20-%20Office%20Space%20%26%20Coworking!5e0!3m2!1sen!2sin!4v1718302044243!5m2!1sen!2sin"
              className="w-full h-full"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="mt-4 py-12 bg-white text-black">
        <form id="queryForm" onSubmit={raiseQuery}>
          <div className="container flex flex-col items-center lg:w-4/5 w-full mx-auto px-4 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-bold text-center">
              Contact Us <span className="text-gb-yellow">Now!</span>
            </h1>

            <p className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">
              Drop by our office for a chat and have a cup of coffee (on us!).
            </p>

            <div className="flex flex-col items-center mt-10 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4 mb-4">
                <Input
                  isRequired
                  type="text"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
                <Input
                  isRequired
                  type="text"
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4 mb-4">
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />

                <Input
                  isRequired
                  type="text"
                  label="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4 mb-4">
                <Select
                  label="Nationality"
                  isRequired
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                >
                  {countryItems}
                </Select>

                <Select
                  label="How can we help?"
                  isRequired
                  onChange={(e) => setQuery(e.target.value)}
                  errorMessage={"You must select your query."}
                >
                  <SelectItem key="Tax Consultation">
                    Tax Consultation
                  </SelectItem>

                  <SelectItem key="Business Setup">Business Setup</SelectItem>

                  <SelectItem key="Finance Consulatation">
                    Finance Consultation
                  </SelectItem>
                </Select>
              </div>
              <div className="w-full mb-4">
                <Textarea
                  label="Description"
                  placeholder="Enter your description"
                  minRows={8}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex w-full mt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full w-2/5 hover:text-gb-bg-1 bg-gb-yellow text-black font-bold rounded-full px-8 py-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
