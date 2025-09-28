import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleStyle = {
    color: '#58a6ff',
    cursor: 'pointer',
    fontWeight: '500',
    marginLeft: '6px',
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#0d1117' }}>
      <div className="container">
        <div
          className="card p-5 border-0 shadow-sm"
          style={{
            backgroundColor: '#161b22',
            borderRadius: '20px',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
          }}
        >
          <h2 className="text-center mb-5" style={{ color: '#58a6ff', fontSize: '2.5rem' }}>
            About Me
          </h2>

          <div className="row align-items-center">
            {/* Profile Image */}
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <div
                style={{
                  width: '420px',
                  height: '420px',
                  margin: '0 auto',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  boxShadow: '0 0 12px rgba(88, 166, 255, 0.25)',
                }}
              >
                <img
                  src="/assets/Pratik.jpg.png"
                  alt="Pratik"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            {/* Bio & Skills */}
            <div className="col-md-6 text-light">
              <p className="mb-4 fs-6" style={{ fontSize: '0.9rem' }}>
                Hi! I'm <strong>Pratik Shinde</strong>, 👨‍💻 Full-Stack Developer & AI Integrator – I build scalable, production-ready applications for startups, freelance clients, and personal projects.
                <br /><br />
                ⚡ <strong>Tech Stack Expertise</strong> – FastAPI, Flask, SQLAlchemy, React, Tailwind, and Java for secure and high-performance applications.
                <br /><br />
                🎨 <strong>UI/UX Focused</strong> – Passionate about crafting interactive, trust-building designs with smooth animations, clean layouts, and brand consistency.
                <br /><br />
                🔒 <strong>Security Enthusiast</strong> – Experienced in building end-to-end encrypted apps and exploring cryptography for real-world applications.
                {!showMore && (
                  <span style={toggleStyle} onClick={() => setShowMore(true)}>
                    Read More
                  </span>
                )}
              </p>

              {showMore && (
                <p className="fs-6" style={{ fontSize: '0.9rem' }}>
                  📚 <strong>Strong CS Foundations</strong> – Continuously learning Logic Design, Processor Architecture, Computer Graphics, and Cryptography to strengthen problem-solving and system design.
                  <br /><br />
                  🚀 <strong>Startup & Freelance Ready</strong> – Skilled in rapid prototyping, delivering SaaS MVPs, and helping clients scale with confidence.
                  <br /><br />
                  🛠 <strong>Detail-Oriented</strong> – From modular components to subtle UI cues, I focus on details that boost credibility, usability, and conversion.
                  <br /><br />
                  🌱 <strong>Growth Mindset</strong> – Whether freelancing or building my own products, I thrive on creative problem-solving, iterative polish, and real-world impact.
                  <span style={toggleStyle} onClick={() => setShowMore(false)}>
                    Show Less
                  </span>
                </p>
              )}

              {/* Skills Section */}
              <ul className="list-unstyled fs-6" style={{ fontSize: '0.9rem' }}>
                <li>🌐 Frontend Development (React, Bootstrap, Tailwind)</li>
                <li>⚡ Responsive & Interactive UI/UX</li>
                <li>🔒 Secure & Scalable Web Applications</li>
                <li>🧠 AI Integration & Real-Time Features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
