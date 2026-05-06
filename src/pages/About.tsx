import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const About = () => {
const gallery = [
    { type: 'image', src: '/images/mountains.JPG', cap: 'Vermont Peaks — Recharging in the Green Mountains' },
    { type: 'image', src: '/images/piphi.JPG', cap: 'Community & Leadership — Pi Beta Phi Sorority' },
    { type: 'image', src: '/images/redbarn.PNG', cap: 'The RBMG Team — Celebrating!' },
    { type: 'image', src: '/images/cs-fair.png', cap: 'Collaborative Engineering — UVM CS Project Showcase' },
    { type: 'image', src: '/images/tbone-boat.JPG', cap: 'The T-Bone Team — Celebrating a year of enterprise success' },
    { type: 'image', src: '/images/operahouse.png', cap: 'Global Perspective — Moving to Sydney, Australia' },
    { type: 'image', src: '/images/graduation.PNG', cap: 'UVM Class of 2025 — B.S. in Computer Science' },
    { type: 'image', src: '/images/raspberrypi.JPG', cap: 'Hardware Systems — Bridging the gap between code & physical logic' },
  ];

  return (
    <section className="about-section">
      <div className="projects-container">
        <div className="about-intro-grid">
          <div className="about-headline">
            <span className="badge-pro">The Person Behind the Code</span>
            <h1>A blend of <span className="highlight">technical precision</span> and global curiosity.</h1>
          </div>
          
          <div className="body-text">
            <p>
              Bridging the gap between <strong>complex back-end logic</strong> and 
              <strong> intuitive front-end interfaces</strong>, I specialize in developing 
              robust <strong>React and Vue systems</strong>. Whether optimizing enterprise 
              dealer portals or engineering secure payment gateways, 
              I focus on creating <strong>sustainable architecture</strong> that drives 
              <strong> measurable business growth</strong>.
            </p>
            
            <p>
              Beyond the terminal, I’m driven by a love for exploration and community. 
              Whether I'm hiking through the Green Mountains, navigating 
              new cities while traveling abroad, or iterating on the 
              very personal site you’re reading now, I thrive on the 
              process of constant improvement. I believe the best 
              engineers are those who stay curious—both in the 
              codebase and in the world.
            </p>
          </div>
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