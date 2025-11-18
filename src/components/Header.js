import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Headroom from "react-headroom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  const onlineStatus = useOnlineStatus();
  return (
    <Headroom>
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logoContainer">
        <img className="w-25" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅": "❌"}</li>
          <li className="px-4">
          <Link to ="/">Home</Link>
          </li>
          <li className="px-4">
          <Link to ="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to ="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button 
          className="login"
          onClick={() => {
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
    </Headroom>
  )
}
export default Header;