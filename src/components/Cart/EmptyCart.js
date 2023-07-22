import React from "react";
import { EMPTY_CART_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div className="md:w-1/2 mx-auto h-[100vh]">
      <img className="mx-auto" src={EMPTY_CART_URL} />
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col gap-0">
          <div className="font-semibold text-center">Your cart is empty</div>
          <div className="text-center">
            You can go to home page to view more restaurants
          </div>
        </div>
        <button className="border md:p-3 p-1 m-1 border-orange-500 bg-orange-500 text-white" onClick={()=> navigate("/")}>
          See All Restaurant
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
