import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className="about-page">
      <Banner />

      {/* Hero */}
      <div className="about-hero">
        <img src="/yoga.jpg" alt="" className="about-hero__bg" />
        <Navbar theme="dark" />
        <div className="about-hero__content">
          <h1>About Us</h1>
          <p>Built for those who refuse to stay the same.</p>
        </div>
      </div>

      {/* Mission */}
      <section className="about-section about-section--mission">
        <div className="about-section__inner">
          <span className="about-label">Our Mission</span>
          <h2>Begin Your Evolution Arc.</h2>
          <p>EVOARX exists to make personalized fitness accessible to everyone. We combine AI-powered programming with real training principles to help you build strength, endurance, and consistency — wherever you are in your journey.</p>
        </div>
      </section>

      {/* Values */}
      <section className="about-section about-section--values">
        <div className="about-section__inner">
          <span className="about-label">What We Stand For</span>
          <div className="about-values">
            <div className="about-value">
              <h3>Progress Over Perfection</h3>
              <p>Every rep, every session, every small win compounds over time. We build programs that meet you where you are and grow with you.</p>
            </div>
            <div className="about-value">
              <h3>Science-Backed Training</h3>
              <p>Our AI draws from established exercise science to generate programs that are safe, effective, and tailored to your goals and equipment.</p>
            </div>
            <div className="about-value">
              <h3>Community First</h3>
              <p>Fitness is better together. Share your workouts, celebrate milestones, and push each other forward inside the EVOARX community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section about-section--cta">
        <div className="about-section__inner about-cta">
          <h2>Ready to start your arc?</h2>
          <p>Download the app and let EVOARX build your first program in minutes.</p>
          <div className="about-cta__buttons">
            <a href="#" className="about-cta__btn">Download on the App Store</a>
            <a href="#" className="about-cta__btn about-cta__btn--outline">Get it on Google Play</a>
          </div>
          <span className="about-cta__soon">Coming Soon</span>
        </div>
      </section>

      <Footer />
    </div>
  )
}
