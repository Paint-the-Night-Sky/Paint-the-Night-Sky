import React from 'react';

const StarChart = (props) => {
  const { location } = props;
  let newChartData;

  const fetchedStarChart = async () => {
    try {
      let newChart = await fetch('http://localhost.com:3000/api/starChart', {
        // let newChart = await fetch(
        //   'https://api.astronomyapi.com/api/v2/studio/star-chart',
        //   {
        //     method: 'POST',
        //     headers: {
        //       Authorization:
        //         'Basic ZjFlMGQwOWMtZmFlMC00OGFkLWEzY2MtMTJlOTVlYzM4NjY0OmQ0Mzc0MmJhNDE5ODkzYTdlZDU5MzgzNzQwYTEzNzg2NGUyOTRhOWI3ZWRhYTc4ZDIyOTBhMTE1NjhjMjU5ZGU3ZjdkYWYxN2ExYmI5ZmE5MjMyNjBiYzI5YjIxZTQ5MTM5MWVmMzQzNDRhMzI1ODEwNDI4NDlkNzEwYTNjOGE1MTI5OWY5YjRjN2ViOWU2M2JlYWQ3MDliYTg3OTk1MTkxM2IwMTg2OTc2YzQ4OGJiZGVlYWE5ZDY5NThlMmU1OWRkNDkwODczMDQ0YjM2ZmFlZDdmNTliN2JhMmU5MmU2',
        //     },
        body: { lat: location.lat, long: location.long },
      });
      newChartData = await newChart.json();
      newChartData = await JSON.stringify(newChartData);
      return newChartData;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="starchart">
      <h3>Star Chart</h3>
      <div className="starchart-container">
        <img
          className="starchartData"
          src={fetchedStarChart()}
          // src="https://widgets.astronomyapi.com/star-chart/generated/2c45f375206472ab5f2b55be7445c77859fd8da5b5fcd171863b17a3b3fdd3cd.png"
        />
      </div>
    </div>
  );
};

export default StarChart;
