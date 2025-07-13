// src/pages/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">

      {/* LEFT vine and leaves together in one wrapper */}
      <div className="vine-wrapper left-vine">
        <img src="/images/OneVine.png" className="vine" alt="Left vine" />
        <div className="leaf leaf1"><img src="/images/leaf1.png" alt="Leaf 1" /></div>
        <div className="leaf leaf2"><img src="/images/leaf2.png" alt="Leaf 2" /></div>
        <div className="leaf leaf3"><img src="/images/leaf2.png" alt="Leaf 3" /></div>
        <div className="leaf leaf7"><img src="/images/leaf1.png" alt="Leaf 7" /></div>
        <div className="leaf leaf8"><img src="/images/leaf3.png" alt="Leaf 8" /></div>
      </div>

      {/* RIGHT vine and leaves together in one wrapper */}
      <div className="vine-wrapper right-vine">
        <img src="/images/OneVine.png" className="vine" alt="Right vine" />
        <div className="leaf leaf4"><img src="/images/leaf1.png" alt="Leaf 4" /></div>
        <div className="leaf leaf5"><img src="/images/leaf2.png" alt="Leaf 5" /></div>
        <div className="leaf leaf6"><img src="/images/leaf2.png" alt="Leaf 6" /></div>
        <div className="leaf leaf9"><img src="/images/leaf3.png" alt="Leaf 9" /></div>
        <div className="leaf leaf10"><img src="/images/leaf1.png" alt="Leaf 10" /></div>
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
