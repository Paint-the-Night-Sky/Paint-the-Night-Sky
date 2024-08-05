import React from 'react';
import { useState } from 'react';

const MeteorMap = (props) => {
  const [meteor, setMeteor] = useState('');

  const handleSelect = async (val) => {
    fetch('http:www.localhost:3000/api/meteorData', {
      'Content-Type': 'application/json',
    });
  };

  return (
    <div className="meteormap">
      <h3>MeteorMap</h3>
      <label>Select Meteor Shower</label>
      <select
        className="meteor-shower-menu"
        name="Select Meteor"
        onSelect={(e) => {
          setMeteor(e.target.value);
          handleSelect(meteor);
        }}
      >
        <option value="geminids">Geminids</option>
        <option value="perseids">Pereids</option>
        <option value="quadrantids">Quadrantids</option>
        <option value="eta_aquariids">Eta Aquariids</option>
      </select>
    </div>
  );
};

export default MeteorMap;
