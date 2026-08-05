import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'

function App() {
  return (
    <div className="page">
      <Banner />
      <div className="hero">
        <img
          src="/adria-sanchez-roque-6D6omiCxHWM-unsplash.jpg"
          alt=""
          className="hero__bg"
        />

        <Navbar theme="light" />

        <div className="hero__content">
          <h1 className="hero__headline">
            Begin Your<br />Evolution Arc
          </h1>
          <div className="hero__notify">
            <p className="hero__notify-label">Something Big Is Coming</p>
            <Link to="/contact" className="hero__notify-btn">Get Notified</Link>
          </div>
        </div>

        <div className="hero__screenshots">
          <img src="/homescreen.jpg" alt="App home screen" className="screenshot screenshot--home" />
          <img src="/Workoutpage.jpg" alt="App workout screen" className="screenshot screenshot--workout" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
