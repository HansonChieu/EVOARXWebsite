import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

interface NavbarProps {
  theme?: 'dark' | 'light' | 'page'
}

export default function Navbar({ theme = 'dark' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className={`navbar navbar--${theme}`}>
        <Link to="/" className="navbar__logo">
          <img src="/justArc-white.png" alt="EVOARX" className="navbar__icon" />
          <span className="navbar__name">EVOARX</span>
        </Link>
        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span className={`navbar__bar ${menuOpen ? 'open' : ''}`} />
          <span className={`navbar__bar ${menuOpen ? 'open' : ''}`} />
          <span className={`navbar__bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/store" onClick={() => setMenuOpen(false)}>Store</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </div>
      )}
    </>
  )
}
