import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import './Store.css'

export default function Store() {
  return (
    <div className="store-page">
      <Banner />
      <div className="store-hero">
        <img src="/empty-rack.jpg" alt="" className="store-hero__bg" />
        <Navbar theme="light" />
        <div className="store-hero__content">
          <span className="store-hero__label">Coming Soon</span>
          <h1>The EVOARX Store</h1>
          <p>Apparel and gear built for those who train with purpose.<br />Stay tuned — we're almost ready.</p>
          <a href="/contact" className="store-hero__btn">Get Notified</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
