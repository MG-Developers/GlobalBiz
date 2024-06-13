import React from "react";

function AgencyCard({ img, link }) {
  return (
    <div>
      <div className="flex items-center bg-white justify-center rounded-lg shadow-md text-white mx-1">
        <a target="_blank" href={link}>
          <img className="w-52 h-32 p-2" src={`images/${img}`} />
        </a>
      </div>
    </div>
  );
}

export default AgencyCard;
