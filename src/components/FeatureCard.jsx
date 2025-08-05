// src/components/FeatureCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

export default function FeatureCard({ icon, title, description }) {
  return (
    <Card className="mb-4 shadow-sm h-100" role="region" aria-label={title}>
      <Card.Body>
        <Card.Title as="h3" style={{ fontSize: '1.2rem' }}>
          <span role="img" aria-label={title} style={{ marginRight: '0.5rem' }}>{icon}</span>
          {title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
