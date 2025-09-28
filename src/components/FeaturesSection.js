import React, { useState } from 'react';

const features = [
  {
    title: 'Clean Code',
    desc: 'Structured, readable, and maintainable.',
    icon: '💻',
    details:
      'Modular, well-documented code that’s easy to scale and debug. Every component is thoughtfully named and optimized for long-term maintainability.',
  },
  {
    title: 'UI/UX Focus',
    desc: 'Smooth, modern, and accessible interfaces.',
    icon: '🎨',
    details:
      'Interfaces that feel intuitive and trustworthy. From subtle animations to responsive layouts, every pixel is placed with purpose and empathy.',
  },
  {
    title: 'Performance',
    desc: 'Fast, responsive, and optimized experiences.',
    icon: '⚡',
    details:
      'Optimized rendering, reduced payloads, and fine-tuned interactions for lightning-fast user experiences across devices and networks.',
  },
];

function FeaturesSection({ heading = 'What I Do', items = features }) {
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

                {/* Glassy Pop-up with smaller text */}
                <div
                  className="position-absolute start-0 top-0 w-100 h-100 p-4 d-flex flex-column justify-content-start"
                  style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(88, 166, 255, 0.1)',
                    borderRadius: '15px',
                    opacity: hoveredIndex === i ? 1 : 0,
                    pointerEvents: hoveredIndex === i ? 'auto' : 'none',
                    transition: 'opacity 0.4s ease',
                    zIndex: 10,
                    overflow: 'hidden',
                    fontSize: '0.8rem', // smaller text only inside overlay
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
