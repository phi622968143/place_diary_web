import BottomBar from "../toolbar/BottomBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../toolbar/SideBar";

const Layout = () => {
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
  const sideBarWidth = screenWidth < 768 || screenHeight < 500 ? "0" : "17vw";
  const outLetWidth =
    screenWidth < 768 || screenHeight < 500 ? "100vw" : "83vw";
  const bottomBarHeight =
    screenWidth < 768 || screenHeight < 500 ? "10vh" : "0";
  const outLetHeight =
    screenWidth < 768 || screenHeight < 500 ? "90vh" : "100vh";
  return (
    <Grid
      templateAreas={`"nav main""nav footer"`}
      padding={0}
      margin={0}
      width="100vw"
      height="100vh"
    >
      <GridItem
        width={`${sideBarWidth}`}
        area={"nav"}
        sx={{ padding: 0, margin: 0 }}
      >
        <SideBar />
      </GridItem>
      <GridItem
        height="100vh"
        width={`${outLetWidth}`}
        area={"main"}
        sx={{ padding: 0, margin: 0 }}
      >
        <Outlet />
        <BottomBar height={`${bottomBarHeight}`} />
      </GridItem>
    </Grid>
  );
};

export default Layout;
