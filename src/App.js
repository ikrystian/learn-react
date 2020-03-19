import React from 'react';
import Loader from './components/loader';
import Wrapper from './components/wrapper';
import AlertComponent from "./components/AlertComponent";

const message = 'Loading message';

const consoleLog = () => {
    console.log('clicked');
};


function App() {
    return (
        <>
            <Loader show={true} message={message}/>
            <Wrapper onButtonClick={consoleLog} />
            <AlertComponent title={'Alert title'}>
                Some text to hide
            </AlertComponent>
        </>
    );
}

export default App;
