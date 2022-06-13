import React from "react";
import Logo from "./images/Logo.svg";

import TwitterIcon from "./images/TwitterIcon.png";
import TelegramIcon from "./images/TelegramIcon.png";
import DiscordIcon from "./images/DiscordIcon.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-start py-6 md:justify-between md:space-x-10">
          <div className="mt-8">
            <div className="hidden md:flex flex-col">
              <div className="flex justify-start lg:flex-1 items-center space-x-2 cursor-pointer">
                <a href="/#">
                  <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                </a>
                <h1 className="text-white dark:text-primaryBlack">Ethereum</h1>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row md:grid-flow-col gap-10 mt-7">
            <div className="flex flex-col items-start">
              <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-primary dark:from-primaryBlack">
                Use Ethereum
              </span>
              <div className="mt-2 space-y-2">
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Ethereum Wallets
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Get ETH
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Dapps
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Layer 2
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Run a node
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-primary dark:from-primaryBlack">
                Developers
              </span>
              <div className="mt-2 space-y-2">
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Get started
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Documentation
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Tutorials
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Learn by coding2
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Set up local environment
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-primary dark:from-primaryBlack">
                Ecosystem
              </span>
              <div className="mt-2 space-y-2">
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Community hub
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Ethereum Foundation
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Ethereum Foundation Blog
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Ecosystem Support Program
                </p>
                <p className="text-white dark:text-primaryBlack transition duration-100 hover:text-primary cursor-pointer">
                  Devcon
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className="grid grid-flow-col gap-7">
            <img
              src={TwitterIcon}
              alt="TwitterIcon"
              className="w-10 transition duration-75 hover:scale-125 cursor-pointer"
            />
            <img
              src={TelegramIcon}
              alt="TelegramIcon"
              className="w-10 transition duration-75 hover:scale-125 cursor-pointer"
            />
            <img
              src={DiscordIcon}
              alt="Discord"
              className="w-10 transition duration-75 hover:scale-125 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
