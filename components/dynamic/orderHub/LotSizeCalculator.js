import React from "react";

const LotSizeCalculator = () => {
  // handle state
  // handler nhận capital xong chia 9 và tính lotsize
  // trả ra lotsize
  return (
    <div className="w-full">
      <div id="update-box" className="flex flex-row w-full bg-red-600">
        <div id="input-num" className=" w-full pr-12">
          <label htmlFor="capital-num">Enter Capital</label>
          <div className="flex flex-row">
            <input
              className="w-3/4"
              type="number"
              name="capital-num"
              id="capital-num"
            />
            <button type="submit">SET</button>
          </div>
        </div>
        <div className="text-[26px]">0.01</div>
      </div>
    </div>
  );
};

export default LotSizeCalculator;
