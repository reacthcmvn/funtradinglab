import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
        2, 5, 6, 11, 12, 18, 21, 22, 33, 39, 40, 43, 50, 51, 54, 56, 63, 64, 71,
        79, 80, 87, 89, 93, 94, 97, 105, 107, 113, 125, 126, 134, 138, 139, 140,
        141, 143, 144, 145, 149, 152, 153, 154, 158, 159, 165, 168, 170, 173,
        177, 178, 179, 185, 186, 192, 193, 194, 197, 198, 199, 200,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [
        3, 11, 13, 14, 16, 17, 21, 24, 26, 30, 32, 45, 47, 48, 50, 52, 55, 58,
        62, 64, 66, 69, 70, 75, 78, 84, 87, 88, 91, 95, 96, 97, 98, 106, 116,
        121, 122, 124, 127, 138, 140, 142, 146, 155, 157, 165, 167, 168, 175,
        178, 180, 181, 184, 186, 188, 189, 192, 193, 196, 197, 199,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export function PositionSplit(props) {
  console.log(labels.length);
  return <Line options={options} data={data} />;
}
