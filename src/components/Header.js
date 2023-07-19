import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from "../assets/logo.png";
import { useContext, useState } from "react";
import UserContext from "../utils/Context/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const length = cartItems.reduce((total, item) => (total += item.quantity), 0);

  return (
    <div className="flex justify-around shadow-md md:text-lg">
      <a href="/">
        <img className="h-28 p-2" src={Logo} />
      </a>
      <div>
        <ul className="flex py-10 md:gap-6">
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/cart">Cart - {length}</Link>
          </li>
          {isLoggedIn ? (
        <>
          <span className="hidden md:block">{user.name}</span>{" "}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <>
          <span className="py-10">{user.name}</span>{" "}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
