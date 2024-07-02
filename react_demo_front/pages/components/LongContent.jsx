import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import long from "./db.json";

const LongContent = () => {
  //const longPost = long.long;
  const [longPosts, setLongPosts] = useState([]);
  const [message, setMessage] = useState("");
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
  useEffect(() => {
    //App.jsx and LongPostContentPage.jsx haven't fetch data yet
    axios
      .get("http://127.0.0.1:8000/articles/")
      .then((response) => {
        setLongPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);
  return (
    <div className="flex flex-col items-center p-12 bg-zinc-300">
      {longPosts.map((longs) => (
        <Link
          key={longs.id}
          to={`${longs.id}`}
          className="flex gap-1 px-3.5 py-1.5 mt-2 w-10/12 bg-gray-200 rounded"
        >
          <div className="flex flex-col flex-1 p-2.5">
            <div className="text-base border-0 border-solid border-black border-opacity-40">
              {longs.title}
            </div>
            <div className="mt-1 text-xs">{longs.timestamp}</div>
            <div className="mt-1 text-xs">{longs.content}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LongContent;
