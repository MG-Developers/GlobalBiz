import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function App({ questions }) {
  const itemClasses = {
    title: "font-semibold md:text-lg text-base",
    content: "text-slate-500 font-normal mb-2 md:text-base text-sm",
    indicator: "text-color-black md:text-2xl text-xl",
  };

  return (
    <Accordion className="lg:w-3/5 md:w-4/5 w-full" itemClasses={itemClasses}>
      {questions.map((item, index) => {
        return (
          <AccordionItem
            indicator={({ isOpen }) =>
              isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />
            }
            key={index}
            aria-label={`Accordion ${index}`}
            title={item.title}
            disableIndicatorAnimation
          >
            {item.content}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
