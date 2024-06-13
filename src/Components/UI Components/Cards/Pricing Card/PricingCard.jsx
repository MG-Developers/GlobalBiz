import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function PricingCard({ name, title, price, listItems, bg, textColor }) {
  return (
    <div
      className={`mx-auto bg-${bg} text-${textColor} p-12 rounded-3xl`}
    >
      <p className="text-4xl font-medium">{name}</p>
      <p
        className={`mt-10 text-xl font-normal ${
          bg === "gb-bg-1" ? "text-gb-gray-3" : "text-gray-600"
        } `}
      >
        {title}
      </p>
      <div className="mt-10 flex justify-between items-end">
        <p className="text-5xl font-medium">${price}k</p>
        <p
          className={`font-normal text-gb-gray-3 ${
            bg === "gb-bg-1" ? "text-gb-gray-3" : "text-gray-600"
          }`}
        >
          / Payed Once
        </p>
      </div>

      <hr className="my-10 border-gb-gray-3" />

      <ul>
        {listItems.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex items-center text-lg font-normal mt-6 ${
                bg === "gb-bg-1" ? "text-gb-gray-3" : "text-gb-bg-1"
              }`}
            >
              <IoIosCheckmarkCircle
                size="2rem"
                className={`mr-2  ${
                  bg === "gb-bg-1" ? "text-gb-yellow" : "text-gb-bg-1"
                }`}
              />
              {item}
            </li>
          );
        })}
      </ul>

      <div className="mt-16 flex justify-center">
        <Link
          to="/pricing"
          style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
          className={`flex items-center justify-center w-full font-bold rounded-xl py-4 px-6 border-1 border-gb-yellow ${
            bg === "gb-bg-1" ? "text-gb-gray-3" : "text-gray-600"
          } hover:duration-500 hover:bg-gb-yellow hover:text-black`}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default PricingCard;
