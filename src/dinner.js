import React from 'react';

function Dinner(props){
    return (
        <React.Fragment>
            <h1>{props.dishName} | Servings: {props.serving}</h1>
        </React.Fragment>
    );
}

export default Dinner;