import React from "react";

const SignalStatus = (props) => {
  return (
    <div className="flex justify-between">
      <div className="tracking-[0.5rem] text-xs border-[2px] border-yellow-400/40 border-solid p-2 m-1 w-[60%] text-center">
        {props.signalStatusText}
      </div>

      <div className="relative border-[2px] border-yellow-400/40 border-solid p-2 m-1 w-[40px] h-[40px] text-center">
        {props.signalStatusPort}
        <hr className="absolute border-t-[2px] border-yellow-400/40 border-solid w-12 top-4 right-9" />
      </div>
    </div>
  );
};

export default SignalStatus;
