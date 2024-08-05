import React from 'react';
import { useState, useEffect } from 'react';

const MeteorMap = (props) => {
  const [meteor, setMeteor] = useState(null);
  const [mapData, setMapData] = useState(null);

  const handleSelect = async (val) => {
    try {
      const response = await fetch('http:www.localhost:3000/api/meteorData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lat: 30,
          long: -74,
        }),
      });
      const data = await response.json();
      setMapData(data.data.meteorData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleSelect(meteor);
  }, [meteor]);

  return (
    <div className="meteormap">
      <h3>MeteorMap</h3>
      <label>Select Meteor Shower</label>
      <select
        className="meteor-map-menu"
        name="Select Meteor"
        onChange={(e) => {
          setMeteor(e.target.value);
          handleSelect(meteor);
        }}
      >
        <option value="geminids">Geminids</option>
        <option value="perseids">Pereids</option>
        <option value="quadrantids">Quadrantids</option>
        <option value="eta_aquariids">Eta Aquariids</option>
      </select>
      <div className="meteor-map-container">
        <img src={'https://www.meteomatics.com/cms-image-resizer?src=9_Documentation-Assets%2Fmeteor_shower_visibility_example.png&q=75&w=1920'} alt="Meteor Map"></img>
      </div>
    </div>
  );
};

export default MeteorMap;
