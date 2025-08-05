// components/Portfolio.jsx
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PortfolioForm from "./PortfolioForm";
import PortfolioTable from "./PortfolioTable";

function loadPortfolio() {
  const data = localStorage.getItem("portfolio");
  return data ? JSON.parse(data) : [];
}

function savePortfolio(entries) {
  localStorage.setItem("portfolio", JSON.stringify(entries));
  window.dispatchEvent(new Event("storage"));
}

export default function Portfolio() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(loadPortfolio());
  }, []);

  function handleAdd(entry) {
    const updated = [...entries, entry];
    setEntries(updated);
    savePortfolio(updated);
  }

  function handleRemove(id) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    savePortfolio(updated);
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Add Portfolio Entry</h1>
      <PortfolioForm onAdd={handleAdd} />

      <h2 className="mt-5 mb-3">Portfolio Entries</h2>
      <PortfolioTable entries={entries} onRemove={handleRemove} />
    </Container>
  );
}
