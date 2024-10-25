import React from "react";
import Profile from "./profile";
import SlideBarButtons from "./SlideBarButtons";

const Slidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen h-screen w-[20%] border border-solid border-x-black">
      <div className="h-[100px] w-full p-2 flex justify-between items-center">
        <Profile />
        <div className="w-[60%] text-sm ">
          <h1 className="font-bold text-lg">Lohith Poojary</h1>
          <h2 className="font-serif">Full Stack Developer</h2>
        </div>
      </div>
      <div className="w-full h-[2px] px-7">
        <div className="border border-dashed border-slate-300"></div>
      </div>
      <SlideBarButtons/>
    </div>
  );
};

export default Slidebar;
