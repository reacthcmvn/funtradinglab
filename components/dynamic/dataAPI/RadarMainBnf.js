import React from "react";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// const oneMinData = [];
// [2, 9, 3, 5, 2, 3]

export const preData = {
  labels: [
    "Satelite 1",
    "Satelite 2",
    "Satelite 3",
    "Satelite 4",
    "Satelite 5",
    "Satelite 6",
    "Satelite 7",
    "Satelite 8",
    "Satelite 9",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3, 8, 3, 2],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

function newNumGen(params) {
  const newNum = Math.floor(Math.random() * params);
  return newNum;
}

// useSelector get timeframe ra ở đây

// const TFRadarMain = 1200;

export function RadarMainBnf(props) {
  // const TFRadarMain = useSelector((state) => state.timeFrameRadarMain);
  const TFRadarMain = useSelector(
    (state) =>
      // console.log(state.tf.timeframeRadarMain)
      state.tf.timeframeRadarMain
  );
  const [fastDataMainBnf, setFastDataMainBnf] = useState(preData);

  useEffect(() => {
    let timeoutId;
    // lấy timeframe easy trước đi

    function getNewSetData(params) {
      const newSetData = [];

      for (let i = 0; i < 9; i++) {
        const newNum = newNumGen(9);
        newSetData.push(newNum);
      }

      // dataGenMin();
      // console.log(newSetData);
      const newFullData = {
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
            data: newSetData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };

      setFastDataMainBnf(newFullData);
      timeoutId = setTimeout(getNewSetData, TFRadarMain);
    }
    timeoutId = setTimeout(getNewSetData, TFRadarMain);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [TFRadarMain]);

  return <Radar data={fastDataMainBnf} />;
}
