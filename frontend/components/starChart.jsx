import React from 'react';
import { useState, useEffect } from 'react';

const StarChart = (props) => {
  const { location } = props;
  const [chartUrl, setChartUrl] = useState('');
  const userLocation = { lat: 40, long: -74 };

  useEffect(() => {
    const fetchedStarChart = async () => {
      try {
        let newChart = await fetch('http://localhost.com:3000/api/starChart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lat: 40,
            long: -74,
          }),
        });
        newChartData = await newChart.json();
        setChartUrl(newChartData);
        return newChartData;
      } catch (err) {
        console.error(err);
      }
    };
    fetchedStarChart();
  }, [chartUrl]);

  return (
    <div className="starchart">
      <h3>Star Chart</h3>
      <div className="starchart-container">
        <img className="starchartData" src={chartUrl} />
      </div>
    </div>
  );
};

export default StarChart;
