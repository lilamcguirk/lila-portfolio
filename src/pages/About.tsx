import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const About = () => {
  const gallery = [
    { src: '/images/mountains.JPG', cap: 'UVM Research' },
    { src: '/images/piphi.JPG', cap: 'Sydney, Australia' },
    { src: '/images/redbarn.PNG', cap: 'Professional Growth' },
    { src: '/images/cs-fair.png', cap: 'UVM Campus' },
    { src: '/images/tbone-boat.JPG', cap: 'Project Lead' },
    { src: '/images/operahouse.png', cap: 'Project Lead' },
    { src: '/images/graduation.PNG', cap: 'Project Lead' },
    { src: '/images/raspberrypi.JPG', cap: 'Project Lead' },
  ];

  return (
    <section className="about-section">
      <div className="projects-container">
        <div className="about-content">
          <span className="badge-pro">Perspective</span>
          <h2>Beyond the Code</h2>
          <p>
            My engineering mindset is driven by a curiosity that spans beyond my desk—from 
            <strong> UVM</strong> to the tech hubs in <strong>Sydney</strong>.
          </p>
        </div>
      </div>

      <div className="about-carousel-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={'auto'} 
        centeredSlides={false}
        loop={true}
        speed={9000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="about-photo-swiper"
      >
          {gallery.map((item, i) => (
            <SwiperSlide key={i} style={{ width: 'auto' }}>
              <div className="about-photo-card">
                <img src={item.src} alt={item.cap} />
                <div className="photo-overlay">
                  <span>{item.cap}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;