import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg2 from "../styles/img/b11.jpg";
import HeadBox from "../components/ui/HeadBox";
import SignalStatus from "../components/dynamic/serverConnection/SignalStatus";
import TickerPrice from "../components/dynamic/dataAPI/TickerPrice";
import Location from "../components/ui/Location";
import DataStream from "../components/dynamic/dataAPI/DataStream";
import OrderHubPanel from "../components/dynamic/orderHub/OrderHubPanel";
import NewsAPI from "../components/dynamic/dataAPI/NewsAPI";
import { SunBrustChart } from "../components/dynamic/dataAPI/SunBrustChart";
import { PolarChartMain } from "../components/dynamic/dataAPI/PolarChartMain";
import { ScatterChart } from "../components/dynamic/dataAPI/ScatterChart";
import { BarChart } from "../components/dynamic/dataAPI/BarChart";
import { RadarChart } from "../components/dynamic/dataAPI/RadarChart";
import PriceAPI from "../components/dynamic/dataAPI/PriceAPI";
import { OrderStacking } from "../components/dynamic/dataAPI/OrderStacking";
import SliderBar from "../components/dynamic/dataAPI/SliderBar";
import { PositionSplit } from "../components/dynamic/dataAPI/PositionSplit";
import { BnfTimeFrameSplit } from "../components/dynamic/dataAPI/BnfTimeFrameSplit";
import TheRich from "../components/layout/TheRich";
import { RadarFast } from "../components/dynamic/dataAPI/RadarFast";
import { RadarMainBnf } from "../components/dynamic/dataAPI/RadarMainBnf";
import { PolarMainBnf } from "../components/dynamic/dataAPI/PolarMainBnf";

export default function Home(props) {
  // console.log(props.mainRadar);
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
              <HeadBox>WORLD TOP</HeadBox>
              <TheRich />
            </div>
          </div>
        </div>
        <div className=" row-span-3 col-span-5 grid grid-cols-5 grid-rows-3 gap-1">
          <div className="  row-span-2 col-span-3">
            <HeadBox>BNF DIRECTION</HeadBox>
            <div className="relative flex bg-teal-500/30 justify-center">
              <div className="absolute w-9/12 z-20">
                {/* <RadarChart data={props.mainRadar} /> */}
                <RadarMainBnf />
              </div>
              <div className="absolute w-9/12 z-20">
                {/* <PolarChartMain /> */}

                <PolarMainBnf />
              </div>
              <div className="absolute w-full h-[500px] bg-pink-500/0">
                <div className="relative w-full h-[500px] table">
                  <div className="table-cell align-middle text-right">
                    <h2 className="bg-red-500 w-4">real_data: OFF</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  row-span-2 col-span-1">
            <HeadBox>SLIDER BAR REFINE</HeadBox>

            <div className="relative flex flex-col">
              <div className="w-full">
                <SunBrustChart />
              </div>
              <div className="bg-red-500/0 flex text-center ">
                <SliderBar />
              </div>
            </div>
          </div>
          <div className="  row-span-2 col-span-1">
            <HeadBox>ORDER MASTER</HeadBox>
            <div className="relative w-full flex flex-col ">
              <div className="">
                <PriceAPI />
              </div>
              <div className="  flex ">
                <div className="">
                  <OrderStacking />
                </div>
              </div>
            </div>
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
            <HeadBox>POSITION SPLIT</HeadBox>
            <PositionSplit timeframe="5min" />

            <div className="relative flex w-full  justify-center  ">
              <div className="absolute w-full h-[200px]"></div>
            </div>
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>SERVER_STATUSb6</HeadBox>
            <ScatterChart />
          </div>
          <div className="  row-span-1 col-span-1">
            <HeadBox>SERVER_STATUSb7</HeadBox>
            <RadarFast />
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
            <HeadBox>BNF ALL FRAMES</HeadBox>
            <div className=" grid grid-cols-1 grid-rows-3 ">
              <div className="row-start-1 row-end-2  ">
                <BnfTimeFrameSplit />
              </div>
              <div className=" row-start-2 row-end-3 ">
                <BnfTimeFrameSplit />
              </div>
              <div className=" row-start-3 row-end-4">
                <BnfTimeFrameSplit />
              </div>
            </div>
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

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const getStaticProps = async () => {
  const newSetDataRadar = [];
  for (let i = 0; i < 6; i++) {
    const dataPiece = getRandomInt(6); // your fetch function here
    newSetDataRadar.push(dataPiece);
  }
  // console.log(newSetDataRadar);
  const dataRadarMain = {
    labels: [
      "Satelite 1",
      "Satelite 2",
      "Satelite 3",
      "Satelite 4",
      "Satelite 5",
      "Satelite 6",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: newSetDataRadar,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return {
    props: {
      mainRadar: dataRadarMain,
    },
    revalidate: 1,
  };
};
