import React from "react";

const TimePriceBox = (props) => {
  return (
    <div className="flex text-sm font-robo font-thin justify-between w-3/4">
      <div>{props.time}</div>
      <div>:</div>
      <div>{props.price}</div>
    </div>
  );
};

export default TimePriceBox;
