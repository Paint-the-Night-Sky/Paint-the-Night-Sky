import React from "react";
import Location from './location';
import StarChart from './starChart';
import MeteorMap from './meteorMap';

const MainBox = () => (
    <div className="mainbox">
      <div className="bubble">
        <Location />
      </div>
      <div className="bubble">
        <StarChart />
      </div>
      <div className="bubble">
        <MeteorMap />
      </div>
    </div>
  );

export default MainBox;