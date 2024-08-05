<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';

const StarChart = (props) => {
  const { location } = props;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchStarChart = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/starChart', {
>>>>>>> 94f959dfbcb5fd79380acf894222680966a58bf0
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
<<<<<<< HEAD
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
=======
            lat: 30, //try fiddle with this to get the lat and long to work!?@?!
            long: -74,
          }),
        });
        const data = await response.json();
        setImageUrl(data.data.imageUrl);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    if (location) {
      fetchStarChart();
    }
  }, [location]);
  return (
    <div className="starchart">
      <h3>Star Chart</h3>
      <img src={imageUrl} alt="Star Chart" />
>>>>>>> 94f959dfbcb5fd79380acf894222680966a58bf0
    </div>
  );
};

export default StarChart;
