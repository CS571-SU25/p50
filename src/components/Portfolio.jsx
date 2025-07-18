import { useState, useEffect } from "react";

// Use localStorage OR swap to sessionStorage if desired
const storage = localStorage;

// Helper to load/save entries
function loadPortfolio() {
  const data = storage.getItem("portfolio");
  return data ? JSON.parse(data) : [];
}

function savePortfolio(entries) {
  storage.setItem("portfolio", JSON.stringify(entries));
  // Notify dashboard (in case it's open in another tab)
  window.dispatchEvent(new Event("storage"));
}

// Generate a unique id (timestamp + random) for each entry
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

export default function Portfolio() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    type: "Revenue",
    amount: "",
    notes: "",
    date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
  });

  useEffect(() => {
    setEntries(loadPortfolio());
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      ...form,
      amount: Number(form.amount),
      date: form.date || new Date().toISOString().slice(0, 10),
      id: generateId(), // Unique id for deletion and React key
    };
    const updated = [...entries, newEntry];
    setEntries(updated);
    savePortfolio(updated);
    setForm({
      type: "Revenue",
      amount: "",
      notes: "",
      date: new Date().toISOString().slice(0, 10),
    });
  }

  // Remove entry by id
  function handleRemove(id) {
    const updated = entries.filter(e => e.id !== id); // Remove by id[1][2][4][5][6][10]
    setEntries(updated);
    savePortfolio(updated);
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20 }}>
      <h2>Add Portfolio Entry</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "flex", gap: 12, flexWrap: "wrap" }}>
        <select name="type" value={form.type} onChange={handleChange}>
          <option>Revenue</option>
          <option>Expense</option>
        </select>
        <input
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          type="number"
          min="0"
          required
          style={{ width: 110 }}
        />
        <input
          name="notes"
          placeholder="Notes (e.g., category)"
          value={form.notes}
          onChange={handleChange}
          style={{ width: 170 }}
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          style={{ width: 130 }}
        />
        <button type="submit" style={{ padding: "0 16px" }}>Add</button>
      </form>
      <h3>Portfolio Entries</h3>
      <table style={{ width: "100%", background: "#fff", borderRadius: 8, boxShadow: "0 1px 5px #eee", fontSize: 16 }}>
        <thead>
          <tr style={{ background: "#f5f7fa" }}>
            <th style={{ padding: 8 }}>Type</th>
            <th>Amount</th>
            <th>Category/Notes</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ color: "#888", textAlign: "center", padding: 16 }}>
                No portfolio entries yet.
              </td>
            </tr>
          ) : (
            entries.map((e) => (
              <tr key={e.id}>
                <td style={{ padding: 8 }}>{e.type}</td>
                <td>${Number(e.amount).toLocaleString()}</td>
                <td>{e.notes}</td>
                <td>{e.date}</td>
                <td>
                  <button
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: 4,
                      padding: "3px 8px",
                      cursor: "pointer"
                    }}
                    onClick={() => handleRemove(e.id)}
                    aria-label="Remove this entry"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
