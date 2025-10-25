import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* Emails block is OUTSIDE the white card */}
        <div className="contact-emails">
          <p>Reach out to us directly at:</p>
          <p>
            <a href="mailto:lapalmer@bu.edu">lapalmer@bu.edu</a> or{' '}
            <a href="mailto:siya@bu.edu">siya@bu.edu</a>
          </p>
        </div>

        <div className="contact-container">
          <h1>Volunteer With Us</h1>
          <p>
            We're currently recruiting volunteers for Fall 2025 and Spring 2026. Let us know how you'd like to get involved!
          </p>

          {!submitted ? (
            <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault(); // Stop default behavior
              const form = e.target;
              const data = new FormData(form);
          
              fetch("https://formspree.io/f/xpwlalze", {
                method: "POST",
                body: data,
                headers: {
                  Accept: "application/json",
                },
              })
                .then((response) => {
                  if (response.ok) {
                    setSubmitted(true); // ✅ Show your thank-you message
                  } else {
                    response.json().then((data) => {
                      alert(data.error || "Submission failed. Please try again.");
                    });
                  }
                })
                .catch(() => {
                  alert("Submission error. Please try again.");
                });
            }}
          >
          
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          
          
          
              <label>
                Name*
                <input type="text" name="name" required />
              </label>

              <label>
                Email*
                <input type="email" name="email" required />
              </label>

              <div className="checkbox-row">
                <legend>When are you available?*</legend>
                <div className="checkbox-options">
                  <label>
                    <input type="checkbox" name="season" value="Summer 2025" /> Summer 2025
                  </label>
                  <label>
                    <input type="checkbox" name="season" value="Fall 2025" /> Fall 2025
                  </label>
                </div>
              </div>

              <div className="checkbox-row">
                <legend>What are you interested in?*</legend>
                <div className="checkbox-options">
                  <label>
                    <input type="checkbox" name="interest" value="Growing" /> Growing
                  </label>
                  <label>
                    <input type="checkbox" name="interest" value="Harvesting" /> Harvesting
                  </label>
                  <label>
                    <input type="checkbox" name="interest" value="Social Media" /> Social Media
                  </label>
                  <label>
                    <input type="checkbox" name="interest" value="Web Development" /> Web Development
                  </label>
                </div>
              </div>

              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="confirmation-message">
              <h2>Thank you for signing up!</h2>
              <p>We'll be in touch soon. 🌱</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
