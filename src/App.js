import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Editor from './components/Editor';
import ContactDetails from './components/ContactDetails';
import Login from './components/Login'; // Import the Login component
import './App.css';

const App = () => {
    const [showEditor, setShowEditor] = useState(false);

    const handleBlogButtonClick = () => {
        setShowEditor(!showEditor); // Toggle the visibility of the Editor
    };

    return (
        <Router>
            <Header />
            <nav className="navbar">
                <ul>
                    <li>
                        <button onClick={handleBlogButtonClick}>Blog</button>
                    </li>
                    {/* Add other navigation items here */}
                </ul>
            </nav>
            {showEditor && <Editor />}
            <Routes>
                <Route path='/ContactDetails' element={<ContactDetails />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} /> {/* Add the Login route */}
                <Route path="/Blog" element={<Blog />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
