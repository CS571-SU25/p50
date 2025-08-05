import React from 'react';
import './About.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Business Finances</h1>
        <p>
          <strong>Business Finances</strong> was created to empower startups and small businesses to easily track, understand, and manage their finances. Financial literacy is often overlooked, so our team set out to build an intuitive platform where anyone can master their business’s financial health.
        </p>
      </section>

      <section className="about-values">
        <div className="value-card">
          <h2>Our Mission</h2>
          <p>
            To simplify financial management for new businesses, providing accessible tools to monitor revenue, expenses, profits, and tax estimates—all in one place.
          </p>
        </div>
        <div className="value-card">
          <h2>Our Vision</h2>
          <p>
            A world where every entrepreneur and small business owner can confidently understand and control their finances, enabling sustainable growth from day one.
          </p>
        </div>
      </section>

      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions or feedback? Reach out at{' '}
          <a href="mailto:info@businessfinances.com">info@businessfinances.com</a>.
        </p>
      </section>
    </div>
  );
}
