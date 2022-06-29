import React from "react";

const SignalStatus = (props) => {
  return (
    <div className="border-y-[1.2px] border-yellow-400/60 border-solid p-1">
      {props.status}
    </div>
  );
};

export default SignalStatus;
