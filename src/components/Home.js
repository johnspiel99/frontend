import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Import your CSS file

const Home = () => {
  return (
    <header className="home-header">
      <h1>
        The simplest way <br /> to keep notes
      </h1>
      <h2>Note Taking App</h2>
      <p>
        All your notes, synced on all your devices. Get Simplenote now for iOS,
        <br /> Android, Mac, Windows, Linux, or in your browser.
      </p>
      <Link to="/signup">
        <button className="signup-button">Sign Up Now</button>
      </Link>
    </header>
  );
};

export default Home;
