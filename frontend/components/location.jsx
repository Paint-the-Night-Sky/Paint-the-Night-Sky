import React from 'react';
import { useState } from 'react';

const Location = (props) => {
  const { clickHandler } = props;

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
        type="submit"
        onClick={(e) => clickHandler()}
      >
        Submit
      </button>
    </div>
  );
};

export default Location;
