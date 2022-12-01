import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

//import reportWebVitals from './reportWebVitals';
//https://demos.creative-tim.com/material-kit-material-ui-v4/?_ga=2.68751383.70325619.1669357616-196990688.1669357616#/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
       <App />
    </Router>
    );

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<React.StrictMode><App /></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
