import React, { useState } from 'react';
import ServiceCard from '../components/servicecard';

function Services() {
  const [activeId, setActiveId] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Web Development',
      icon: '🌐',
      color: '#e6f0ff',
      details:
        'I build scalable, responsive websites using modern frameworks like React, FastAPI, and Tailwind. Every site is optimized for performance, accessibility, and real-world impact.',
    },
    {
      id: 2,
      name: 'UI/UX Design',
      icon: '🎨',
      color: '#fbefff',
      details:
        'I craft intuitive, trust-building interfaces with smooth animations, clean layouts, and brand consistency. Every pixel is placed with purpose and empathy.',
    },
    {
      id: 3,
      name: 'Performance Optimization',
      icon: '⚡',
      color: '#eaffea',
      details:
        'I fine-tune frontend and backend performance, reduce payloads, and optimize rendering for lightning-fast user experiences across devices.',
    },
    {
      id: 4,
      name: 'Secure Web Applications',
      icon: '🔒',
      color: '#fff5e6',
      details:
        'I implement encryption, authentication, and secure architecture to protect user data and ensure production-grade reliability.',
    },
  ];

  return (
    <section className="py-5 position-relative" style={{ backgroundColor: '#0d1117' }}>
      <div className="container text-center position-relative">
        <h2 className="mb-5" style={{ color: '#58a6ff' }}>Services</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 position-relative">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              name={service.name}
              color={service.color}
              details={service.details}
              isActive={activeId === service.id}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
