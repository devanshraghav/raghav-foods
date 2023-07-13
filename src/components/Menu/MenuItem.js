import React from "react";
import ItemQuantityButton from "./ItemQuantityButton";

const MenuItem = ({ data }) => {
  return (
    <>
      <div className="flex justify-between py-4 border-b-2">
        <div>
          <h1 className="text-base font-bold text-gray-700">{data.name}</h1>
          <h1 className="text-sm">₹{data.price / 100}</h1>
          <h1 className="w-full lg:w-4/5 text-sm my-4 text-gray-400">
            {data.description}
          </h1>
        </div>
        <div className="">
          {data.imageId && (
            <div className="w-32">
              <img
                className="w-full rounded-md"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  data.imageId
                }
              />
              <ItemQuantityButton data={data}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuItem;
