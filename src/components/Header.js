import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser)

  //  Subscribing to the Store using ->Selector 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 max-w-6xl mx-auto">

        <img
          src={LOGO_URL}
          alt="App Logo"
          className="w-20 h-20 object-cover rounded-full border-4 border-[#FC8019] shadow-md mb-3 md:mb-0"
        />

        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-[16px] font-medium">
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link className="hover:text-[#FC8019] transition" to="/">Home</Link></li>
          <li><Link className="hover:text-[#FC8019] transition" to="/about">About Us</Link></li>
          <li><Link className="hover:text-[#FC8019] transition" to="/contact">Contact Us</Link></li>
          <li><Link className="hover:text-[#FC8019] transition " to="/cart">🛒({cartItems.length})</Link></li>
          <li><Link className="hover:text-[#FC8019] transition" to="/grocery">Grocery</Link></li>
          <li>
            <button
              className="bg-[#FC8019] hover:bg-[#e66f0b] text-white px-4 py-1 rounded-lg transition"
              onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            >
              {btnName}
            </button>
          </li>

          {btnName === "Logout" && (
            <li className="flex items-center gap-2 text-gray-800 font-semibold bg-gray-100 px-3 py-1 rounded-full shadow-sm">
              <span className="text-[#FC8019] text-lg">👤</span>
              <span>{loggedInUser}</span>
            </li>
          )}



        </ul>
      </div>
    </div>
  );
};

export default Header;
