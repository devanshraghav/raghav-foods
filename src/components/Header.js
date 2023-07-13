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
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <a href="/">
        <img className="h-28 p-2" src={Logo} />
      </a>
      <h1 className="py-10">{isOnline ? "🟢" : "🔴"}</h1>
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li> */}
          <Link to="/cart">
            <li className="px-2">Cart - {length} items</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <>
          <span className="py-10">{user.name}</span>{" "}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
