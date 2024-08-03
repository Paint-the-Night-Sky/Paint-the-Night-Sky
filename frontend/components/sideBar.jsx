import React from 'react';
import Satellite from './satellite';
import MoonPhase from './moonPhase';
import Events from './events';

const sideBar = () => (
  <div className="sidebar">
    <Satellite />
    <MoonPhase />
    <Events />
  </div>
);

export default sideBar;