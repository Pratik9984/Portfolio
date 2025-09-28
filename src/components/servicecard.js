import React from 'react';

function ServiceCard({ icon, name, color = '#f0f6ff', details, isActive, onClick }) {
  const baseStyle = {
    width: '220px',
    height: '220px',
    backgroundColor: color,
    borderRadius: '15px',
    boxShadow: '0 8px 24px rgba(56, 139, 253, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: 'scale(1)',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    zIndex: 1,
    willChange: 'transform',
  };

  const expandedStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)',
    width: '90vw',
    maxWidth: '700px',
    height: '300px',
    backgroundColor: color,
    borderRadius: '20px',
    boxShadow: '0 12px 32px rgba(56, 139, 253, 0.3)',
    zIndex: 999,
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    willChange: 'transform, opacity',
    opacity: 1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(88, 166, 255, 0.1)',
    borderRadius: '20px',
    fontSize: '0.8rem',
    lineHeight: '1.4',
    padding: '1.5rem',
    color: '#0d1117',
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center p-4"
      style={isActive ? expandedStyle : baseStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(56, 139, 253, 0.2)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(56, 139, 253, 0.1)';
        }
      }}
    >
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <h5 className="mt-3 text-dark">{name}</h5>

      {isActive && (
        <div style={overlayStyle}>
          <div style={{ fontSize: '1.5rem' }}>{icon}</div>
          <h6 className="text-dark mb-2">{name}</h6>
          <p className="mb-0">{details}</p>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
