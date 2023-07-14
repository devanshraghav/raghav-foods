import React from "react";

const ResMenuShimmer = () => {
  return (
    <div className="border-2 border-gray-200 rounded m-5  bg-gradient-to-r from-gray-300 to-gray-200">
      <div className="loader-element bg-gray-200 h-5 max-w-xs m-5"></div>
      <div className="loader-element bg-gray-200 h-5 w-1/4 m-5 mt-1"></div>
      <div className="loader-element bg-gray-200 h-10 max-w-xl m-5"></div>
    </div>
  );
};

export default ResMenuShimmer;
