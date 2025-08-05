import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("loggedInUser");

  function handleLogout(e) {
    e.preventDefault(); // Prevent any default behavior
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

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

      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
        <Link to="/taxes" style={linkStyle}>Taxes</Link>
        <Link to="/about" style={linkStyle}>About</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        ) : (
          <a href="/login" onClick={handleLogout} style={linkStyle}>Logout</a>
        )}
      </nav>
    </header>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

export default Header;
