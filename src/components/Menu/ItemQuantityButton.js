import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { additem, removeItem , incrementQuantity, decrementQuantity } from "../../utils/Redux/cartSlice";
import { useSelector } from "react-redux";

const ItemQuantityButton = ({ data }) => {
  const [index, setIndex] = useState(-1);
  const [foodQuantity, setFoodQuantity] = useState();
  const dispatch = useDispatch();
  const addFoodItem = (data, quantity) => {
    let newItem = { data };
    newItem = {
      ...data,
      quantity: 1,
    };
    dispatch(additem({ newItem, quantity }));
  };
  const reduceFoodItem = (data, quantity) => {
    dispatch(removeItem({ data, quantity }));
  };

  const increment = (data,quantity) =>{
    dispatch(incrementQuantity(data));
  }
  const decrement = (data,quantity) =>{
    dispatch(decrementQuantity(data));
  }

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const itemFound = cartItems.findIndex(
      (item) => item.newItem.name === data.name
    );
    setIndex(itemFound);
  }, [cartItems]);
  return (
    <>
      {cartItems.length <= 0 || index < 0 ? (
        <button
          onClick={() => addFoodItem(data, 1)}
          className="w-full p-1 shadow-lg text-center font-semibold  rounded-md"
        >
          Add
        </button>
      ) : (
        <div className="flex shadow-lg rounded-md p-1">
          <button
            onClick={() => decrement(data.id, 1)}
            className="w-1/3  font-semibold  hover:bg-gray-50"
          >
            -
          </button>
          <h1 className="w-1/3 text-center">
            {/* item should exist to have a quantity */}
            {index > -1 ? cartItems[index] && cartItems[index].quantity : 0}
          </h1>
          <button
            onClick={() => increment(data.id, 1)}
            className="w-1/3 font-semibold hover:bg-gray-50"
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default ItemQuantityButton;
