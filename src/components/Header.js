import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import your CSS file

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        document.body.classList.toggle('dark-mode', savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        document.body.classList.toggle('dark-mode', newMode);
    };

    return (
        <header className="App-header">
            <nav>
                <ul>
                    <li><Link to="/home" className="nav-button">Home</Link></li>
                    <li><Link to="/contact" className="nav-button">Contact Us</Link></li>
                    <li><Link to="/help" className="nav-button">Help</Link></li>
                    <li><Link to="/blog" className="nav-button">Blog</Link></li>
                    <li><Link to="/login" className="nav-button">Log In</Link></li>
                    <li><Link to="/signup" className="nav-button">Sign Up</Link></li>
                    <li>
                        <button onClick={toggleDarkMode} className="nav-button mode-toggle">
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
