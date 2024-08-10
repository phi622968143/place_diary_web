import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import ShortContentPage from "../pages/ShortContentPage";
import UpLoadShortPage from "../pages/UpLoadShortPage";
import LongContentPage from "../pages/LongContentPage";
import UpLoadLongPage from "../pages/UpLoadLongPage";
import LongContentPostPage from "../pages/LongContentPostPage";
import SortPage from "../pages/SortPage";
import axios from "axios";
import db from "../pages/components/db.json";

function App() {
  const [longPosts, setLongPosts] = useState([]);

  useEffect(() => {
    // 模拟从 db.json 中读取数据
    //setLongPosts(db.long);
    axios
      .get("http://127.0.0.1:8000/articles/")
      .then((response) => {
        setLongPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);

  const addShort = async (newShort) => {
    await fetch("/api/short", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShort),
    });
  };

  const addLong = async (newLong) => {
    await fetch("http://127.0.0.1:8000/articles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLong),
    });
  };

  const routes = (
    <Route path="/" element={<Layout />}>
      <Route index element={<ShortContentPage />} />
      <Route path="long" element={<LongContentPage />} />
      <Route path="sort" element={<SortPage />} />
      {longPosts.map((post) => (
        <Route
          key={post.id}
          path="long/:id"
          element={<LongContentPostPage />}
        />
      ))}
      <Route
        path="uploadshort"
        element={<UpLoadShortPage addShortSubmit={addShort} />}
      />
      <Route
        path="uploadlong"
        element={<UpLoadLongPage addLongSubmit={addLong} />}
      />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
