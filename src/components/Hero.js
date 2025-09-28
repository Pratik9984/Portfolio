import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  // Typing animation for headline
  useEffect(() => {
    const text = "Build With Code & AI";
    let index = 0;
    const speed = 100;

    function type() {
      if (index < text.length) {
        titleRef.current.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(type, speed);
      }
    }

    type();
  }, []);

  // Parallax background and 3D tilt effect
  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Parallax background movement
      hero.style.backgroundPosition = `${50 + x * 10}% ${50 + y * 10}%`;

      // 3D tilt effect
      content.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * -10}deg)`;
    };

    const handleMouseLeave = () => {
      content.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      hero.style.backgroundPosition = '50% 50%';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    // Scroll animation with IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          content.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      observer.unobserve(hero);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section d-flex align-items-center vh-100">
      <div className="container px-4">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <div ref={contentRef} className="content-wrapper">
              <h1 ref={titleRef} className="display-4 fw-bold mb-3 text-primary animate-fade">
                {/* Text will be filled by typing animation */}
              </h1>
              <p className="lead mb-4 text-light animate-fade delay">
                Modern web apps, smart UI, seamless experiences.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg px-5 py-3 pulse">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;