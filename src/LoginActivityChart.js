import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
//import Chart from 'chart.js';

const LoginActivityChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const generateData = () => {
      const data = {
        labels: [], // an array of date strings for the past 90 days
        datasets: [
          {
            label: 'User Login Activity',
            data: [], // an array of integers representing the number of logins per day
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
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

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
      chart={Chart}
    />
  );
};

export default LoginActivityChart;
