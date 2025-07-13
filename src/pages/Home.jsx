// Importing React so we can define a React component
import React from 'react';
// Importing the CSS styling specific to this component
import './Home.css';
// Importing a background image from the assets folder
import backgroundImage from '../assets/background.jpeg';

import { Link } from 'react-router-dom';


// This is a functional React component called Home
export default function Home() {
  return (
    // This div is the outermost container, with a background image set via inline styles
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* This is an overlay to darken the background and make text easier to read */}
      <div className="overlay">
        {/* This div contains the actual visible content: heading, text, button */}
        <div className="hero-content">
          <h1>Empowering Communities Through Aeroponics</h1>
          <p>Using sustainable farming to fight food insecurity on campus and in surrounding communities.</p>
          <Link to="/about">
            <button className="learn-more-button">Learn More</button>
          </Link>

        </div>
      </div>
    </div>
  );
}
