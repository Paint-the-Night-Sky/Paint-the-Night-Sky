import React from 'react';
import WelcomeUser from './welcomeUser';
import Title from './title';
import Logout from './logout';
import Settings from './settings';

// Let's assume for right now this guy is my parent
// The information we pass down is maybe just some functions that will redirect
// me wherever
// This Navbar is a container
const NavBar = (props) => {
    // functions for onclicks
    const titleClick = () => {
        console.log('titleClick')
        location.href = 'http://localhost:3030/';
    }

    const welcomeUserClick = () => {
        console.log('welcomeUserClick')
        location.href ='http://localhost:3030/user';
    }

    const logoutClick = () => {
        console.log('logoutClick')
        location.href = 'http://localhost:3030/logout';
    }

    const settingsClick = () => {
        console.log('settingsClick')
        location.href = 'http://localhost:3030/settings';
    }

    return (
        <div className="navbar">
            <WelcomeUser welcomeUserClick={welcomeUserClick} />
            <Title titleClick={titleClick}/>
            <div className='rightHeader'>
                <Settings settingsClick={settingsClick}/>
                <Logout logoutClick={logoutClick}/>
            </div>
        </div>
    )
};

export default NavBar;