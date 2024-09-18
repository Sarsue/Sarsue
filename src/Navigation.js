// Example of a simple mobile-friendly navigation component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="header">
            <h1 className="company-name">Osas Inc.</h1>
            <h2 className="tagline">Product Engineer | Tech Consultant</h2>
            <p className="description">
                Specializing in bringing innovative ideas to market with expertise in design, product management, full-stack development, AI, infra , db optimization, and DevOps.
                I am interested in learning about online Marketing but a wise man told me a craftsman artistry does the marketing and sales.
            </p>
            <nav>
                <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
                    ☰
                </button>
                <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to="/news-update">News</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
