import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navigation from "./navigation";
import MediaCard from "./cards";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <App />
    <MediaCard/>
  </React.StrictMode>
);
