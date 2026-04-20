import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const SkillsCarousel = () => {
  const skills = [
    "Python", "JavaScript", "TypeScript", "Java", "C++", "C", 
    "React", "Vue.js", "HTML5", "CSS3", "Stripe API", 
    "Firebase", "PHP", "SQL", "Google Analytics", "Agile"
  ];

  return (
    <div className="skills-carousel-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="skills-swiper"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 6, spaceBetween: 50 },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="skill-item">{skill}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsCarousel;