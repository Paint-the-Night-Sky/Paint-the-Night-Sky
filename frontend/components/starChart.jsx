import React, { useEffect, useState } from 'react';

const StarChart = (props) => {
  const { location } = props;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchStarChart = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/starChart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
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
    </div>
  );
};

export default StarChart;
