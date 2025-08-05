import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("demoUser", JSON.stringify(form));
    setMessage("Account created! You can now login.");
    setForm({ email: "", password: "" });
  }

  return (
    <Container style={{ maxWidth: 400, marginTop: "4rem" }}>
      <h1 className="mb-4">Register/Create Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="registerEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email here"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </Form.Group>

        <Form.Group controlId="registerPassword" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password here"
            value={form.password}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </Form.Group>

        <Button type="submit" variant="dark" className="w-100">
          Sign Up
        </Button>
      </Form>

      {message && (
        <Alert variant="success" className="mt-3">
          {message}
        </Alert>
      )}
    </Container>
  );
}
