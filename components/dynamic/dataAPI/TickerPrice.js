import React from "react";

const TickerPrice = (props) => {
  return (
    <div className="flex justify-between p-2">
      <div className="text-yellow-600/60 text-sm font-semibold">
        {props.symbol}
      </div>
      <div className="text-teal-300 text-sm">{props.price}</div>
      {/* <div className="text-xs">USD</div> */}
    </div>
  );
};

export default TickerPrice;
