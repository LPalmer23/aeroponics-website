// src/pages/About.jsx
import React from 'react';
import './About.css';

import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';
import leaf3 from '../assets/leaf3.png';
import vine from '../assets/OneVine.png';


function About() {
  return (
    <div className="about-container">

      {/* LEFT vine and leaves together in one wrapper */}
      <div className="vine-wrapper left-vine">
        <img src={vine} className="vine" alt="Left vine" />
        <div className="leaf leaf1"><img src={leaf1} alt="Leaf 1" /></div>
        <div className="leaf leaf2"><img src={leaf2} alt="Leaf 2" /></div>
        <div className="leaf leaf3"><img src={leaf2} alt="Leaf 3" /></div>
        <div className="leaf leaf7"><img src={leaf1} alt="Leaf 7" /></div>
        <div className="leaf leaf8"><img src={leaf3} alt="Leaf 8" /></div>
      </div>

      {/* RIGHT vine and leaves together in one wrapper */}
      <div className="vine-wrapper right-vine">
        <img src={vine} className="vine" alt="Right vine" />
        <div className="leaf leaf4"><img src={leaf1} alt="Leaf 4" /></div>
        <div className="leaf leaf5"><img src={leaf2} alt="Leaf 5" /></div>
        <div className="leaf leaf6"><img src={leaf2} alt="Leaf 6" /></div>
        <div className="leaf leaf9"><img src={leaf3} alt="Leaf 9" /></div>
        <div className="leaf leaf10"><img src={leaf1} alt="Leaf 10" /></div>
      </div>

      {/* Centered Content */}
      <div className="about-content">
        <h1>About Our Aeroponics Project</h1>
        <p>
          Funded by Boston University’s Campus Climate Lab and guided by faculty in the Department of Earth & Environment, our team is researching how aeroponic farming, when implemented within pre-existing infrastructure, can contribute to addressing food insecurity and reducing emissions from traditional agricultural practices. By documenting the exact energy, water, and operational inputs required to sustain aeroponic tower systems, we aim to assess the viability of this approach as a scalable, climate-conscious supplement to conventional food systems.
          </p>

          <p>
          Our research also examines the collapse of recent commercial vertical farming ventures, despite billions in investment, to identify key operational pitfalls and inform more resilient, localized implementation strategies. By conserving space, water, and time, aeroponic systems offer measurable environmental benefits, including substantial reductions in carbon emissions. Our goal is to leverage these benefits while avoiding the challenges that hindered previous large-scale models.
        </p>
      </div>
    </div>
  );
}

export default About;
