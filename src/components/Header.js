import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnlineStatus()

  const clickHandler = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const user = useContext(userContext)

  return (
    <div className="flex items-center justify-between py-2 bg-red-100 shadow-lg px-14">
      <div className="logo-container">
        <img className="w-28 logo" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="px-4">
            Online Status: {isOnline ? '✅' : '🔴'}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            Cart
          </li>
          { isLoggedIn && <li className="px-4 font-bold">{user.userName}</li> }
          <button className="px-4" onClick={clickHandler}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
