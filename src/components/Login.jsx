import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const demoUser = JSON.parse(localStorage.getItem("demoUser"));
    if (
      demoUser &&
      demoUser.email === form.email &&
      demoUser.password === form.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify({ email: form.email }));
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      setMessage("Invalid email or password");
    }
  }

  return (
    <Container style={{ maxWidth: 400, marginTop: '4rem' }}>
      <h1 className="mb-4">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="loginEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder = "Enter email here"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </Form.Group>

        <Form.Group controlId="loginPassword" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder = "Enter password here"
            value={form.password}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </Form.Group>

        <Button type="submit" variant="dark" className="w-100">
          Login
        </Button>
      </Form>

      {message && (
        <Alert
          variant={message.startsWith("Login") ? "success" : "danger"}
          className="mt-3"
        >
          {message}
        </Alert>
      )}
    </Container>
  );
}
