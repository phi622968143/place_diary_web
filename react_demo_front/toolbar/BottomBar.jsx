import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaMusic } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";
import { IoArchive, IoAddCircle } from "react-icons/io5";

const BottomBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const bottomBarStyle =
    screenWidth < 768 || screenHeight < 500 ? "flex flex-row" : "hidden";
  const bottomBarHeight =
    screenWidth < 768 || screenHeight < 500 ? "10vh" : "0";
  const homeButtonStyle =
    location.pathname === "/"
      ? "cursor-default bg-white text-gray-900"
      : "cursor-pointer bg-gray-900 text-white";
  const uploadButtonStyle =
    location.pathname === "/uploadshort"
      ? "cursor-default bg-white text-gray-900"
      : "cursor-pointer bg-gray-900 text-white";

  return (
    <div
      className={`fixed inset-x-0 bg-gray-900 p-0 text-white bottom-0 ${bottomBarStyle} w-screen z-10`}
    >
      <ul className="mt-0 flex flex-row justify-around w-full">
        <li>
          <NavLink
            className={`px-4 my-0 py-2 ${homeButtonStyle} duration-200 hover:bg-white hover:text-gray-900 rounded-lg text-center text-xl flex flex-row`}
            to="/"
          >
            <FaHome className="size-5" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-center text-xl flex flex-row px-4 my-0 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-lg"
            to="/"
          >
            <PiBooksFill className="size-5" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`px-4 my-0 py-2 ${uploadButtonStyle} duration-200 hover:bg-white hover:text-gray-900 rounded-lg text-center text-xl flex flex-row`}
            to="/uploadshort"
          >
            <IoAddCircle className="size-7" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-4 my-0 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-lg text-center text-xl flex flex-row"
            to="/"
          >
            <IoArchive className="size-5" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-4 my-0 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-lg text-center text-xl flex flex-row"
            to="/"
          >
            <FaMusic className="size-5" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
