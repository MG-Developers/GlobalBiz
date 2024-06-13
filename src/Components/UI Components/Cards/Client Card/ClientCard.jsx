import React from "react";

function ClientCard({ img, text, logo, name }) {
  return (
    <div className="relative max-w-xl">
      <img className="rounded-3xl" src={`images/${img}`} />
      <div className="absolute bottom-2 right-2 bg-white max-w-sm p-8 rounded-2xl text-gb-bg-1">
        <p className="text-2xl mb-10 font-medium">“{text}!”</p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-700">{name}</p>

          <img className="w-12" src={`images/${logo}`} />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
