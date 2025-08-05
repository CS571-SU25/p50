// src/pages/NotFound.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1>404 – Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/home">
        <Button variant="primary">Return Home</Button>
      </Link>
    </Container>
  );
}
