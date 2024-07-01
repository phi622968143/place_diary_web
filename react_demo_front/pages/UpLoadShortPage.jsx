import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import UploadSwitchButton from "./components/UploadSwitchButton";

const UpLoadShortPage = ({ addShortSubmit }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const newShort = { content };
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
  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col justify-center px-7 py-10 mx-auto h-full w-full text-xl text-black bg-orange-100"
    >
      <div className="mb-4">
        <UploadSwitchButton />
      </div>

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
