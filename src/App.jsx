import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button clicked successfully!");
  };

  const handleReset = () => {
    setMessage("");
  };

  return (
    <div className="app">
      <Header />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Parthu</span> 👋
          </h1>

          <h2>BTech AIML Student & Aspiring Data Analyst</h2>

          <p>
            I am learning modern web development, React, data analytics,
            Python and SQL while building practical projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-card">
          <div className="about-icon">🎓</div>

          <div>
            <h3>BTech Artificial Intelligence & Machine Learning</h3>

            <p>
              I am developing my skills in software development and data
              analytics. This Week 1 project focuses on understanding React
              fundamentals and building reusable components.
            </p>

            <p>
              My goal is to combine programming, data analysis and AI to build
              useful real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-title">
          <p>MY TECHNOLOGIES</p>
          <h2>Skills I'm Learning</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Programming & Data Analysis</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>SQL</h3>
            <p>Database & Data Queries</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Modern ES6+ Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React</h3>
            <p>Reusable UI Components</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Insights from Data</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🤖</div>
            <h3>AI / ML</h3>
            <p>Artificial Intelligence</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-title">
          <p>MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          <Card
            title="EcoTrack"
            description="A Smart Waste Management System designed to manage waste collection and provide useful dashboard insights."
          />

          <Card
            title="Correlation Service"
            description="A backend service developed using Go to correlate detection events based on service, category and time-window rules."
          />

          <Card
            title="Data Analytics"
            description="Learning to analyze datasets using Python, SQL and data visualization techniques."
          />
        </div>
      </section>

      {/* Week 1 Learning */}
      <section id="learning" className="section learning-section">
        <div className="section-title">
          <p>INTERNSHIP WEEK 1</p>
          <h2>What I Learned</h2>
        </div>

        <div className="learning-grid">
          <div>✓ JSX</div>
          <div>✓ Components</div>
          <div>✓ Props</div>
          <div>✓ useState</div>
          <div>✓ Event Handling</div>
          <div>✓ Conditional Rendering</div>
          <div>✓ Forms</div>
          <div>✓ Reusable Components</div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="section demo-section">
        <div className="section-title">
          <p>REACT DEMONSTRATION</p>
          <h2>Interactive Component Demo</h2>
        </div>

        <div className="demo-card">
          <h3>Counter using React State</h3>

          <div className="counter-value">{count}</div>

          <div className="counter-buttons">
            <button onClick={() => setCount(count - 1)}>-</button>

            <button onClick={() => setCount(0)}>Reset</button>

            <button onClick={() => setCount(count + 1)}>+</button>
          </div>

          <p className="demo-description">
            This counter demonstrates React's <strong>useState</strong> and
            event handling.
          </p>
        </div>

        <div className="button-demo">
          <h3>Reusable Button Component</h3>

          <div className="button-group">
            <Button onClick={handleClick}>Click Me</Button>

            <Button onClick={handleReset}>Reset</Button>
          </div>

          {message && <p className="success-message">✓ {message}</p>}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-card">
          <Form />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;