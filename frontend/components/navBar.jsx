import React from 'react';
import WelcomeUser from './welcomeUser';
import Title from './title';
import Logout from './logout';
import Settings from './settings';

const NavBar = () => (
    <div className="navbar"> 
        <WelcomeUser />
        <Title />
        <Logout /> 
        <Settings />
    </div>
)

export default NavBar;