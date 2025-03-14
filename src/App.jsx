import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LogoKerico from "./assets/logo.png";
import Kerico2 from "./assets/logo2.png";
import Facebook from "./assets/Facebook.png";
import Twitter from "./assets/Twitter.png";
import Linkedin from "./assets/Linkedin.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <header className="header">
        <img src={LogoKerico} alt="Kerico" className="logo" />
        <nav className="nav">
          <Link to="#" className="nav-link">
            About Us
          </Link>
          <Link to="#" className="nav-link">
            Services
          </Link>
          <Link to="#" className="nav-link">
            Partners
          </Link>
          <Link to="#" className="nav-link">
            Drivers
          </Link>
          <Link to="#" className="nav-link">
            Patients/Caregivers
          </Link>
          <Link to="#" className="nav-link">
            Contact Us
          </Link>
          <button className="book-trip">BOOK A TRIP</button>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <img className="footer-logo" src={Kerico2} alt="kerico" />
            <div className="footer-links">
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Partners</a>
              <a href="#">Drivers</a>
              <a href="#">Patients/Caregivers</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="footer-social">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
        </div>
        <div className="footer-divid"></div>
        <div className="footer-bottom">
          <div className="footer-left-bottom">
            <p>Privacy Policy</p>
            <p>©2023 Kerico N.E.M.T Services</p>
          </div>
          <div className="footer-right-bottom">
            <div className="footer-contact-info">
              <p>
                <span className="highlight">Tell Free:</span> 877-353-9857
              </p>

              <p>
                <span className="highlight">Local:</span> 270-809-7245
              </p>
            </div>
            <div className="footer-contact-info">
              <p>
                <span className="highlight">Address:</span> 6187 West Loop
                South, Suite 400, Bellaire, TX 72301
              </p>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
