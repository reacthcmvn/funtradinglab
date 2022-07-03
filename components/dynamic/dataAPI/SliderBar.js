import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { bnfAdjustSliceActions } from "../../../store/bnfAdjust-slice";

const SliderBar = () => {
  const [timeframe, setTimeframe] = useState(0);
  const timeframeRef = useRef(0);
  const dispatch = useDispatch();
  const newTF = useSelector((state) => state.tf.timeframeRadarMain);

  function adjustTimeframeHandler(e) {
    const newTimeframe = timeframeRef.current.value;
    const amount = Number(newTimeframe);
    console.log(newTimeframe);

    dispatch(bnfAdjustSliceActions.changeTF({ amount: amount }));

    console.log(newTF);
  }

  return (
    <div>
      <div className="border-[1px] border-yellow-400/40 m-2 p-4 rounded-tl-[40px] bg-red-800/20">
        <p className="font-robo text-[9px]">12-AT</p>
        <input
          ref={timeframeRef}
          onChange={adjustTimeframeHandler}
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
