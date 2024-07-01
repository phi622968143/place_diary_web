import { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import short from "./db.json";

const ShortContent = () => {
  const shortPost = short.short;
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
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   let config = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/short/short_demo",
  //   };
  //   try {
  //     const response = await axios.request(config);
  //     setMessage(response.data.message);
  //     //console.log(response);
  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error("Error fetching data >_<", error);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col items-center p-12 bg-zinc-300">
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
    </>
  );
};

export default ShortContent;
