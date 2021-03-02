import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div style={{margin:0, padding:0}}>
    <SimpleComponent />
    <SimplerComponent handleClick={ () => alert('😃😃😃😃😃😃') } />
  </div>,
  document.getElementById('root')
);