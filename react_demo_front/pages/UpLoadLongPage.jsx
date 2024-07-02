import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import UploadSwitchButton from "./components/UploadSwitchButton";

const UpLoadLongPage = ({ addLongSubmit }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const dateRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const newLong = { title, content };
    addLongSubmit(newLong);
    toast.success("Long Added Successfully");
    return navigate("/long");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 阻止默认的 Enter 行为
      // if (e.target.name === "date") {
      //   titleRef.current.focus();
      // } else
      if (e.target.name === "title") {
        contentRef.current.focus();
      }
    }
  };
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
    <form
      onSubmit={submitForm}
      className="flex flex-col justify-center px-7 py-10 mx-auto h-full w-full text-xl text-black bg-orange-100"
    >
      <div className="mb-4">
        <UploadSwitchButton />
      </div>
      <Button
        type="submit"
        colorScheme="green"
        className={`${
          screenWidth < 768 || screenHeight < 500 ? "w-1/4" : "w-1/12"
        }`}
      >
        Submit
      </Button>
      <div className="text-xl">Content</div>
      {/* <input
        className={`${
          screenWidth < 768 || screenHeight < 500 ? "w-2/5" : "w-1/5"
        } text-xs h-2 pt-12 top-5 pb-12 border-none focus:border-transparent focus:outline-none focus:ring-0 bg-orange-100 rounded-lg shadow-sm`}
        style={{ textAlign: "left", paddingTop: "9px" }}
        type="date"
        name="date"
        ref={dateRef}
        value={date}
        onKeyPress={handleKeyPress}
        onChange={(e) => setDate(e.target.value)}
      ></input> */}
      <textarea
        className="no-scrollbar h-8 text-base pb-12 resize-none border-none focus:border-transparent focus:outline-none focus:ring-0 bg-orange-100 rounded-lg shadow-sm"
        style={{ textAlign: "left", paddingTop: "9px" }}
        type="text"
        name="title"
        ref={titleRef}
        value={title}
        onKeyPress={handleKeyPress}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title here"
      ></textarea>

      <textarea
        className={`text-base pb-12 border-none focus:border-transparent focus:outline-none focus:ring-0 bg-orange-100 rounded-lg shadow-sm ${
          screenWidth < 768 || screenHeight < 500 ? "h-1/2" : "h-3/4"
        }`}
        style={{ textAlign: "left", paddingTop: "9px" }}
        name="content"
        ref={contentRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's in Ur mind???"
      ></textarea>
    </form>
  );
};

export default UpLoadLongPage;
