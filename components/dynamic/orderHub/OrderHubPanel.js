import React from "react";
import OrderHubList from "./OrderHubList";
import LotSizeCalculator from "./LotSizeCalculator";

const OrderHubPanel = () => {
  return (
    <div>
      <LotSizeCalculator />
      <OrderHubList />
    </div>
  );
};

export default OrderHubPanel;
