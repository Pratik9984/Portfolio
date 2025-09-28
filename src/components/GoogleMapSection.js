import React from 'react';

function GoogleMapSection() {
  return (
    <div className="map-section mt-5 animate">
      <h4 className="mb-3" style={{ color: '#58a6ff' }}>Location</h4>
      <div
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(56, 139, 253, 0.2)',
          border: '1px solid #21262d',
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.476267956362!2d73.8567437752076!3d18.55352068254459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e6c1e9e3f%3A0x8f3f4f3e3c3c3c3c!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695830000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMapSection;
