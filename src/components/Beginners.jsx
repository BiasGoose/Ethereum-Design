import React from "react";
import Smartphone from "./images/smartphone.png";
import Binoculars from "./images/Binoculars.png";
import Roadmap from "./images/Roadmap.png";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

const Beginners = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-flow-row md:grid-flow-col gap-7">
        <div className="w-[357px] md:w-[397px] h-auto  rounded-lg p-4  bg-primary">
          <div className="flex justify-center">
            <img src={Smartphone} alt="smartphone" />
          </div>
          <h2 className="text-black font-bold text-base mt-4">
            Ethereum Wallet
          </h2>
          <div className="flex items-center mt-3 space-x-2">
            <p className="text-black font-bold text-2xl">Create a Wallet</p>
            <ArrowCircleRightIcon className="w-6 transition duration-75 hover:scale-125 cursor-pointer" />
          </div>
        </div>
        <div className="w-[357px] md:w-[397px] h-auto  rounded-lg p-4  bg-primary">
          <div className="flex justify-center">
            <img src={Binoculars} alt="smartphone" />
          </div>
          <h2 className="text-black font-bold text-base mt-4">
            Ethereum Explorer
          </h2>
          <div className="flex items-center mt-3 space-x-2">
            <p className="text-black font-bold text-2xl">Open the Explorer</p>
            <ArrowCircleRightIcon className="w-6 transition duration-75 hover:scale-125 cursor-pointer" />
          </div>
        </div>
        <div className="w-[357px] md:w-[397px] h-auto rounded-lg p-4  bg-primary">
          <div className="flex justify-center">
            <img src={Roadmap} alt="smartphone" width="160px" />
          </div>
          <h2 className="text-black font-bold text-base mt-4">2023 Roadmap</h2>
          <div className="flex items-center mt-3 space-x-2">
            <p className="text-black font-bold text-2xl">Our path Forward</p>
            <ArrowCircleRightIcon className="w-6 transition duration-75 hover:scale-125 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beginners;
