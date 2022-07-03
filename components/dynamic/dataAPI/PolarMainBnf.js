import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const preData = {
  labels: [
    "Reder",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
    "Orange",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 32, 5, 2, 3, 4, 1, 5, 22],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

function genRandom(params) {
  const newNum = Math.floor(Math.random() * params);
  return newNum;
}

const TFPolarMain = 2000;

export function PolarMainBnf() {
  const [newDataPolarMainBnf, setNewDataPolarMainBnf] = useState(preData);
  useEffect(() => {
    // gen | fetch data function

    // setTimeout

    let timeoutId;
    function genNewData() {
      const latestData = [];
      for (let i = 0; i < 11; i++) {
        const newNum = genRandom(11);
        latestData.push(newNum);
      }
      const latestPolarData = {
        labels: [
          "Reder",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "Orange",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: latestData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ],
            borderWidth: 1,
          },
        ],
      };

      // update state
      setNewDataPolarMainBnf(latestPolarData);

      // call chính mình
      timeoutId = setTimeout(genNewData, TFPolarMain);
    }

    timeoutId = setTimeout(genNewData, TFPolarMain);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <PolarArea data={newDataPolarMainBnf} />;
}
