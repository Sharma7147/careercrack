import { useState, useEffect } from 'react';
import { FaBrain, FaBuilding, FaMicrophone, FaGraduationCap, FaCode, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    setIsVisible(true);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <FaCode className="logo-icon" />
            <span>CareerCrack</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className={`coming-soon ${isVisible ? 'animate' : ''}`}>
              🚀 Launching Soon
            </div>
            <h1 className={`hero-title ${isVisible ? 'animate' : ''}`}>
              Empowering Your Placement Journey
            </h1>
            <p className={`hero-description ${isVisible ? 'animate' : ''}`}>
              CareerCrack is your one-stop solution for mastering placement preparation. 
              Access expertly curated aptitude tests, in-depth company profiles, realistic 
              mock interviews, and industry-driven learning paths—all designed to help you 
              secure your dream job.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose CareerCrack?</h2>
            <div className="features-grid">
              {[
                { icon: <FaBrain />, title: "Smart Aptitude Practice", desc: "Sharpen your skills with a vast collection of aptitude questions, adaptive quizzes, and detailed solutions tailored for campus placements and competitive exams." },
                { icon: <FaBuilding />, title: "Company Insights", desc: "Explore comprehensive company profiles, interview experiences, and the latest hiring trends to prepare with confidence for every opportunity." },
                { icon: <FaMicrophone />, title: "Mock Interviews", desc: "Simulate real interview scenarios with AI-powered mock interviews and receive actionable feedback to boost your performance." },
                { icon: <FaGraduationCap />, title: "Expert-Led Courses", desc: "Advance your knowledge with courses crafted by industry professionals, covering technical, aptitude, and soft skills essential for placement success." }
              ].map((feature, idx) => (
                <div key={idx} className={`feature-card ${isVisible ? 'animate' : ''}`}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="company-info">
              <h3>Powered by Sixora Technologies</h3>
              <p>Transforming education with innovative technology solutions.</p>
            </div>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
            <div className="copyright">
              &copy; 2025 CareerCrack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
