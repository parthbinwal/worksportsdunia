import React from 'react';
import { Bar } from 'react-chartjs-2';

const Analytics = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.author),
    datasets: [
      {
        label: 'Articles by Author',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default Analytics;