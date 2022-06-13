import React from "react";
import CommunityCard from "./CommunityCard";

import TwitterIcon from "./images/TwitterIcon.png";
import TelegramIcon from "./images/TelegramIcon.png";
import DiscordIcon from "./images/DiscordIcon.png";

const Community = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-end">
        <div className="w-[250px] h-[253px] md:w-[1024px] md:h-[253px] bg-primary blur-[400px] absolute -z-[1]"></div>
      </div>
      <div>
        <div className="flex justify-center">
          <p className="text-white dark:text-primaryBlack text-4xl font-bold">
            Join our{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary dark:from-primaryBlack">
              Community
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-flow-row md:grid-flow-col gap-7 mt-7">
            <CommunityCard value="+1,300,000" name="TWITTER FOLLOWERS" />
            <CommunityCard value="+200,000" name="TELEGRAM FOLLOWERS" />
            <CommunityCard value="+500,000" name="DISCORD USERS" />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-white dark:text-primaryBlack text-center md:w-[689px] p-5">
            Extremely active community that loves our mission and doges! Our
            telegram and discord is filled with community members 24/7 that
            would love to help you. Do not trust random messages of people
            claiming to be “support” or ever give out your wallet info to
            anyone.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-flow-col gap-7">
            <img src={TwitterIcon} alt="TwitterIcon" className="w-10 transition duration-75 hover:scale-125 cursor-pointer" />
            <img src={TelegramIcon} alt="TelegramIcon" className="w-10 transition duration-75 hover:scale-125 cursor-pointer" />
            <img src={DiscordIcon} alt="Discord" className="w-10 transition duration-75 hover:scale-125 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
