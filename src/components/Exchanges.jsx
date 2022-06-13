import React from "react";

const Exchanges = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-white dark:text-primaryBlack font-bold text-2xl">Listed on</p>
      </div>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <p className="text-white dark:text-primaryBlack font-bold text-2xl transition duration-75 hover:text-[#F3BA2F] cursor-pointer hover:scale-105">Binance</p>
          <p className="text-white dark:text-primaryBlack font-bold text-2xl transition duration-75 hover:text-[#23AE90] cursor-pointer hover:scale-105">KuCoin</p>
          <p className="text-white dark:text-primaryBlack font-bold text-2xl transition duration-75 hover:text-[#1EC6D4] cursor-pointer hover:scale-105">Pancake</p>
          <p className="text-white dark:text-primaryBlack font-bold text-2xl transition duration-75 hover:text-[#03CA9B] cursor-pointer hover:scale-105">BitFinex</p>
          <p className="text-white dark:text-primaryBlack font-bold text-2xl transition duration-75 hover:text-[#E90271] cursor-pointer hover:scale-105">Uniswap</p>
          <p className="text-white dark:text-primaryBlack font-bold text-2xl transition duration-75 hover:text-[#2483FF] cursor-pointer hover:scale-105">Huobi</p>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
