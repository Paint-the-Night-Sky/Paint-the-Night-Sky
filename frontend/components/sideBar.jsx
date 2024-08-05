import React from 'react';
import Satellite from './satellite';
import MoonPhase from './moonPhase';
import Events from './events';

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
    </div>
);

export default sideBar;