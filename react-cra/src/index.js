import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StarshipFleet from './StarshipFleet';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
// ReactDOM.render(<StarshipFleet />, root);
