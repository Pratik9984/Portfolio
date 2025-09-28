import React, { useEffect, useRef, useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Real-time validation
    const newErrors = { ...errors };
    if (id === 'name') newErrors.name = value.trim() ? '' : 'Name is required';
    if (id === 'email') {
      newErrors.email = value.trim()
        ? /\S+@\S+\.\S+/.test(value)
          ? ''
          : 'Email is invalid'
        : 'Email is required';
    }
    if (id === 'message') newErrors.message = value.trim() ? '' : 'Message is required';
    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000); // Auto-hide success message
    }, 1500);
  };

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 animate" style={{ color: '#58a6ff' }}>
          Contact Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8" style={{ maxWidth: '750px' }}>
            <form
              className="contact-form p-4 shadow-sm animate"
              onSubmit={handleSubmit}
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #21262d',
                borderRadius: '20px',
              }}
            >
              {submitted && (
                <div className="alert alert-success text-center animate-slide" role="alert">
                  ✅ Message sent successfully!
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ color: '#e6edf3' }}>
                  Name
                </label>
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
                <label htmlFor="email" className="form-label" style={{ color: '#e6edf3' }}>
                  Email
                </label>
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
                <label htmlFor="message" className="form-label" style={{ color: '#e6edf3' }}>
                  Message
                </label>
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

export default ContactSection;