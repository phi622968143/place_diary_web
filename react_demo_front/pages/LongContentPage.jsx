import { useState, useEffect } from "react";
import Introduction from "./components/Introduction";
import LongContent from "./components/LongContent";
import SwitchButton from "./components/SwitchButton";

const LongContentPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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
  return (
    <div>
      <Introduction />
      <SwitchButton />
      <LongContent />
    </div>
  );
};

export default LongContentPage;
