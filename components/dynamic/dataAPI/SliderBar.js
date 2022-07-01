import React from "react";

const SliderBar = () => {
  return (
    <div>
      <div className="border-[1px] border-yellow-400/40 m-2 p-4 rounded-tl-[40px] bg-red-800/20">
        <p className="font-robo text-[9px]">12-AT</p>
        <input
          className="h-0 outline-none appearance-none border-yellow-800/80 border-[2.4px] rounded-md"
          // height="4"
          type="range"
          min="1"
          // outline="none"
          max="100"
          id="myRange"
        />
        <input
          className="h-0 outline-none appearance-none border-yellow-800/80 border-[2.4px] rounded-md"
          // height="4"
          type="range"
          min="1"
          // outline="none"
          max="100"
          id="myRange"
        />
        <input
          className="h-0 outline-none appearance-none border-yellow-800/80 border-[2.4px] rounded-md"
          // height="4"
          type="range"
          min="1"
          // outline="none"
          max="100"
          id="myRange"
        />
        <input
          className="h-0 outline-none appearance-none border-yellow-800/80 border-[2.4px] rounded-md"
          // height="4"
          type="range"
          min="1"
          // outline="none"
          max="100"
          id="myRange"
        />
        <input
          className="h-0 outline-none appearance-none border-yellow-800/80 border-[2.4px] rounded-md"
          // height="4"
          type="range"
          min="1"
          // outline="none"
          max="100"
          id="myRange"
        />
      </div>
    </div>
  );
};

export default SliderBar;
