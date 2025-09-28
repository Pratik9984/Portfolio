import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ id, title, desc, img }) {
  const navigate = useNavigate();

  return (
    <div
      className="card h-100 shadow-sm border-0"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        backdropFilter: 'blur(6px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(56, 139, 253, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(56, 139, 253, 0.1)';
      }}
    >
      <img
        src={img}
        alt={title}
        className="card-img-top"
        style={{
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          height: '180px',
          objectFit: 'cover',
        }}
      />
      <div className="card-body text-light">
        <h5 className="card-title" style={{ color: '#58a6ff' }}>{title}</h5>
        <p className="card-text text-secondary">{desc}</p>
        <button
          className="btn btn-outline-light mt-2"
          style={{ borderColor: '#58a6ff', color: '#58a6ff' }}
          onClick={() => navigate(`/project/${id}`)}
        >
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
