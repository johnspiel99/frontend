import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';
import Help from './components/Help';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Notes from './components/Notes';

const App = () => {
    const [showCarousel, setShowCarousel] = useState(true);

    // Function to handle showing the carousel only on the Home route
    const handleRouteChange = (route) => {
        if (route === '/home') {
            setShowCarousel(true);
        } else {
            setShowCarousel(false);
        }
    };

    // Function to check if a user is authenticated
    const isAuthenticated = () => {
        return localStorage.getItem('userId') !== null;
    };

    return (
        <Router>
            <Header />
            <div className="app-container">
                <Routes>
                    <Route path="/help" element={<Help />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Protected Route for Notes */}
                    <Route 
                        path="/notes" 
                        element={isAuthenticated() ? <Notes /> : <Navigate to="/login" />} 
                    />

                    {/* Redirect unknown paths to Home */}
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>

                {/* Conditionally render the Swiper carousel only on Home */}
                {showCarousel && <Carousel />}
            </div>
            <Footer />
        </Router>
    );
};

export default App;
