import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import { Bar } from 'react-chartjs-2';

const LoginActivityChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const generateData = () => {
      const data = {
        labels: [], // an array of date strings for the past 90 days
        datasets: [
          {
            label: 'Commit activity - 90 Days',
            data: [], // an array of integers representing the number of logins per day
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };

      // generate data for the past 90 days
      for (let i = 89; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        data.labels.push(date.toLocaleDateString());
        data.datasets[0].data.push(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10
      }

      return data;
    };

    const data = generateData();
    setChartData(data);
  }, []);

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#333',
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: '#333',
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          if (label) {
            label += ': ';
          }
          label += tooltipItem.yLabel;
          return label;
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} chart={Chart} />;
};

export default LoginActivityChart;
