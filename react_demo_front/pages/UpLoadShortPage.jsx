import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import axios from "axios";
import UploadSwitchButton from "./components/UploadSwitchButton";

const UpLoadShortPage = ({ addShortSubmit }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [content, setContent] = useState("");
  const [series, setSeries] = useState([]);
  const [selectedSeriesId, setSelectedSeriesId] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const newShort = { content, series: selectedSeriesId };
    addShortSubmit(newShort);
    toast.success("Short Added Successfully");
    return navigate("/");
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
  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col px-7 py-10 mx-auto h-full w-full text-xl text-black bg-orange-100"
    >
      <div className="mb-4">
        <UploadSwitchButton />
      </div>

      <select
        className="w-1/3 text-black bg-orange-100 border-none focus:border-transparent focus:outline-none focus:ring-0"
        value={selectedSeriesId}
        onChange={(e) => setSelectedSeriesId(e.target.value)} // 当用户选择系列时，更新 selectedSeriesId
      >
        <option value="" disabled>
          Select a Series
        </option>
        {series.map((serie) => (
          <option value={serie.id} key={serie.id}>
            {serie.title}
          </option>
        ))}
      </select>
      <textarea
        className={`px-9 pt-12 top-5 pb-12  bg-amber-200 rounded-lg shadow-sm ${
          screenWidth < 768 || screenHeight < 500 ? "h-1/2" : "h-3/4"
        }`}
        style={{ textAlign: "left", paddingTop: "9px" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <Button type="submit" colorScheme="green">
        Submit
      </Button>
    </form>
  );
};

export default UpLoadShortPage;
