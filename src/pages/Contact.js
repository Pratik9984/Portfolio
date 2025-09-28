import React, { useEffect, useRef, useState } from 'react';
import './GetInTouch.css';

function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === 'name' && value.length < 2) {
      setErrors((prev) => ({ ...prev, name: 'Name must be at least 2 characters' }));
    } else if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
    } else if (id === 'message' && value.length < 10) {
      setErrors((prev) => ({ ...prev, message: 'Message must be at least 10 characters' }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      setErrors({
        name: name.length < 2 ? 'Name must be at least 2 characters' : '',
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email format' : '',
        message: message.length < 10 ? 'Message must be at least 10 characters' : '',
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="get-in-touch py-5">
      <div className="container">
        <h2 className="text-center mb-5 animate" style={{ color: '#58a6ff' }}>
          Get in Touch
        </h2>
        <div className="row">
          <div className="col-md-5 mb-4">
            <div className="contact-info p-4 rounded animate" style={{ backgroundColor: '#161b22', border: '1px solid #21262d' }}>
              <h4 className="text-white mb-3">Contact Information</h4>
              <p className="text-light mb-2">📍 Location: Pune, Maharashtra</p>
              <p className="text-light mb-2">
                📧 Email: <a href="mailto:pratikshinde0165@gmail.com" className="text-primary">pratikshinde0165@gmail.com</a>
              </p>
              <p className="text-light mb-2">
                📱 Phone: <a href="tel:+918007363375" className="text-primary">+91 8007363375</a>
              </p>
              <div className="mt-4 d-flex gap-2">
                <a href="https://github.com/Pratik9984" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary social-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/pratik-shinde-54743725a/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary social-btn">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <form
              className="contact-form p-4 animate"
              onSubmit={handleSubmit}
              style={{ backgroundColor: '#161b22', border: '1px solid #21262d', borderRadius: '20px' }}
            >
              {submitted && (
                <div className="alert alert-success text-center animate" role="alert">
                  ✅ Thanks for reaching out!
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Name</label>
                <input
                  id="name"
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#0d1117',
                    color: '#e6edf3',
                    border: '1px solid #30363d',
                    borderRadius: '10px',
                  }}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#0d1117',
                    color: '#e6edf3',
                    border: '1px solid #30363d',
                    borderRadius: '10px',
                  }}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">Message</label>
                <textarea
                  id="message"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Your message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#0d1117',
                    color: '#e6edf3',
                    border: '1px solid #30363d',
                    borderRadius: '10px',
                    resize: 'none',
                  }}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 submit-btn"
                disabled={loading}
                style={{ borderRadius: '30px' }}
              >
                {loading ? (
                  <span className="spinner">
                    <span className="spinner-inner"></span>
                  </span>
                ) : (
                  '✉️ Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
