import React, { useState, useEffect } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

// Chart colors
const PIE_COLORS = ["#22C55E", "#F87171"];
const LINE_COLOR = "#4F46E5";
const BAR_COLOR = "#6366f1";
const BG_COLOR = "#fff";

// Helper: Prepare data from localStorage portfolio
function getPortfolioData() {
  const saved = localStorage.getItem("portfolio");
  const entries = saved ? JSON.parse(saved) : [];

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Monthly Revenue (for both line/bar)
  const monthlyRevenue = Array(12).fill(0);

  let totalRevenue = 0;
  let totalExpense = 0;

  for (const entry of entries) {
    const dateObj = entry.date ? new Date(entry.date) : new Date();
    const m = dateObj.getMonth();
    if (entry.type === "Revenue") {
      totalRevenue += Number(entry.amount);
      monthlyRevenue[m] += Number(entry.amount);
    } else if (entry.type === "Expense") {
      totalExpense += Number(entry.amount);
    }
  }

  // Pie Data (Income vs Expenses)
  const pieData = [
    { name: "Income", value: totalRevenue },
    { name: "Expenses", value: totalExpense }
  ];

  // Data for line and bar chart (monthly)
  const monthlyData = months.map((month, i) => ({
    month,
    Revenue: monthlyRevenue[i]
  }));

  const netProfit = totalRevenue - totalExpense;
  return { pieData, monthlyData, totalRevenue, totalExpense, netProfit };
}

export default function Dashboard() {
  const [data, setData] = useState({
    pieData: [{ name: "Income", value: 0 }, { name: "Expenses", value: 0 }],
    monthlyData: Array(12).fill({ month: "", Revenue: 0 }),
    totalRevenue: 0,
    totalExpense: 0,
    netProfit: 0
  });

  useEffect(() => {
    function update() {
      setData(getPortfolioData());
    }
    update();
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);

  return (
    <div style={{ padding: "2rem max(2vw,16px)" }}>
      <h1 style={{ marginBottom: 24 }}>Dashboard</h1>
      {/* Stat Cards */}
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginBottom: 40 }}>
        <StatCard label="Total Revenue" value={data.totalRevenue} color="#22C55E" />
        <StatCard label="Total Expenses" value={data.totalExpense} color="#F87171" />
        <StatCard label="Net Profit" value={data.netProfit} color="#2563EB" />
      </div>

      {/* Charts Container */}
      <div style={{ display: "flex", gap: 36, flexWrap: "wrap", justifyContent: "flex-start" }}>
        {/* Pie chart: Income vs Expenses */}
        <div style={{
          width: 370,
          background: BG_COLOR,
          borderRadius: 12,
          boxShadow: "0 1px 5px #0001",
          padding: 18
        }}>
          <h3 style={{ margin: 0, marginBottom: 8 }}>Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={data.pieData}
                dataKey="value"
                nameKey="name"
                cx="50%" cy="50%" outerRadius={85}
                label
              >
                {data.pieData.map((entry, idx) => (
                  <Cell key={entry.name} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={value => `$${value.toLocaleString()}`} />
              <Legend verticalAlign="bottom" height={32} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line chart: Monthly Income */}
        <div style={{
          minWidth: 320,
          flex: 1,
          maxWidth: 600,
          background: BG_COLOR,
          borderRadius: 12,
          boxShadow: "0 1px 5px #0001",
          padding: 18
        }}>
          <h3 style={{ margin: 0, marginBottom: 8 }}>Monthly Income (Line Chart)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={value => `$${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="Revenue" stroke={LINE_COLOR} strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar chart: Monthly Income */}
        <div style={{
          minWidth: 320,
          flex: 1,
          maxWidth: 600,
          background: BG_COLOR,
          borderRadius: 12,
          boxShadow: "0 1px 5px #0001",
          padding: 18
        }}>
          <h3 style={{ margin: 0, marginBottom: 8 }}>Monthly Income (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={data.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={value => `$${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="Revenue" fill={BAR_COLOR} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div style={{
      flexGrow: 1,
      minWidth: 180,
      background: "#fff",
      padding: "1.2rem 2rem",
      borderRadius: 12,
      boxShadow: "0 1px 6px #0001"
    }}>
      <div style={{ color, fontWeight: "600", fontSize: 22 }}>
        ${Number(value).toLocaleString()}
      </div>
      <div style={{
        color: "#1e293b",
        fontWeight: "500",
        fontSize: 15,
        marginTop: 8
      }}>
        {label}
      </div>
    </div>
  );
}
