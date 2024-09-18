// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Bio from './Bio';
import Course from './Course';
import NewsUpdate from './NewsUpdate'; // Import the NewsUpdate component
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <h1 className="company-name">Osas Inc.</h1>
          <h2 className="tagline">Product Engineer | Tech Consultant </h2>
          <p className="description">
            Specializing in bringing innovative ideas to market with expertise in design, product management, full-stack development, AI, infra , db optimization,  and DevOps.
            I am interested in learning about online Marketing but a wise man told me a craftsman artistry does the marketing and sales.
          </p>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/course">Course</Link></li>
              <li><Link to="/news-update">Post News</Link></li> {/* Link to the NewsUpdate component */}
            </ul>
          </nav>
        </header>

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
