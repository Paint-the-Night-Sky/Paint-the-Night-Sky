import React from 'react';
import Satellite from './satellite';
import MoonPhase from './moonPhase';
import Events from './events';
import Eventsreal from './eventsreal';

const sideBar = () => (
  <div className="sidebar">
    <div className="bubble">
      <Satellite />
    </div>
    <div className="bubble">
      <MoonPhase />
    </div>
    <div className="bubble">
      <Events />
    </div>
    <div className="bubble">
      <Eventsreal className="events-real" />
    </div>
  </div>
);

export default sideBar;
