import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

import "./App.css";
import temperatureData from "./data/temperature.json";
import temp2Data from "./data/temp2.json"; // Assuming this is the file for the second set of data
import temp3Data from "./data/temp3.json";

// Chart.js defaults customization
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  // Data for the line chart
  const lineData = {
    labels: temperatureData.map((data) => data.hour),
    datasets: [
      {
        label: "Temperature",
        data: temperatureData.map((data) => data.temperature),
        backgroundColor: "#FF3030",
        borderColor: "#FF3030",
        fill: false,
      },
      {
        label: "Humidity",
        data: temperatureData.map((data) => data.humidity),
        backgroundColor: "#064FF0",
        borderColor: "#064FF0",
        fill: false,
      },
      {
        label: "Wind Speed",
        data: temperatureData.map((data) => data.wind_speed),
        backgroundColor: "#00FF00",
        borderColor: "#00FF00",
        fill: false,
      },
      {
        label: "Precipitation",
        data: temperatureData.map((data) => data.precipitation),
        backgroundColor: "#000000",
        borderColor: "#000000",
        fill: false,
      },
    ],
  };

  // Options for the line chart
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "2024-08-01 Weather Report",
        font: {
          size: 20,
          color: "black",
        },
        align: "start",
      },
      legend: {
        position: "top",
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Data for the bar chart
  const barData = {
    labels: temp2Data.map((data) => data.hour),
    datasets: [
      {
        label: "Temperature",
        data: temp2Data.map((data) => data.temperature),
        backgroundColor: [
        //   "rgba(43, 63, 229, 0.8)",
        //   "rgba(250, 192, 19, 0.8)",
          "rgba(255, 0, 0, 0.8)",
        ],
        borderRadius: 5,
      },
      {
        label: "humidity",
        data: temp2Data.map((data) => data.humidity),
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
        ],
        borderRadius: 5,
      },
      {
        label: "wind_speed",
        data: temp2Data.map((data) => data.wind_speed),
        backgroundColor: [
          "rgba(250, 192, 19, 0.8)",
        ],
        borderRadius: 5,
      },
      {
        label: "precipitation",
        data: temp2Data.map((data) => data.precipitation),
        backgroundColor: [
         "rgba(0, 0, 0, 0.8)",
        ],
        borderRadius: 5,
      },
    ],
  };

  // Options for the bar chart
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Weather Report - 2024-08-02",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  const barData3 = {
    labels: temp3Data.map((data) => data.hour),
    datasets: [
      {
        label: "Temperature",
        data: temp3Data.map((data) => data.temperature),
        backgroundColor: [
        //   "rgba(43, 63, 229, 0.8)",
        //   "rgba(250, 192, 19, 0.8)",
          "rgba(255, 0, 0, 0.8)",
        ],
        borderRadius: 5,
      },
      {
        label: "humidity",
        data: temp3Data.map((data) => data.humidity),
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
        ],
        borderRadius: 5,
      },
      {
        label: "wind_speed",
        data: temp3Data.map((data) => data.wind_speed),
        backgroundColor: [
          "rgba(250, 192, 19, 0.8)",
        ],
        borderRadius: 5,
      },
      {
        label: "precipitation",
        data: temp3Data.map((data) => data.precipitation),
        backgroundColor: [
         "rgba(0, 0, 0, 0.8)",
        ],
        borderRadius: 5,
      },
    ],
  };

  // Options for the bar chart
  const barOptions3 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Weather Report - 2024-08-03",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };


  

  return (
    <div className="App">
      <div className="dataCard temperature">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="dataCard temperature2">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="dataCard temperature3">
        <Bar data={barData3} options={barOptions3} />
      </div>
    </div>
    

  );
};
