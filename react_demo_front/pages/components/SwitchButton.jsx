import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SwitchButton = () => {
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

  const longLinkStyle =
    location.pathname === "/"
      ? "cursor-pointer text-stone-400 hover:text-black"
      : "cursor-default text-black";
  const shortLinkStyle =
    location.pathname === "/"
      ? "cursor-default text-black"
      : "cursor-pointer text-stone-400 hover:text-black";

  return (
    <div className="flex gap-4 p-5 text-sm top-4 content-start whitespace-nowrap bg-zinc-300">
      <Link to="/long" className={`${longLinkStyle} duration-500 ease-out`}>
        長文
      </Link>
      <Link to="/" className={`${shortLinkStyle} duration-500 ease-out`}>
        短文
      </Link>
    </div>
  );
};

export default SwitchButton;
