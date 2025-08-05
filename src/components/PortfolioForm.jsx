// components/PortfolioForm.jsx
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function PortfolioForm({ onAdd }) {
  const [form, setForm] = useState({
    type: "Revenue",
    amount: "",
    notes: "",
    date: new Date().toISOString().slice(0, 10),
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      ...form,
      amount: Number(form.amount),
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    };
    onAdd(newEntry);
    setForm({
      type: "Revenue",
      amount: "",
      notes: "",
      date: new Date().toISOString().slice(0, 10),
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3">
        <Col md={2}>
          <Form.Group controlId="entryType">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            >
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
          <Button type="submit" variant="success" className="w-100">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
