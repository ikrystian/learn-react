import React from 'react';
import Button from './button';


const Inner = (props) => (
    <>
        <Button label={props.label} onButtonClick={props.onButtonClick} />
    </>
);

export default Inner;
