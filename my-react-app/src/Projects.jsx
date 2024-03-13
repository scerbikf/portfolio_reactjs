import React, {useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './index.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Projects(){

    const projectsTitle = useRef(null);

    useEffect(() => {

        if(projectsTitle) {
          const active = () => {
            if(window.scrollY > 1000){
                projectsTitle.current.style.visibility = "visible";
                projectsTitle.current.style.animation = "2s slideLeft2";
            }
          }
          window.addEventListener("scroll", active)
        }
      },[window.scrollY]);

    return(<>
    <p ref={projectsTitle} className="projectsTitleText">Projects</p>

    
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <img src="/public/portfolio.PNG"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/public/stopwatch.PNG"/>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projects"></div>
        </SwiperSlide>
      </Swiper>
     
  






   
    </>);
}
export default Projects