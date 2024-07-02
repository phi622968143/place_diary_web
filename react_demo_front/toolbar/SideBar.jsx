import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaMusic } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";
import { IoArchive, IoAddCircle } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const SideBar = () => {
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
  const sideBarStyle =
    screenWidth < 768 || screenHeight < 500 ? "hidden" : "flex";
  const textVisible = screenWidth < 992 ? "hidden" : "block";
  const iconSize = screenWidth < 992 ? "size-8" : "size-10";
  const homeButtonStyle =
    location.pathname === "/"
      ? "cursor-default bg-white text-gray-900"
      : "cursor-pointer bg-gray-900 text-white";
  const uploadButtonStyle =
    location.pathname === "/uploadshorton"
      ? "cursor-default bg-white text-gray-900"
      : "cursor-pointer bg-gray-900 text-white";

  return (
    <div
      className={`fixed bg-gray-900 p-4 text-white left-0 ${sideBarStyle} flex-col h-screen w-2/12`}
    >
      <div className="ms-4 text-white block items-center">
        <NavLink to="/">
          <span className="ms-1 text-4xl">Place</span>
        </NavLink>
      </div>
      <hr className="my-3" />
      <ul className="mt-2 flex flex-col">
        <li>
          <NavLink
            className={`px-4 my-2 py-2 ${homeButtonStyle} duration-200 hover:bg-white hover:text-gray-900 rounded-2xl text-center  text-xl flex flex-row`}
            to="/"
          >
            <FaHome className={`${iconSize}`} />
            <span className={`ms-2 text-2xl ${textVisible}`}>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-4 my-2 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-2xl text-center text-xl flex flex-row"
            to="/"
          >
            <PiBooksFill className={`${iconSize}`} />
            <span className={`ms-2 text-2xl ${textVisible}`}>Intro</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`px-4 my-2 py-2 ${uploadButtonStyle} duration-200 hover:bg-white hover:text-gray-900 rounded-2xl text-center text-xl flex flex-row`}
            to="/uploadshort"
          >
            <IoAddCircle className={`${iconSize}`} />
            <span className={`ms-2 text-2xl ${textVisible}`}>Add</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-4 my-2 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-2xl text-center text-xl flex flex-row"
            to="/"
          >
            <IoArchive className={`${iconSize}`} />
            <span className={`ms-2 text-2xl ${textVisible}`}>Archive</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-4 my-2 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-2xl text-center text-xl flex flex-row"
            to="/"
          >
            <FaMusic className={`${iconSize}`} />
            <span className={`ms-2 text-2xl ${textVisible}`}>Music</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-4 my-2 py-2 text-white duration-200 hover:bg-white hover:text-gray-900 rounded-2xl text-center text-xl flex flex-row"
            to="/"
          >
            <CiSettings className={`${iconSize}`} />
            <span className={`ms-2 text-2xl ${textVisible}`}>Setting</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
