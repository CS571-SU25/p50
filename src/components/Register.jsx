import { useState } from "react";

// In a "real" app you would POST to an API:
// await fetch('/api/register', {method: 'POST', body: JSON.stringify(form)})
// For this mock, we'll just use localStorage for demo user registration.

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate storing the user
    localStorage.setItem("demoUser", JSON.stringify(form));
    setMessage("Account created! You can now login.");
    setForm({ email: "", password: "" });
  }

  return (
    <div style={{ maxWidth: 350, margin: "3rem auto", padding: 20, background: "#f9fafb", borderRadius: 8 }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          required
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 12, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          required
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 16, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: 10, borderRadius: 4, background: "#2C3E50", color: "white", border: "none" }}
        >
          Sign Up
        </button>
      </form>
      {message && <div style={{ color: "green", marginTop: 10 }}>{message}</div>}
    </div>
  );
}
