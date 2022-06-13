import React from "react";
import Card from "./Card";
import { LibraryIcon, BadgeCheckIcon } from "@heroicons/react/outline";

const WhatIsEthereum = () => {
  return (
    <div className="py-11 w-full">
      <div className="flex justify-center absolute">
        <div className="w-[250px] h-[253px] md:w-[1024px] md:h-[253px] bg-primary blur-[400px] absolute -z-[1]"></div>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white dark:text-primaryBlack text-4xl">What are contracts?</p>
          <p className="text-white dark:text-primaryBlack text-center md:w-[905px] p-5">
            You're probably thinking: "I'm not a lawyer! Why would I care about
            contracts?". For most people, contracts bring to mind needlessly
            long terms and conditions agreements or boring legal documents.
          </p>
          <p className="text-white dark:text-primaryBlack text-center md:w-[905px] p-5">
            Contracts are just agreements. That is, any form of agreement can be
            encapsulated within the conditions of a contract. Verbal agreements
            or pen-and-paper contracts are acceptable for many things, but they
            aren't without flaws.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-flow-row md:grid-flow-col gap-7 mt-7">
            <Card
              icon={<LibraryIcon className="text-primary font-bold w-8" />}
              title="Smart contracts"
              description="Smart contracts digitize agreements by turning the terms of an agreement into computer code that automatically executes when the contract terms are met."
            />
            <Card
              icon={<BadgeCheckIcon className="text-primary font-bold w-8" />}
              title="Automatic execution"
              description="There is no need to wait for a human to execute the result. In other words: smart contracts remove the need for trust."
            />
            <Card
              icon={<BadgeCheckIcon className="text-primary font-bold w-8" />}
              title="Public record"
              description="Smart contracts are also useful for audits and tracking. Since Ethereum smart contracts are on a public blockchain, anyone can instantly track asset transfers and other related information."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsEthereum;
