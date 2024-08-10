import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

const SwitchButton = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [hasData, setHasData] = useState(true);
  const location = useLocation();
  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    const seriesId = searchParams.get("series"); // 新增这一部分
    console.log("Current seriesId:", seriesId);
    if (seriesId) {
      handleSeriesClick(seriesId);
    }
  }, [searchParams]);

  const fetchShorts = (seriesId) => {
    axios
      .get(
        `http://127.0.0.1:8000/${"shorts" || "articles"}/?series=${seriesId}`
      )
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setHasData(true);
          // 处理数据
        } else {
          setHasData(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching shorts:", error);
        setHasData(false);
      });
  };

  const handleSeriesClick = (seriesId) => {
    setSelectedSeries(seriesId);
    fetchShorts(seriesId);
  };

  let longPath;
  let shortPath;
  if (!selectedSeries) {
    longPath = "/long";
    shortPath = "/";
  } else {
    longPath = `/long/?series=${selectedSeries}`;
    shortPath = `/?series=${selectedSeries}`;
  }

  const longLinkStyle = location.pathname.includes("long")
    ? "cursor-default text-stone-400"
    : "cursor-pointer text-black hover:text-stone-400";
  const shortLinkStyle =
    location.pathname === "/"
      ? "cursor-default text-stone-400"
      : "cursor-pointer text-black hover:text-stone-400";

  return (
    <div
      className={`flex gap-4 p-5 ${
        screenWidth < 768 || screenHeight < 500 ? "text-sm" : "text-base"
      } top-4 content-start whitespace-nowrap bg-zinc-300`}
    >
      <Link to={longPath} className={`${longLinkStyle} duration-500 ease-out`}>
        長文
      </Link>
      <Link
        to={shortPath}
        className={`${shortLinkStyle} duration-500 ease-out`}
      >
        短文
      </Link>
    </div>
  );
};

export default SwitchButton;
