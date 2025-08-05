// components/StatCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

export default function StatCard({ title, value, bg = 'light', text = 'dark' }) {
  return (
    <Card
      bg={bg}
      text={text}
      className="mb-3 shadow-sm"
      role="region"
      aria-label={`${title} card showing ${value}`}
      style={{ minWidth: 180, flexGrow: 1 }}
    >
      <Card.Body>
        <Card.Title as="h3" style={{ fontSize: '1.25rem' }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ${Number(value).toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
