import React from "react";

const Card = ({
  borderColor,
  gradientColors,
  textColor,
  shadowColor,
  title,
  content,
}) => {
  return (
    <div
      className={`flex flex-col rounded-lg border ${borderColor} bg-gradient-to-r ${gradientColors} shadow-[rgba(0,_0,_0,_0.4)_20px_30px_120px] ${shadowColor} w-24 justify-center font-serif -my-2 md:my-0`}
    >
      <div
        className={`text-${textColor} py-6 bg-black rounded-t-lg text-center`}
      >
        {title}
      </div>
      <div className="px-2 py-1 rounded-b-lg overflow-auto">
        <div className="text-white text-center">{content}</div>
      </div>
    </div>
  );
};

export default Card;
// html,css javascript,typescript,react,next,tailwind,mongodb
