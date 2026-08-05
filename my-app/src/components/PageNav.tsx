import { Link } from 'react-router-dom'

export default function PageNav() {
  return (
    <nav className="legal-nav">
      <Link to="/" className="legal-nav__logo">
        <img src="/justArc-white.png" alt="EVOARX" className="legal-nav__icon" />
        <span className="legal-nav__name">EVOARX</span>
      </Link>

      <ul className="legal-nav__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  )
}
