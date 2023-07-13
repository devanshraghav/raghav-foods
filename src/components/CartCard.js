import {
  incrementQuantity,
  decrementQuantity,
} from "../utils/Redux/cartSlice";
import { useDispatch } from "react-redux";

import { Image_CDN_Url } from "../constants";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();
  const increment = (data) => {
    dispatch(incrementQuantity(data));
  };
  const decrement = (data) => {
    dispatch(decrementQuantity(data));
  };
  return (
    <>
      <div className="flex justify-between my-4">
        <div className="flex">
          <div className="w-32">
            <img src={Image_CDN_Url + data.newItem.imageId} />
          </div>
          <div>
            <h1 className="px-2 ">{data.newItem.name}</h1>
            <h1 className="px-2">{data.newItem.price / 100}</h1>
          </div>
        </div>

        {/* Main right side div starts */}
        <div className="">
          <div>
            <div className="flex my-2 mr-2 shadow-lg rounded-md p-1 w-28">
              <button
                onClick={() => decrement(data.newItem.id)}
                className="w-1/3  font-semibold  hover:bg-gray-50"
              >
                -
              </button>
              <h1 className="w-1/3 text-center">
                {/* item should exist to have a quantity */}
                {0 > -1 ? data && data.quantity : 0}
              </h1>
              <button
                onClick={() => increment(data.newItem.id)}
                className="w-1/3 font-semibold hover:bg-gray-50"
              >
                +
              </button>
            </div>
            <h1 className="text-center pr-2 my-2">
              {(data.quantity * data.newItem.price) / 100}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
