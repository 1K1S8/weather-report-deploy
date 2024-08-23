import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, LineElement, PointElement);

import "./App.css";
import temperatureData from "./data/temperature.json";
import temp2Data from "./data/temp2.json";
import temp3Data from "./data/temp3.json";

export const App = () => {
  const [delayed, setDelayed] = useState(false);

  // Function to generate datasets for line chart
  const generateDatasets = (data, color) => ({
    label: data.label,
    data: data.values,
    backgroundColor: color,
    borderColor: color,
    fill: false,
    tension: 0.5,
  });

  // Line chart data and options
  const lineData = {
    labels: temperatureData.map((data) => data.hour),
    datasets: [
      generateDatasets({ label: "Temperature", values: temperatureData.map((data) => data.temperature) }, "#FF3030"),
      generateDatasets({ label: "Humidity", values: temperatureData.map((data) => data.humidity) }, "#064FF0"),
      generateDatasets({ label: "Wind Speed", values: temperatureData.map((data) => data.wind_speed) }, "#00FF00"),
      generateDatasets({ label: "Precipitation", values: temperatureData.map((data) => data.precipitation) }, "#FFFF00"),
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Weather Report - 2024-08-01",
        align: "start",
        font: {
          size: 20,
          color: "white",
        },
      },
      legend: {
        position: "top",
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
    animation: {
      duration: 1500,
      delay: (context) => context.dataIndex * 100,
    },
  };

  // Function to generate datasets for bar charts
  const generateBarDatasets = (data, color) => ({
    label: data.label,
    data: data.values,
    backgroundColor: color,
    borderRadius: 5,
  });

  // Bar chart data and options
  const createBarData = (data) => ({
    labels: data.map((item) => item.hour),
    datasets: [
      generateBarDatasets({ label: "Temperature", values: data.map((item) => item.temperature) }, "rgba(255, 0, 0, 0.8)"),
      generateBarDatasets({ label: "Humidity", values: data.map((item) => item.humidity) }, "rgba(43, 63, 229, 0.8)"),
      generateBarDatasets({ label: "Wind Speed", values: data.map((item) => item.wind_speed) }, "#00FF00"),
      generateBarDatasets({ label: "Precipitation", values: data.map((item) => item.precipitation) }, "#FFFF00"),
    ],
  });

  const createBarOptions = (titleText) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: titleText,
        font: {
          size: 20,
          color: "white",
        },
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
    animation: {
      duration: 1500,
      delay: (context) => context.dataIndex * 100,
    },
  });

  return (
    <div className="App">
      <div className="dataCard temperature">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="dataCard temperature2">
        <Bar data={createBarData(temp2Data)} options={createBarOptions("Weather Report - 2024-08-02")} />
      </div>
      <div className="dataCard temperature3">
        <Bar data={createBarData(temp3Data)} options={createBarOptions("Weather Report - 2024-08-03")} />
      </div>
    </div>
  );
};
