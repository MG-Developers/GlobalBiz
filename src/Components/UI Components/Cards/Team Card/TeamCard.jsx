import React from "react";

function TeamCard({ name, image, post }) {
  return (
    <div className="flex flex-col items-center bg-gb-bg-1 py-12 px-16 text-white rounded-lg">
      <div className="flex justify-center border-2 rounded-full border-gb-yellow">
        <img className="rounded-full w-52" src="images/rahul.png" />
      </div>

      <div className="mt-8">
        <p className="text-xl font-bold uppercase">Rahul Taneja</p>
      </div>

      <div className="mt-4">
        <p className="text-base uppercase">CEO</p>
      </div>
    </div>
  );
}

export default TeamCard;
