import React from 'react';

const Logout = (props) => {
    return (
        <div className="logout" onClick={props.logoutClick}>
            
            <h5>Logout</h5>
        </div>
    )
}

export default Logout;
