// src/pages/Partners.jsx
import React from 'react';
import './Partners.css'; // Don't forget to create this CSS file

function Partners() {
  return (
    <div className="partners">
      <div className="partners-content">
        <h1>Our Partners</h1>
        <p>
          Our work wouldn’t be possible without the support of dedicated campus and community organizations.
        </p>

        <div className="partner-box">
          <h2>Student Food Rescue (SFR)</h2>
          <p>
          SFR is one of the oldest food rescue programs in the country, run by students through BU’s Community Service Center (CSC). Volunteers collect surplus food from local grocery stores, bakeries, and restaurants and deliver it to local food pantries, shelters, and meal programs.
          </p>

          <p>
          Through our partnership with SFR, we are donating the fresh produce grown in our vertical aeroponic towers to local food banks and shelters. These nutrient-rich greens will be used to supplement meals for individuals experiencing food insecurity. As we continue to monitor each tower’s yield, we aim to quantify how many people it can help meet the USDA’s recommended daily vegetable intake — allowing us to better understand and communicate its nutritional impact.
          </p>


          <a href="https://www.bu.edu/csc/programs/sfr/" target="_blank" rel="noopener noreferrer">
            Learn more about SFR
          </a>
        </div>

        <div className="partner-box">
          <h2>Community Service Center (CSC)</h2>
          <p>
            The CSC empowers BU students to engage with the community through service and leadership. It hosts multiple programs, including SFR, FYSOP, and Alternative Service Breaks, that align with our mission of sustainability and social impact.
          </p>
          <a href="https://www.bu.edu/csc/" target="_blank" rel="noopener noreferrer">
            Visit the CSC Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
