import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomeScreen from './homepage/HomeScreen'

ReactDOM.render(
  <React.StrictMode>
      <div>
          <HomeScreen/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
