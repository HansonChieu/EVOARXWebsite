import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-logo">
            <img src="/justArc-white.png" alt="EVOARX" className="footer__logo-icon" />
            <span className="footer__brand-name">EVOARX</span>
          </div>
          <p className="footer__tagline">Begin Your Evolution Arc.</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/store">Store</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Support</h4>
          <Link to="/contact">Contact Us</Link>
          <a href="/faq">FAQ</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} EVOARX. All rights reserved.</p>
      </div>
    </footer>
  )
}
