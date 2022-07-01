import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        91, 82, 78, -50, -11, 27, -80, 59, -27, -76, -36, 3, -31, -29, -20, 41,
        -9, -91, -75, -34, 76, 45, -65, -30, 10, -33, -37, 96, -100, 79, -44,
        99, -52, 33, -16, -55, -93, 58, -94, -68, 53, -1, 62, 74, 6, -4, 93, 80,
        75, -17, 20, -58, -49, 81, -6, 39, -70, 95, 100, -5, 32,
      ],
      backgroundColor: "rgba(220, 38, 38, 0.4)",
    },
    {
      label: "Dataset 2",
      data: [
        13, 88, -64, 57, -52, 55, 39, 50, 19, -1, -19, 7, 95, -9, 83, -54, -7,
        -49, -82, -94, 31, -45, -34, -20, 25, -100, 52, -41, 41, -70, -81, 10,
        60, 100, -30, 82, -79, 86, 30, 4, 98, 80, -99, -22, 72, -69, -25, -68,
        -11, 46, -88, -5, -57, 92, 37, 69, -28, -61, -84, -87, 34,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Dataset 3",
      data: [
        -40, 25, 21, 97, -77, 13, -9, -55, 84, 58, 23, 22, 42, -34, 61, 98, 59,
        -14, 0, -17, 48, 14, -30, -49, 90, -87, 3, -19, 57, -97, -38, -45, -44,
        -58, -3, 24, 11, -56, 34, 54, 30, -63, 53, -72, 37, 44, -11, -2, -86,
        33, -23, 46, 91, 41, 16, -42, 38, 74, 64, -57, -73,
      ],
      backgroundColor: "rgba(250, 204, 51, 0.7)",
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    // layout: {
    //   padding: {
    //     bottom: 200,
    //   },
    // },
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: "red",
        display: false,
      },
    },
    y: {
      stacked: true,
    },
  },
};

export function BnfTimeFrameSplit() {
  return (
    <div className=" text-yellow-400 h-20">
      <Bar options={options} data={data} />
    </div>
  );
}
