import React from 'react';
import Inner from "./inner";

const Wrapper = (props) => (
    <>
        <Inner label={'Sample label'} onButtonClick={props.onButtonClick} />
    </>
);

export default Wrapper;
