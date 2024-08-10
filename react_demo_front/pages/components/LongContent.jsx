import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import long from "./db.json";

const LongContent = () => {
  //const longPost = long.long;
  const [longPosts, setLongPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [hasData, setHasData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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
  const handleMinHeight = screenWidth < 768 || screenHeight < 500;
  useEffect(() => {
    const seriesId = searchParams.get("series");
    console.log("Current seriesId:", seriesId);
    if (seriesId) {
      fetchShorts(seriesId);
    } else {
      fetchAllShorts();
    }
  }, [searchParams]);

  const fetchAllShorts = () => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/articles/")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setLongPosts(response.data);
          setHasData(true);
        } else {
          setHasData(false);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching all shorts:", error);
        setHasData(false);
        setIsLoading(false);
      });
  };

  const fetchShorts = (seriesId) => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/articles/?series=${seriesId}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setLongPosts(response.data);
          setHasData(true);
        } else {
          setHasData(false);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shorts:", error);
        setHasData(false);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div className="text-center p-4">正在加載數據...</div>;
  }

  if (!hasData) {
    return (
      <div className="text-center p-4 text-red-500">
        沒有找到相關的數據。請嘗試其他系列或返回主頁。
      </div>
    );
  }
  return (
    <div
      className="flex flex-col items-center p-12 bg-zinc-300"
      style={{ minHeight: handleMinHeight ? "70vh" : "76vh" }}
    >
      {longPosts.map((longs) => (
        <Link
          key={longs.id}
          to={`${longs.id}`}
          className={`flex ${
            screenWidth < 768 || screenHeight < 500 ? "flex-col" : "flex-row"
          } gap-1 px-3.5 py-1.5 mt-2 w-11/12 bg-gray-200 rounded`}
        >
          <div className="flex flex-col flex-1 p-2.5">
            <div
              className={`${
                screenWidth < 768 || screenHeight < 500
                  ? "text-base"
                  : "text-xl"
              } border-0 border-solid border-black border-opacity-40`}
            >
              {longs.title}
            </div>
            <div
              className={`mt-1 ${
                screenWidth < 768 || screenHeight < 500 ? "text-xs" : "text-sm"
              } `}
            >
              {longs.timestamp}
            </div>
            <div
              className={`mt-1 ${
                screenWidth < 768 || screenHeight < 500
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              {longs.content.substring(0, 40) + "..."}
            </div>
          </div>
          {longs.image != null && (
            <img src={longs.image} width={"150px"} height={"150px"} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default LongContent;
