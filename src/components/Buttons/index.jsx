import React from "react";
const index = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold text-red-900 rounded-lg group bg-gradient-to-br from-primary to-primary group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-primary focus:outline-none">
        <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
          {children}
        </span>
      </button>
    </div>
  );
};

export default index;
