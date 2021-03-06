import React from "react";

const TickerPrice = (props) => {
  return (
    <div className="flex justify-between p-2">
      <div className="text-yellow-600/80 text-sm tracking-wider">
        {props.symbol}
      </div>
      <div className="text-teal-300/70 text-xs font-robo">{props.price}</div>
      {/* <div className="text-xs">USD</div> */}
    </div>
  );
};

export default TickerPrice;
