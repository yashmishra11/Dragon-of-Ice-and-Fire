import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'; // Import the HomePage component

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className='heading'>
          <h1>Dragons Of Ice & Fire</h1>
          </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
