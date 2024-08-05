import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';

const MeteorMap = (props) => {
  const [meteor, setMeteor] = useState('');

  const handleSelect = async (val) => {
    fetch('http:www.localhost:3000/api/meteorData', {
      'Content-Type': 'application/json',
    });
  };

=======
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

>>>>>>> 94f959dfbcb5fd79380acf894222680966a58bf0
  return (
    <div className="meteormap">
      <h3>MeteorMap</h3>
      <label>Select Meteor Shower</label>
      <select
<<<<<<< HEAD
        className="meteor-shower-menu"
        name="Select Meteor"
        onSelect={(e) => {
=======
        className="meteor-map-menu"
        name="Select Meteor"
        onChange={(e) => {
>>>>>>> 94f959dfbcb5fd79380acf894222680966a58bf0
          setMeteor(e.target.value);
          handleSelect(meteor);
        }}
      >
        <option value="geminids">Geminids</option>
        <option value="perseids">Pereids</option>
        <option value="quadrantids">Quadrantids</option>
        <option value="eta_aquariids">Eta Aquariids</option>
      </select>
<<<<<<< HEAD
=======
      <div className="meteor-map-container">
        <img src={mapData} alt="Meteor Map"></img>
      </div>
>>>>>>> 94f959dfbcb5fd79380acf894222680966a58bf0
    </div>
  );
};

export default MeteorMap;
