import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa6'
import './App.css'

function App() {
  return (
    <div className="hero">
      <img
        src="/adria-sanchez-roque-6D6omiCxHWM-unsplash.jpg"
        alt=""
        className="hero__bg"
      />

      <nav className="nav">
        <a href="/" className="nav__logo">
          <img src="/justArc-removebg-preview.png" alt="EVOARX arc icon" className="nav__logo-icon" />
          <span className="nav__logo-text">EVOARX</span>
        </a>

        <ul className="nav__links">
          <li><a href="/">Home</a></li>
          <li className="nav__sep" aria-hidden="true"></li>
          <li><a href="/store">Store</a></li>
          <li className="nav__sep" aria-hidden="true"></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>

      <div className="hero__content">
        <h1 className="hero__headline">
          Begin Your<br />Evolution Arc
        </h1>
        <div className="store-badges">
          <a href="#" className="store-badge">
            <FaApple className="store-badge__icon" />
            <div className="store-badge__text">
              <span className="store-badge__sub">Download on the</span>
              <span className="store-badge__name">App Store</span>
            </div>
          </a>
          <a href="#" className="store-badge">
            <FaGooglePlay className="store-badge__icon" />
            <div className="store-badge__text">
              <span className="store-badge__sub">Get it on</span>
              <span className="store-badge__name">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      <div className="hero__screenshots">
        <img src="/homescreen.jpg" alt="App home screen" className="screenshot screenshot--home" />
        <img src="/Workoutpage.jpg" alt="App workout screen" className="screenshot screenshot--workout" />
      </div>

      <footer className="footer">
        <div className="footer__left">
          <div className="footer__logo">
            <img src="/justArc-removebg-preview.png" alt="EVOARX arc icon" className="footer__logo-icon" />
            <div className="footer__socials">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" aria-label="X / Twitter"><FaXTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer__links">
          <a href="/">Home</a>
          <a href="/store">Store</a>
          <a href="/about">About Us</a>
        </div>

        <p className="footer__copy">&copy; {new Date().getFullYear()} EVOARX. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
