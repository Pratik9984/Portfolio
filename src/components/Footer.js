import React, { useEffect, useRef } from 'react';
import './Footer.css';

function Footer() {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate').forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('visible');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2 animate" style={{ color: '#e6edf3' }}>
          © {currentYear} Pratik Shinde. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3 animate">
          {[
            { href: 'https://github.com/Pratik9984', icon: 'bi bi-github', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/pratik-shinde-54743725a/', icon: 'bi bi-linkedin', label: 'LinkedIn' },
            { href: 'https://twitter.com/pratikshinde', icon: 'bi bi-twitter', label: 'Twitter' },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              data-tooltip={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;