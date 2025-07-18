import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const FEATURES = [
  {
    icon: '📊',
    title: 'Easy Financial Tracking',
    description:
      'Monitor your business revenue and expenses with a clean, intuitive dashboard.',
  },
  {
    icon: '📈',
    title: 'Profit & Cost Analysis',
    description:
      'See your projected profits, stay on top of costs, and estimate your tax burden automatically.',
  },
  {
    icon: '🔒',
    title: 'Account Security',
    description:
      'Your financial information is private and protected, accessible only to you.',
  },
  {
    icon: '💡',
    title: 'Personalized Insights',
    description:
      'Get suggestions on how to save money and boost your financial health as you grow.',
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Business Finances</h1>
        <p>
          Empower your startup or small business with smarter financial management. Track revenue, expenses, and profits—all with a few clicks.
        </p>
        <Link to="/login" className="btn cta">
          Get Started
        </Link>
      </section>

      <section className="features">
        {FEATURES.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
