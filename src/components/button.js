import React from 'react';

const Button = (props) => (
    <>
        <button onClick={props.onButtonClick}>{props.label || 'Loading'}</button>
    </>
);

export default Button;
