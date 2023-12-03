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

const LineChart = ({ data }) => {
  // Extracting unique endpoints from the data
  const endpoints = [...new Set(data.map((entry) => entry.endpoint))];

  // Creating datasets for each endpoint
  const datasets = endpoints.map((endpoint) => {
    const filteredData = data.filter((entry) => entry.endpoint === endpoint);

    return {
      label: endpoint,
      data: filteredData.map((entry) => ({ x: entry.time, y: entry.requests })),
      fill: false,
      borderColor: getRandomColor(), // Function to generate a random color
      lineTension: 0.1,
    };
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Extracting time and requests from the data
  const chartData = {
    labels: data.map((entry) => entry.time),
    datasets: datasets,
  };

  // Custom callback function for formatting x-axis labels
  const formatXAxisLabel = (index) => {
    // Customize the format of the label using any React component or HTML
    const date = new Date(data[index].time);
    var options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Custom callback function for formatting tooltips
  const formatTooltip = (tooltipItem) => {
    const index = tooltipItem.dataIndex;
    const endpoint = data[index].endpoint;
    var options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
    };
    const time = new Date(tooltipItem.label).toLocaleTimeString(
      "en-US",
      options
    );
    const requests = tooltipItem.raw;

    return `Endpoint: ${endpoint}, Time: ${time}, Requests: ${requests}`;
  };

  // Options for the chart
  const options = {
    scales: {
      x: {
        ticks: {
          unit: "day",
          tooltipFormat: "ll",
          callback: formatXAxisLabel,
        },
        scaleLabel: {
          display: true,
          labelString: "Time",
        },
      },

      y: {
        scaleLabel: {
          display: true,
          labelString: "Requests",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: formatTooltip,
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
