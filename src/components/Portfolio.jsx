import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Table, Badge } from "react-bootstrap";

const storage = localStorage;

function loadPortfolio() {
  const data = storage.getItem("portfolio");
  return data ? JSON.parse(data) : [];
}

function savePortfolio(entries) {
  storage.setItem("portfolio", JSON.stringify(entries));
  window.dispatchEvent(new Event("storage"));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

export default function Portfolio() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    type: "Revenue",
    amount: "",
    notes: "",
    date: new Date().toISOString().slice(0, 10),
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
      id: generateId(),
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

  function handleRemove(id) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    savePortfolio(updated);
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Add Portfolio Entry</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={2}>
            <Form.Group controlId="entryType">
              <Form.Label>Type</Form.Label>
              <Form.Select name="type" value={form.type} onChange={handleChange} required>
                <option>Revenue</option>
                <option>Expense</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="entryAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
                min="0"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="entryNotes">
              <Form.Label>Category/Notes</Form.Label>
              <Form.Control
                type="text"
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="entryDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button type="submit" variant="success" className="w-100">Add</Button>
          </Col>
        </Row>
      </Form>

      <h2 className="mt-5 mb-3">Portfolio Entries</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted">No portfolio entries yet.</td>
            </tr>
          ) : (
            entries.map((e) => (
              <tr key={e.id}>
                <td>
                  <Badge bg={e.type === "Revenue" ? "success" : "danger"}>
                    {e.type}
                  </Badge>
                </td>
                <td>${Number(e.amount).toLocaleString()}</td>
                <td>{e.notes}</td>
                <td>{e.date}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemove(e.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}
