import React from "react";
import { useState, useRef } from "react";

const LotSizeCalculator = () => {
  const capitalRef = useRef();
  const [capital, setCapital] = useState("1000");
  // handle state
  function capitalHandler(event) {
    event.preventDefault();
    const newCapital = capitalRef.current.value;
    console.log(capitalRef);
    setCapital(newCapital);
  }
  // handler nhận capital xong chia 9 và tính lotsize
  // trả ra lotsize
  return (
    <div className="w-full">
      <div id="update-box" className="flex flex-row w-full">
        <div id="input-num" className=" w-full ">
          <div>
            <label className="text-[9px] p-1" htmlFor="capital-num">
              Enter Capital
            </label>
            <div>$ {capital}</div>
          </div>
          <div className="flex flex-row p-1">
            <input
              className="w-[90px] text-black font-sans"
              type="number"
              name="capital-num"
              id="capital-num"
              ref={capitalRef}
            />
            <button
              onClick={capitalHandler}
              className="text-black text-xs bg-yellow-400/60 round-md mx-1"
              type="submit"
            >
              SET
            </button>
            <button
              className="text-black text-xs bg-yellow-400/60 round-md"
              type="submit"
            >
              ADD
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full text-center">
          <div className="text-[9px] mt-2">Lot size</div>
          <div className="text-[16px]">0.01</div>
        </div>
      </div>
    </div>
  );
};

export default LotSizeCalculator;
