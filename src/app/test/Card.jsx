import React from "react";
import Image from "next/image";
const Card = ({
  borderColor,
  gradientColors,
  textColor,
  shadowColor,
  imageURL,
  content,
}) => {
  return (
    <div
      className={`flex flex-col rounded-lg border ${borderColor} bg-gradient-to-r ${gradientColors} shadow-[rgba(0,_0,_0,_0.4)_20px_30px_120px] ${shadowColor} w-24 justify-center font-serif -my-2 md:my-0`}
    >
      <div
        className={`text-${textColor} py-6 h-24 bg-black rounded-t-lg text-center flex justify-center items-center`}
      >
        <img
          src={imageURL}
          width={50}
          height={50}
          alt="hello"
          className="hover:scale-110 duration-200"
        />
      </div>
      <div className="px-2 py-1 rounded-b-lg overflow-auto">
        <div className="text-white text-center">{content}</div>
      </div>
    </div>
  );
};

export default Card;
// html,css javascript,typescript,react,next,tailwind,mongodb
