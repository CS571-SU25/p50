import { useState, useEffect } from "react";

// SETTINGS: Adjust tax rate as needed
const TAX_RATE = 0.25;  // 25% for demonstration

function loadPortfolio() {
  const data = localStorage.getItem("portfolio");
  return data ? JSON.parse(data) : [];
}

export default function EstimatedTaxes() {
  const [tax, setTax] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    function computeTax() {
      const entries = loadPortfolio();
      const totalRevenue = entries
        .filter(e => e.type === "Revenue")
        .reduce((sum, e) => sum + Number(e.amount), 0);
      const totalExpense = entries
        .filter(e => e.type === "Expense")
        .reduce((sum, e) => sum + Number(e.amount), 0);
      const netProfit = totalRevenue - totalExpense;
      setProfit(netProfit);
      setTax(netProfit > 0 ? netProfit * TAX_RATE : 0);
    }
    computeTax();
    // Listen for storage events (e.g. if Portfolio changes)
    window.addEventListener("storage", computeTax);
    return () => window.removeEventListener("storage", computeTax);
  }, []);

  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 1px 5px #0001",
      padding: "2rem",
      maxWidth: 400,
      margin: "2rem auto",
      textAlign: "center"
    }}>
      <h1>Estimated Taxes</h1>
      <div style={{ fontSize: 38, color: "#eab308", fontWeight: "bold" }}>
        ${tax.toLocaleString(undefined, { maximumFractionDigits:0 })}
      </div>
      <div style={{ margin: "1rem 0 0.25rem", color: "#555" }}>
        <span style={{ fontSize: 14 }}>
          Based on Net Profit = <b>${profit.toLocaleString(undefined, { maximumFractionDigits:0 })}</b>
        </span>
      </div>
      <div style={{ fontSize: 13, color: "#999" }}>
        Rate: {Math.round(TAX_RATE * 100)}% (adjustable in code)
      </div>
    </div>
  );
}
