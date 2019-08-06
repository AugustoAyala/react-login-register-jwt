import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './components/Routes';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
