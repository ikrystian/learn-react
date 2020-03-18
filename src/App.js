import React from 'react';
import Loader from './components/loader';

const message = 'Loading message';

function App() {
  return (
   <>
        <Loader show={true} message={message} />
   </>
  );
}

export default App;
