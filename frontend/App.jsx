import React from "react";
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import MainBox from './components/mainBox';
import './App.scss';

const App = () => (
  <div className="main-container">
    <div className="navbar">
      <NavBar />
    </div>
    <div className="content">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="mainbox">
        <MainBox />
      </div>
    </div>
  </div>
);

export default App;