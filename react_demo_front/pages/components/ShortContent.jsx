import { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import short from "./db.json";

const ShortContent = () => {
  //const shortPost = short.short;
  const [message, setMessage] = useState("");
  const [shortPost, setShortPost] = useState([]);
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
      .get("http://127.0.0.1:8000/shorts/")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setShortPost(response.data);
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
      .get(`http://127.0.0.1:8000/shorts/?series=${seriesId}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setShortPost(response.data);
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
    <>
      <div
        className="flex flex-col items-center p-12 bg-zinc-300"
        style={{ minHeight: handleMinHeight ? "70vh" : "76vh" }}
      >
        <Grid
          templateColumns={`${
            screenWidth < 768 ? "repeat(2, 1fr)" : "repeat(5, 1fr)"
          }`}
          gap={6}
        >
          {shortPost.map((shorts) => (
            <GridItem key={shorts.id}>
              <div className="justify-center p-2.5 bg-white rounded">
                {shorts.content}
              </div>
            </GridItem>
          ))}
        </Grid>
        <div
          className={`${
            screenWidth < 768 || screenHeight < 500 ? "10vh" : "0"
          }`}
        ></div>
      </div>
      {!hasData && (
        <div className="text-red-500">沒有找到相關的數據。請嘗試其他系列。</div>
      )}
    </>
  );
};

export default ShortContent;
