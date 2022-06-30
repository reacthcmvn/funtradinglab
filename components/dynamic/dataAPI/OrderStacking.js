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
  responsive: false,
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [22, 4, 22, 6, 3, 33, 78],
      backgroundColor: "rgba(220, 38, 38, 0.4)",
    },
    {
      label: "Dataset 2",
      data: [2, 24, 22, -6, 3, -3, 8],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Dataset 3",
      data: [22, -24, 22, -16, 53, -3, -98],
      backgroundColor: "rgba(250, 204, 51, 0.7)",
    },
  ],
};

export function OrderStacking() {
  return (
    <div className="rotate-90 text-yellow-400 w-3/4 mt-10">
      <Bar options={options} data={data} />
    </div>
  );
}
