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
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
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

export function RadarFast(props) {
  const [fastData, setFastData] = useState(preData);

  useEffect(() => {
    let timeoutId;
    function getNewSetData(params) {
      const newSetData = [];

      for (let i = 0; i < 6; i++) {
        const newNum = newNumGen(6);
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

      setFastData(newFullData);
      timeoutId = setTimeout(getNewSetData, 100);
    }
    timeoutId = setTimeout(getNewSetData, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <Radar data={fastData} />;
}
