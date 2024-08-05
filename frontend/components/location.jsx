import React from 'react';
import { useState } from 'react';

const Location = (props) => {
  const { clickHandler } = props;


  const successFunc = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
    clickHandler(latitude,longitude)
  }

  return (
    <div className="location">
      <h3>Location</h3>
      <input
        className="location-input"
        type="text"
        placeholder="Provide an address or zip code"
      ></input>
      
      <button
        className="location-submit"
        type="button"
        onClick={() => navigator.geolocation.getCurrentPosition(successFunc)}>
        Submit
      </button>
    </div>
  );
};

export default Location;
