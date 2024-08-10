import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const UploadSwitchButton = () => {
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

  const longUploadStyle =
    location.pathname === "/uploadlong"
      ? "cursor-default text-red-400"
      : "cursor-pointer text-black hover:text-red-400";
  const shortUploadStyle =
    location.pathname === "/uploadshort"
      ? "cursor-default text-red-400"
      : "cursor-pointer text-black hover:text-red-400";
  return (
    <div
      className={`flex gap-4 p-5 ${
        screenWidth < 768 || screenHeight < 500 ? "text-sm" : "text-base"
      } content-start whitespace-nowrap bg-orange-100`}
    >
      <Link
        to="/uploadlong"
        className={`${longUploadStyle} duration-500 ease-out`}
      >
        長文
      </Link>
      <Link
        to="/uploadshort"
        className={`${shortUploadStyle} duration-500 ease-out`}
      >
        短文
      </Link>
    </div>
  );
};

export default UploadSwitchButton;
