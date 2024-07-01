import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import long from "./components/db.json";

const LongContentPostPage = () => {
  const { id } = useParams();
  const longPosts = long.long;
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

  const post = longPosts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col justify-center px-5 py-1 mx-auto h-full w-full text-xl text-black bg-orange-100">
      <div
        className="no-scrollbar h-7 text-3xl pb-12 resize-none border-none focus:border-transparent focus:outline-none focus:ring-0 bg-orange-100 rounded-lg shadow-sm"
        style={{ textAlign: "left", paddingTop: "9px" }}
      >
        {post.title}
      </div>
      <div
        className={`${
          screenWidth < 768 || screenHeight < 500 ? "w-2/5" : "w-1/5"
        } text-xs h-2 pt-12 top-5 pb-12 border-none focus:border-transparent focus:outline-none focus:ring-0 bg-orange-100 rounded-lg shadow-sm`}
        style={{ textAlign: "left", paddingTop: "9px" }}
      >
        {post.date}
      </div>
      <div
        className={`text-base pb-12 border-none focus:border-transparent focus:outline-none focus:ring-0 bg-orange-100 rounded-lg shadow-sm ${
          screenWidth < 768 || screenHeight < 500 ? "h-1/2" : "h-3/4"
        }`}
        style={{ textAlign: "left", paddingTop: "9px" }}
      >
        {post.content}
      </div>
    </div>
  );
};

export default LongContentPostPage;
