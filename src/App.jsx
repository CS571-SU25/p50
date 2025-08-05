import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import EstimatedTaxes from "./components/EstimatedTaxes";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router basename="/p50">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/taxes" element={<EstimatedTaxes />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
