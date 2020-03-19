import React from 'react';
import Loader from './components/loader';
import Wrapper from './components/wrapper';
import AlertComponent from './components/AlertComponent';
import StepperComponent from './components/StepperComponent';
import './index.css';

const message = 'Loading message';

const consoleLog = () => {
    console.log('clicked');
};

function App() {
    return (
        <>
            <section className={'component'}>
                <h2 className={'component__title'}>Loader</h2>
                <div className={'component__content'}>
                    <Loader show={true} message={message}/>
                </div>
            </section>

            <section className={'component'}>
                <h2 className={'component__title'}>Wrapper</h2>
                <div className={'component__content'}>
                    <Wrapper onButtonClick={consoleLog} />
                </div>
            </section>

            <section className={'component'}>
                <h2 className={'component__title'}>Alert</h2>
                <div className={'component__content'}>
                    <AlertComponent title={'Alert title'}>
                        Some text to hide
                    </AlertComponent>
                </div>
            </section>

            <section className={'component'}>
                <h2 className={'component__title'}>Stepper</h2>
                <div className={'component__content'}>
                    <StepperComponent steps={6}/>
                </div>
            </section>
        </>
    );
}

export default App;
