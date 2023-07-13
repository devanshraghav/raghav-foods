import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/Redux/cartSlice";
import CartCard from "../CartCard";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispacth = useDispatch();
  const emptyCart = () => {
    dispacth(clearCart())
  }
  return (
    <>
      {cartItems.length === 0 ? (
        <div>No item in Cart</div>
      ) : (
        <div className="bg-gray-50 my-4 container mx-auto px-4 py-4 w-1/2">
          <h1 className="font-bold text-2xl">Restaurant Name</h1>

          <div className="flex justify-between mt-3">
            <h1 className="font-semibold text-xl">Items Added</h1>
            <button className="font-semibold text-md" onClick={()=> {emptyCart()}} >Clear All</button>
          </div>
          <div className="mt-2 container mx-auto px-4 mb-4">
            {cartItems.map((item) => {
              return <CartCard data={item} key={item.newItem.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
