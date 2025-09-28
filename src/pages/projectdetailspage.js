import { title } from 'framer-motion/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  1: {
    title: 'Portfolio Site',
    description: 'A modern, responsive portfolio built with React and Bootstrap. It showcases my services, projects, and contact info with premium UI/UX.',
    image: '/assets/Portfolio.png',
    github: 'https://github.com/Pratik9984/Portfolio',
    live: 'https://portfolio-02y6.onrender.com/',
    tech: ['React', 'Bootstrap', 'Vercel'],
  },
  2: {
    title: 'Hotel Booking App',
    description: 'A full-stack hotel booking app using React and Flask. Users can browse rooms, book stays, and manage reservations.',
    image: '/assets/Hotel.png',
    github: 'https://github.com/Pratik9984/Perfect-Stay',
    live: 'https://perfect-stay-1.onrender.com/',
    tech: ['React', 'Flask', 'MongoDB'],
  },
  3: {
    title: 'E-commerce Demo',
    description: 'A demo e-commerce UI built with React and Bootstrap. Includes product listings, cart functionality, and responsive design.',
    image: '/assets/Ecom.png',
    github: 'https://github.com/Pratik9984/Ecommerce',
    live: '#',
    tech: ['React', 'Bootstrap'],
  },
  4:{
    title: 'Vehicle Price Calculator'
    ,description: 'A vehicle price calculator that estimates the market value of used cars based on various parameters using machine learning models.',
    image: '/assets/Vehicle.png',
    github: 'https://github.com/Pratik9984/Vehicle-Price-calculator',
    live: 'https://vehicle-price-calculator.onrender.com',
    tech: ['Python', 'Flask', 'Machine Learning'],
  }
};

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <section className="py-5 text-center" style={{ backgroundColor: '#0d1117', color: '#f0f6ff' }}>
        <h2>Project not found</h2>
        <p>Please check the URL or return to the portfolio page.</p>
      </section>
    );
  }

  return (
    <section className="py-5" style={{ backgroundColor: '#0d1117' }}>
      <div className="container">
        <div
          className="card p-4 shadow-lg mx-auto"
          style={{
            maxWidth: '800px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid #21262d',
            color: '#f0f6ff',
          }}
        >
          <h2 className="mb-3 text-center" style={{ color: '#58a6ff' }}>{project.title}</h2>

          <img
            src={project.image}
            alt="Project preview"
            className="img-fluid rounded mb-4"
            style={{ border: '1px solid #21262d' }}
          />

          <p className="mb-4">{project.description}</p>

          <div className="mb-4">
            <strong>Tech Stack:</strong>
            <ul className="list-inline mt-2">
              {project.tech.map((t, i) => (
                <li key={i} className="list-inline-item me-3" style={{ color: '#c9d1d9' }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex justify-content-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              style={{ borderColor: '#58a6ff', color: '#58a6ff' }}
            >
              GitHub Repo
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              style={{ borderColor: '#58a6ff', color: '#58a6ff' }}
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsPage;
