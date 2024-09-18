// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './Bio';
import Course from './Course';
import NewsUpdate from './NewsUpdate'; // Import the NewsUpdate component
import Navigation from './Navigation'; // Import the Navigation component
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* Use the Navigation component */}
        <main>
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/course" element={<Course />} />
            <Route path="/news-update" element={<NewsUpdate />} /> {/* Route for NewsUpdate component */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
