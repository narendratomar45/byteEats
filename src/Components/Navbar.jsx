import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { IoIosSearch } from "react-icons/io";
import user from "../assets/images/user1.jpeg";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className=" flex justify-between items-center px-10  py-2 bg-orange-500 ">
        <div className=" w-16 h-16 rounded-full overflow-hidden">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className=" w-[500px] border border-gray-300 flex  items-center  bg-white rounded px-5 py-2">
          <input
            type="text"
            placeholder="Search for restaurant, dishes"
            className="outline-none w-full text-gray-700 text-sm"
          />
          <IoIosSearch />
        </div>

        {isLoggedIn ? (
          <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-white">
            <img
              src={user}
              alt="userImage"
              className=" w-full h-full object-cover rounded-full"
            />
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <button
                className=" bg-black text-white font-bold px-3 py-1 rounded cursor-pointer"
                onClick={setIsLoggedIn(true)}
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
