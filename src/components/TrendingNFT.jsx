import React from "react";
import user from "../assets/gallery/user.png";
import fire from "../assets/gallery/fire.png";
import eth from "../assets/gallery/eth.png";

const TrendingNFT = ({ onclick, img }) => {
  return (
    <div
      className="bg-black flex flex-col items-center py-1 px-2
     rounded-xl shadow-md shadow-blue-700 "
    >
      <div>
        <img className="w-[160px] h-[90px]" src={img} alt="" />
      </div>
      <div className="flex gap-2  items-center">
        <div>
          <img className="w-[30px]" src={user} alt="" />
        </div>
        <div className="flex flex-col py-1">
          <span className="text-10px">MoonFall</span>
          <span className="text-[8px]">By @JSmith</span>
        </div>
      </div>
      <div className="flex gap-8 py-2  ">
        <div className="flex gap-1 mt-1">
          <span className="text-[9px] ">On Sale</span>
          <span>
            <img className="" src={fire} alt="" />
          </span>
        </div>
        <div>
          <span className="flex text-[10px]">
            <img src={eth} alt="" />
            4.89 ETH
          </span>
          <span className="text-[8px]">($ 654,874.86)</span>
        </div>
      </div>
      <div>
        <button className="py-1.5 px-9  rounded-lg text-[10px] shadow-sm shadow-pink-700 bg-[#1e081f] ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TrendingNFT;