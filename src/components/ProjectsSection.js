import React, { useState } from 'react';

const features = [
  {
    title: 'Scalable Architecture',
    desc: 'Built to grow with your business.',
    icon: '🏗️',
    details:
      'Designed with modularity and flexibility in mind, ensuring your app can evolve seamlessly as your business scales.',
  },
  {
    title: 'Real-Time Features',
    desc: 'Live chat, instant updates, seamless sync.',
    icon: '💬',
    details:
      'Integrated sockets and event-driven architecture for smooth, real-time communication and data flow across users and devices.',
  },
  {
    title: 'Secure & Reliable',
    desc: 'Protected, stable, and production-ready.',
    icon: '🛡️',
    details:
      'Built with encryption, authentication, and fault-tolerant systems to ensure your data and users stay safe and connected.',
  },
];

function FeaturesSection({ heading = 'Why Choose Me', items = features }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-5" style={{ backgroundColor: '#0d1117' }}>
      <div className="container text-center">
        <h2 className="mb-5" style={{ color: '#58a6ff' }}>{heading}</h2>
        <div className="row g-4">
          {items.map((f, i) => (
            <div
              className="col-md-4"
              key={i}
              style={{
                position: 'relative',
                zIndex: hoveredIndex === i ? 2 : 1,
                overflow: 'visible',
              }}
            >
              <div
                className="card p-4 shadow-sm"
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #21262d',
                  borderRadius: '15px',
                  height: '220px',
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                  zIndex: hoveredIndex === i ? 2 : 1,
                  cursor: 'default',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="fs-1 mb-3 text-light">{f.icon}</div>
                <h5 className="text-white">{f.title}</h5>
                <p className="text-secondary">{f.desc}</p>

                {/* Glassy Pop-up with minimized text */}
                <div
                  className="position-absolute start-0 top-0 w-100 h-100 p-4 d-flex flex-column justify-content-start"
                  style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(88, 166, 255, 0.1)',
                    borderRadius: '15px',
                    opacity: hoveredIndex === i ? 1 : 0,
                    pointerEvents: hoveredIndex === i ? 'auto' : 'none',
                    transition: 'opacity 0.4s ease',
                    fontSize: '0.8rem',
                    lineHeight: '1.4',
                  }}
                >
                  <div className="fs-2 mb-2 text-light">{f.icon}</div>
                  <h6 className="text-white mb-1">{f.title}</h6>
                  <p className="text-secondary mb-1">{f.desc}</p>
                  <p className="text-light" style={{ marginBottom: 0 }}>
                    {f.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
