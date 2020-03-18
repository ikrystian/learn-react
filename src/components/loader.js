import React from 'react';

const Loader = (props) => (
    <div>
        {
            (props.show) ? (props.message || 'Loading') : null
        }
    </div>
);

export default Loader;
