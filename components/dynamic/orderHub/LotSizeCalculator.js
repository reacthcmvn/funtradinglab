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
    setCapital(Number(newCapital));
  }
  // handler nhận capital xong chia 9 và tính lotsize
  // trả ra lotsize
  return (
    <div className="">
      <div id="update-box" className=" flex flex-row flex-nowrap">
        <div id="input-num" className="">
          <div>
            <label className="text-[9px] p-1" htmlFor="capital-num">
              Enter Capital
            </label>
            <div>$ {capital.toLocaleString()}</div>
          </div>
          <div className=" flex flex-row p-1 bg-white">
            <div className="">
              <input
                className="w-[100px] text-black font-sans"
                type="number"
                name="capital-num"
                id="capital-num"
                ref={capitalRef}
              />
            </div>
            <div>
              <button
                onClick={capitalHandler}
                className="text-black text-xs bg-yellow-400/60 round-md"
                type="submit"
              >
                SET
              </button>
            </div>
            <div>
              <button
                className="text-black text-xs bg-yellow-400/60 round-md"
                type="submit"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col  text-center">
          <div className="text-[9px] mt-2">Lot size</div>
          <div className="text-[16px]">0.01</div>
        </div>
      </div>
    </div>
  );
};

export default LotSizeCalculator;
