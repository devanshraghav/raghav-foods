import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/Redux/cartSlice";
import CartCard from "../CartCard";
import { BsArrowRightSquareFill } from "react-icons/bs";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalPrice);
  const dispacth = useDispatch();
  const emptyCart = () => {
    dispacth(clearCart());
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div>No item in Cart</div>
      ) : (
        <>
          <div className="shadow-md mt-4 container mx-auto md:px-4 py-4 md:w-2/3">
            <h1 className="font-bold text-2xl">Restaurant Name</h1>

            <div className="flex justify-between mt-3 px-1">
              <h1 className="font-semibold text-xl">Items Added</h1>
              <button
                className="font-semibold text-md md:hidden"
                onClick={() => {
                  emptyCart();
                }}
              >
                Clear All
              </button>
            </div>
            <div className="mt-2 container mx-auto md:px-4 mb-4">
              {cartItems.map((item) => {
                return <CartCard data={item} key={item.newItem.id} />;
              })}
            </div>
            <button className="md:hidden w-full hover:bg-orange-500 border border-orange-500 flex p-3 justify-between items-center text-orange-400 hover:text-blac text-sm font-semibold  rounded-md">
              <div className="flex items-center gap-2">
                PROCEED TO PAY <BsArrowRightSquareFill />{" "}
              </div>
              <div className="p-1 w-28">₹ {totalAmount}</div>
            </button>

            <div className="hidden md:flex h-14 justify-around  mx-auto gap-10 w-9/12 font-font-semibold lg:text-lg md:text-sm text-orange-400">
              <button
                className=" hover:bg-orange-500 border border-spacing-2 border-orange-500 hover:text-white   w-1/2"
                onClick={() => {
                  emptyCart();
                }}
              >
                Clear Cart
              </button>
              <button className=" p-4 hover:bg-orange-500 flex border border-orange-500 items-center hover:text-white  w-1/2">
                <div className="flex items-center gap-2">
                  PROCEED TO PAY <BsArrowRightSquareFill />{" "}
                </div>
                <div className="p-1 w-28">₹ {totalAmount}</div>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
