import React from 'react';

const Title = (props) => {
    return (
        <div className="title" onClick={props.titleClick}>
            <h1>Paint The Night Sky</h1>
        </div>
    )
};

export default Title;