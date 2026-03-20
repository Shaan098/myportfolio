import React, { useState } from 'react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Project Lead',
      company: 'Tech Innovations',
      image: '👨‍💼',
      text: 'Outstanding developer with excellent problem-solving skills. Delivered high-quality code on time.'
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      company: 'Digital Solutions',
      image: '👩‍💼',
      text: 'Great team player with strong communication skills. Made valuable contributions to our projects.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartUp Labs',
      image: '👨‍💻',
      text: 'Impressive technical knowledge and ability to learn new technologies quickly. Highly recommended.'
    }
  ]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What People Say</h2>
          <div className="title-underline"></div>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-avatar">{testimonial.image}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role} at {testimonial.company}</p>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button onClick={goToPrevious} className="carousel-btn" aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <button onClick={goToNext} className="carousel-btn" aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
