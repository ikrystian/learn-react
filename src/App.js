import React from 'react';
import Loader from './components/loader';
import Wrapper from './components/wrapper';
const message = 'Loading message';

const consoleLog = () => {
    console.log('clicked');
};

function App() {
    return (
        <>
            <Loader show={true} message={message}/>
            <Wrapper onButtonClick={consoleLog} />
        </>
    );
}

export default App;
