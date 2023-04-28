import React, { useState, useEffect } from 'react';
//import Chart from 'chart.js';

const LoginActivityChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data for the past 90 days from an API endpoint
      const response = await fetch('https://example.com/api/login-activity');
      const data = await response.json();

      // Extract the login counts by day from the response data
      const loginCounts = data.map((item) => item.login_count);

      // Create a new Chart.js chart
      const ctx = document.getElementById('ActivityChart');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 90 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            return date.toLocaleDateString();
          }).reverse(),
          datasets: [
            {
              label: 'Developer Activity',
              data: loginCounts.reverse(),
              backgroundColor: 'rgba(0, 119, 204, 0.3)',
              borderColor: 'rgba(0, 119, 204, 0.8)',
              borderWidth: 2,
              pointRadius: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: 'rgba(0, 0, 0, 0.1)',
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        },
      });

      setChartData(chart);
    };

    fetchData();
  }, []);

  return (
    <div>
      <canvas id="ActivityChart"></canvas>
    </div>
  );
};

export default LoginActivityChart;
