import { useState, useEffect } from "react";

const Introduction = () => {
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
  return (
    <div
      className={`flex gap-5 justify-between items-start self-center bg-red-200 p-3`}
    >
      <div className="flex flex-col px-5 mt-3 whitespace-nowrap">
        <div
          className={`text-xl text-black text-opacity-60 ${
            screenWidth < 768 || screenHeight < 500 ? "flex" : "hidden"
          }`}
        >
          PLACE
        </div>
        <div className="flex flex-col mt-4 text-sm text-black text-opacity-50">
          <img
            loading="lazy"
            srcset="
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=100   100w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=200   200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=400   400w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=800   800w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=1200 1200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=1600 1600w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&width=2000 2000w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/f1d03c10282fb1d79730359a1b09524cea85f077a5ae5a9eac4de288c4c4b847?apiKey=ff64574bbc9f4c05adc9bb5fd7e7a63c&
            "
            className="rounded-full aspect-[0.94] w-[69px]"
          />
          <div className="mt-2.5">林鵝子</div>
        </div>
      </div>
      <div className="flex flex-col text-xs text-white mr-7">
        <div className="justify-center p-2.5 mt-7 rounded bg-black bg-opacity-50">
          大家好，我是一隻期中快死掉的鵝子 :)))
        </div>
        <div className="justify-center p-2.5 mt-1.5 rounded bg-black bg-opacity-50">
          最新文章 : 最近好emo
        </div>
      </div>
    </div>
  );
};

export default Introduction;
