import React from 'react';
import { useState } from 'react';
import Location from './location';
import StarChart from './starChart';
import MeteorMap from './meteorMap';

const MainBox = (props) => {
  const [location, setLocation] = useState({});

  const clickHandler = async (position) => {
    const newLoc = {};

    const success = (position) => {
      newLoc.coords = position.coords;
      newLoc.lat = position.latitude;
      newLoc.long = position.longitude;
    };
    const error = (err) => {
      console.error(err);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    await navigator.geolocation.getCurrentPosition(success, error, options);
    setLocation(newLoc);
  };

  return (
    <div className="mainbox">
      <div className="bubble">
        <Location location={location} clickHandler={clickHandler} />
      </div>
      <div className="bubble">
        <StarChart location={location} />
      </div>
      <div className="bubble">
        <MeteorMap location={location} />
      </div>
    </div>
  );
};

export default MainBox;
