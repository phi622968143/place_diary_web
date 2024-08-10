import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SortComponent = () => {
  const [message, setMessage] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [series, setSeries] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);

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
  //   let description = document.getElementById("description");
  //   if (description.length > 70) {
  //     description = description.substring(0, 70) + "...";
  //   }
  const handleMinHeight = screenWidth < 768 || screenHeight < 500;
  useEffect(() => {
    // 获取所有系列
    axios
      .get("http://127.0.0.1:8000/series/")
      .then((response) => {
        setSeries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching series:", error);
      });
  }, []);
  const fetchShorts = (seriesId) => {
    axios
      .get(`http://127.0.0.1:8000/shorts/?series=${seriesId}`)
      .then((response) => {
        setShorts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shorts:", error);
      });
  };

  const handleSeriesClick = (seriesId) => {
    setSelectedSeries(seriesId);
    fetchShorts(seriesId);
  };

  return (
    <div
      className="flex flex-col items-center p-12 bg-zinc-300"
      style={{ minHeight: handleMinHeight ? "95vh" : "100vh" }}
    >
      {series.map((serie) => (
        <Link
          className={`flex ${
            screenWidth < 768 || screenHeight < 500 ? "flex-col" : "flex-row"
          } cursor-pointer gap-1 px-3.5 py-1.5 mt-2 w-11/12 bg-gray-200 rounded`}
          key={serie.id}
          onClick={() => handleSeriesClick(serie.id)}
          to={`/?series=${serie.id}`}
        >
          <div className="flex flex-col flex-1 p-2.5">
            <div className="text-2xl border-0 border-solid border-black border-opacity-40">
              {serie.title}
            </div>
            <div
              className={`${
                screenWidth < 768 || screenHeight < 500 ? "text-xs" : "text-sm"
              } border-0 border-solid border-black border-opacity-40`}
            >
              {serie.postDate}
            </div>
            <div
              id="description"
              className={`mt-1 ${
                screenWidth < 768 || screenHeight < 500
                  ? "text-xs"
                  : "text-base"
              }`}
            >
              {serie.intro}
            </div>
          </div>
          <button className="bg-gray-200 float-right mt-1 text-base mr-0">
            More
          </button>
        </Link>
      ))}
      {selectedSeries && (
        <ul>
          {shorts.map((short) => (
            <li key={short.id}>{short.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortComponent;
