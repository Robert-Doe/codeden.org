import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomeScreen from './homepage/HomeScreen'
import AuthScreen from './auth/AuthScreen'
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
