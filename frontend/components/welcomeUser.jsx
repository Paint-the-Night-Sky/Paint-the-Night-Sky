import React from 'react';

const WelcomeUser = (props) => {
    return (
        <div className="welcomeuser" onClick={props.welcomeUserClick}>
            <h4> Welcome, User</h4>
        </div>
    )
}

export default WelcomeUser;