// src/pages/OurTeam.jsx
import React from "react";
import "./OurTeam.css";

const team = [
  {
    name: "Lydia Palmer",
    role: "Co-Leader",
    img: "src/assets/lydia.jpg",
    blurb:
      "Hi! I'm a junior at BU double majoring in computer science and physics with a minor in economics. Increasing access to healthy foods in nutrient-deficient communities is very important to me.",
    email: "lapalmer@bu.edu",
  },
  {
    name: "Siya Dahanukar",
    role: "Co-Leader",
    img: "src/assets/siya.jpg",
    blurb:
      "Hi! I am a junior studying Behavior and Health with a minor in Public Health at Sargent College. I am excited to link sustainability with community impact through our Aeroponics Project! ",
    email: "siya@bu.edu",
  },
  {
    name: "Karen Kong",
    role: "Lead Volunteer",
    img: "src/assets/karen.jpg",
    blurb:
      "I’m a sophomore Health Science major at Boston University from New York City",
    email: "karenk6@bu.edu",
  },
  {
    name: "Egor Sakhabutdinov",
    role: "Volunteer",
    img: "src/assets/egor.jpg",
    blurb:
      "I am a Biochemistry and Molecular Biology major at BU and I am from Pennsylvania.",
    email: "egorsakh@bu.edu",
  },
  {
    name: "Saina Anand",
    role: "Volunteer",
    img: "src/assets/saina.jpg",
    blurb:
      "I am an Economics and Mathematics major at BU and I am from Dubai, UAE.",
    email: "sainaand@bu.edu",
  },
  
];

export default function OurTeam() {
  return (
    <section className="team-hero">
      <div className="team-container">
        <header className="team-head">
          <h1>Our Team</h1>
          <p>
            Meet the volunteers who make our work possible, including our
            co-leaders Siya and Lydia.
          </p>

          <div className="green-divider">
            <span className="dot" />
          </div>
        </header>

        <ul className="team-grid">
          {team.map((m) => (
            <li key={m.name} className="member">
              <img className="avatar" src={m.img} alt={m.name} loading="lazy" />
              <h3 className="name">{m.name}</h3>
              <div className="role">{m.role}</div>
              <p className="blurb">{m.blurb}</p>
              <div className="email">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    d="M4 6h16v12H4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M4 7l8 6 8-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
                <a href={`mailto:${m.email}`}>{m.email}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
