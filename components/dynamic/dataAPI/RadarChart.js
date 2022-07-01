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

// export const data = {
//   labels: [
//     "Satelite 1",
//     "Satelite 2",
//     "Satelite 3",
//     "Satelite 4",
//     "Satelite 5",
//     "Satelite 6",
//   ],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

export function RadarChart(props) {
  // useEffect(() => {
  //   return () => {
  //     const newSetData = [];
  //     for (let i = 0; i < 6; i++) {
  //       newSetData.push(getRandomInt(6));
  //     }
  //     setOneMinData(newSetData);
  //   };
  // }, []);
  // const [oneMinData, setOneMinData] = useState([2, 9, 3, 5, 2, 3]);
  return <Radar data={props.data} />;
}
