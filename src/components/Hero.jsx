import React from "react";

const Hero = () => {
  return (
    <div className="w-full py-20">
      <div className="flex justify-center z-10">
        <div className="w-[250px] h-[253px] md:w-[1024px] md:h-[253px] bg-primary blur-[186px] absolute -z-[1]"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white dark:text-primaryBlack text-4xl font-bold">
          Welcome to{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary dark:from-primaryBlack">
            Etheruem
          </span>
        </p>
        <p className="text-white dark:text-primaryBlack text-center md:w-[455px] mt-7 text-base">
          Ethereum is the community-run technology powering the cryptocurrency
          ether (ETH) and thousands of decentralized applications.
        </p>
        <button className="bg-primary px-5 py-2 mt-7 rounded-lg border-2 border-primaryBlack font-bold text-primaryBlack dark:bg-white dark:text-primary dark:border-primary duration-150 hover:bg-primaryBlack hover:text-primary dark:hover:bg-primary dark:hover:text-primaryBlack">Explore Etheruem</button>
      </div>
    </div>
  );
};

export default Hero;
