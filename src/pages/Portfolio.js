import React from 'react';
import ProjectCard from '../components/Projectcard';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Site',
      desc: 'React + Bootstrap',
      img: '/assets/Portfolio.png',
    },
    {
      id: 2,
      title: 'Hotel Booking App',
      desc: 'React + Flask',
      img: '/assets/Hotel.png',
    },
    {
      id: 3,
      title: 'E-commerce Demo',
      desc: 'React + Bootstrap UI',
      img: '/assets/Ecom.png',
    },
    {
      id: 4,
      title: 'Vehicle Price Calculator',
      desc: 'Python + Flask + ML',
      img: '/assets/Vehicle.png',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#0d1117' }}>
      <div className="container">
        <div
          className="card p-5 border-0 shadow-sm"
          style={{
            backgroundColor: '#161b22',
            borderRadius: '20px',
          }}
        >
          <h2 className="text-center mb-5" style={{ color: '#58a6ff' }}>
            Portfolio
          </h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-4">
                <ProjectCard
                  id={project.id} // ✅ Pass the ID for routing
                  title={project.title}
                  desc={project.desc}
                  img={project.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
