import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg2 from "../styles/img/3333.webp";
import HeadBox from "../components/ui/HeadBox";
import SignalStatus from "../components/dynamic/serverConnection/SignalStatus";
import TickerPrice from "../components/dynamic/dataAPI/TickerPrice";
import Location from "../components/ui/Location";
import DataStream from "../components/dynamic/dataAPI/DataStream";
import OrderHubPanel from "../components/dynamic/orderHub/OrderHubPanel";
import NewsAPI from "../components/dynamic/dataAPI/NewsAPI";

export default function Home() {
  return (
    <div className="">
      <div className="text-yellow-400 text-5xl nav-top z-30 absolute">
        FUN_TRADING_LAD
      </div>
      <div className="text-yellow-400 absolute z-20 grid grid-cols-8 grid-rows-3 gap-1 w-full h-full mt-[50px] pb-[80px] ">
        <div className=" row-span-3 col-span-1">
          <div className="grid grid-cols-1 grid-rows-3 w-full h-full gap-1">
            <div className=" row-span-1">
              <HeadBox>SERVER_STATUS</HeadBox>
              <div className="flex flex-col">
                <SignalStatus signalStatusText="OFFLINE" signalStatusPort="1" />
                <SignalStatus signalStatusText="OFFLINE" signalStatusPort="2" />
                <SignalStatus signalStatusText="OFFLINE" signalStatusPort="3" />
                <SignalStatus signalStatusText="ONLINE" signalStatusPort="4" />
              </div>
            </div>
            <div className="  row-span-1">
              <HeadBox>LOOKUP DATA</HeadBox>
              <div className="flex flex-col ">
                <TickerPrice symbol="BTCUSDT" price="20.053,40" />
                <TickerPrice symbol="BTCUSDT" price="20.053,40" />
                <TickerPrice symbol="BTCUSDT" price="20.053,40" />
                <TickerPrice symbol="BTCUSDT" price="20.053,40" />
                <TickerPrice symbol="BTCUSDT" price="20.053,40" />
                <TickerPrice symbol="BTCUSDT" price="20.053,40" />
              </div>
            </div>
            <div className=" row-span-1">
              <HeadBox>GPS DATA</HeadBox>
              <Location />
            </div>
          </div>
        </div>
        <div className=" row-span-3 col-span-5 grid grid-cols-5 grid-rows-3 gap-1">
          <div className="  row-span-2 col-span-3">
            <HeadBox>SERVER_STATUS_tonhat</HeadBox>
          </div>
          <div className="  row-span-2 col-span-1">
            <HeadBox>SERVER_STATUSb1</HeadBox>
          </div>
          <div className="  row-span-2 col-span-1">
            <HeadBox>ORDER MASTER</HeadBox>
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>DATA STREAM</HeadBox>
            <DataStream />
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>ORDER ADVICE</HeadBox>
            <OrderHubPanel />
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>PACKAGE DATA FLOW</HeadBox>
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>SERVER_STATUSb6</HeadBox>
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>SERVER_STATUSb7</HeadBox>
          </div>
        </div>
        <div className=" row-span-3 col-span-2 grid grid-cols-1 grid-rows-3 gap-1">
          <div className="  row-span-1 col-span-1">
            <HeadBox>SERVER_STATUSc1</HeadBox>
            <br />
            <Location />
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>NEWS FLOW</HeadBox>
            <NewsAPI />
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>TOP CRYPTOS</HeadBox>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-30 footer bg-red-500/40">
        <HeadBox>SERVER_STATUS</HeadBox>
      </div>
      <div className=" w-full h-full z-10">
        <Image
          src={bg2}
          alt="Picture of the future of trading"
          // width={100}
          // height={500}

          layout="fill" // required
          objectFit="cover"
        />
      </div>
    </div>
  );
}
