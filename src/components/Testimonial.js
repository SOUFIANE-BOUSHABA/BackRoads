import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'John Doe',
    date: 'January 10, 2023',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Jane Smith',
    date: 'February 14, 2023',
    comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Michael Johnson',
    date: 'March 8, 2023',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Emily Davis',
    date: 'April 22, 2023',
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'William Brown',
    date: 'May 12, 2023',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Ava Williams',
    date: 'June 7, 2023',
    comment: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Olivia Martinez',
    date: 'July 21, 2023',
    comment: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Isabella Taylor',
    date: 'August 3, 2023',
    comment: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
    testimonials[(current + 3) % testimonials.length],
  ];

  return (
    <section className='section' id='testimonial'>
      <h2 className='section-title'>Testimonials</h2>
      <div className='testimonial-container'>
        {visibleTestimonials.map((testimonial) => (
          <div className='testimonial-card' key={testimonial.id}>
            <div className='testimonial-header'>
              <img src={testimonial.image} className='testimonial-photo' alt={testimonial.name} />
              <div className='testimonial-info'>
                <h3 className='testimonial-name'>{testimonial.name}</h3>
                <p className='testimonial-date'>{testimonial.date}</p>
              </div>
            </div>
            <p className='testimonial-comment'>{testimonial.comment}</p>
          </div>
        ))}
      </div>
      <div className='testimonial-controls'>
        <button onClick={handlePrev} className='testimonial-button'>Previous</button>
        <button onClick={handleNext} className='testimonial-button'>Next</button>
      </div>
    </section>
  );
};

export default Testimonial;
