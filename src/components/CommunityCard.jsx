import React from "react";

const CommunityCard = ({ value, name }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary dark:from-primaryBlack">
        {value}
      </span>
      <p className="font-bold text-white dark:text-primaryBlack">{name}</p>
    </div>
  );
};

export default CommunityCard;
