import React from 'react';
import './Loader.css';

// A component which will render a spinner until data is fetched from component
const Loader = () =>  {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
}

export default Loader;