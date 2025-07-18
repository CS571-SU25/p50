import { useState } from "react";
import { useNavigate } from "react-router-dom";

// In a real app, POST form to /api/login and get a real response/token.
// We'll "authenticate" by comparing against localStorage.

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate "fetch" from a backend by loading from localStorage
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
    <div style={{
      maxWidth: 320,
      margin: '5rem auto',
      padding: 30,
      borderRadius: 8,
      background: '#f9fafb',
      boxShadow: '0 2px 8px #eee'
    }}>
      <h2 style={{ marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          required
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          required
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 20, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{
          width: '100%',
          padding: 10,
          borderRadius: 4,
          background: '#2C3E50',
          color: 'white',
          border: 'none',
          fontWeight: 'bold'
        }}>
          Login
        </button>
      </form>
      {message && <div style={{ marginTop: 12, color: message.startsWith("Login") ? "green" : "red" }}>{message}</div>}
    </div>
  );
}
