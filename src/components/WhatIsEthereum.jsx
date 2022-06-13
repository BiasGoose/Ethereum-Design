import React from "react";
import Card from "./Card";
import { LibraryIcon, BadgeCheckIcon } from "@heroicons/react/outline";

const WhatIsEthereum = () => {
  return (
    <div className="py-20 w-full">
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-4xl dark:text-primaryBlack">What is Ethereum?</p>
        <p className="text-white dark:text-primaryBlack text-center md:w-[689px] p-5">
          Ethereum is open access to digital money and data-friendly services
          for everyone – no matter your background or location. It's a
          community-built technology behind the cryptocurrency ether (ETH) and
          thousands of applications you can use today.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-flow-row md:grid-flow-col gap-7 mt-7">
          <Card
            icon={<LibraryIcon className="text-primary font-bold w-8" />}
            title="Banking for everyone"
            description="Not everyone has access to financial services. But all you need to
              access Ethereum and its lending, borrowing and savings products is
              an internet connection."
          />
          <Card
            icon={<BadgeCheckIcon className="text-primary font-bold w-8" />}
            title="A more private internet"
            description="You don't need to provide all your personal details to use an Ethereum app. Ethereum is building an economy based on value, not surveillance."
          />
          <Card
            icon={<BadgeCheckIcon className="text-primary font-bold w-8" />}
            title="Censorship-resistant"
            description="No government or company has control over Ethereum. This decentralization makes it nearly impossible for anyone to stop you from receiving payments or using services on Ethereum.            "
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsEthereum;
