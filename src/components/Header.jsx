import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      background: '#2C3E50',
      padding: '1rem 2rem',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Business Finances</span>
      <nav>
        <Link to="/home" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/dashboard" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/portfolio" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Portfolio</Link>
        <Link to="/taxes" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Taxes</Link>
        <Link to="/about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>About</Link>
        <Link to="/login" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Register</Link>
        
      </nav>
    </header>
  );
}

export default Header;
