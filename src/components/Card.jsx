import React from "react";
const Card = ({ icon, title, description }) => {
  return (
    <div className="w-[357px] md:w-[397px] h-auto border-2 border-primary rounded-lg p-4 shadow-lg shadow-primary bg-black dark:bg-white">
      {icon}
      <h2 className="text-primary font-bold text-[20px] mt-4">{title}</h2>
      <p className="text-primary mt-3 font-bold">{description}</p>
    </div>
  );
};

export default Card;
