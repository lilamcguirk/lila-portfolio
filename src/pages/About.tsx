import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const About = () => {
  const gallery = [
    { type: 'video', src: '/video/operahouse.mov', cap: 'Navigating life in Sydney, NSW' },
    { type: 'image', src: '/images/mountains.JPG', cap: 'Final year research at UVM' },
    { type: 'image', src: '/images/piphi.JPG', cap: 'Study abroad at UTS Australia' },
    { type: 'image', src: '/images/redbarn.PNG', cap: 'Study abroad at UTS Australia' },
    { type: 'image', src: '/images/uvm.PNG', cap: 'Study abroad at UTS Australia' },
    { type: 'image', src: '/images/tbone-boat.JPG', cap: 'Study abroad at UTS Australia' },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <span className="badge-pro">Perspective</span>
          <h2>Beyond the Code</h2>
          <p>
            My engineering mindset is driven by a curiosity that spans beyond my desk. 
            From the lecture halls at <strong>UVM</strong> to the tech hubs in <strong>Sydney</strong>, 
            I've focused on how different cultures interact with technology.
          </p>
          <p>
            I believe that living abroad made me a better collaborator—it taught me how 
            to solve problems with limited context and communicate across diverse teams.
          </p>
        </div>

        <div className="about-viewer">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="about-swiper"
          >
            {gallery.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="media-wrapper">
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay muted loop playsInline />
                  ) : (
                    <img src={item.src} alt={item.cap} />
                  )}
                  <div className="media-caption">
                    <p>{item.cap}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;