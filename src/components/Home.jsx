// src/pages/Home.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const FEATURES = [
  {
    icon: '📊',
    title: 'Easy Financial Tracking',
    description: 'Monitor your business revenue and expenses with a clean, intuitive dashboard.',
  },
  {
    icon: '📈',
    title: 'Profit & Cost Analysis',
    description: 'See your projected profits, stay on top of costs, and estimate your tax burden automatically.',
  },
  {
    icon: '🔒',
    title: 'Account Security',
    description: 'Your financial information is private and protected, accessible only to you.',
  },
  {
    icon: '💡',
    title: 'Personalized Insights',
    description: 'Get suggestions on how to save money and boost your financial health as you grow.',
  },
];

export default function Home() {
  return (
    <Container className="mt-5">
      <section className="text-center mb-5">
        <h1>Business Finances</h1>
        <p>
          Empower your startup or small business with smarter financial management.
          Track revenue, expenses, and profits—all with a few clicks.
        </p>
        <Link to="/login">
          <Button variant="primary">Get Started</Button>
        </Link>
      </section>

      <section>
        <Row xs={1} md={2} lg={2} className="g-4">
          {FEATURES.map((feature, index) => (
            <Col key={index}>
              <FeatureCard {...feature} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}
