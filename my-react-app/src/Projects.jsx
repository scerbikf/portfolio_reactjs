import React, {useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow } from 'swiper/modules';

function Projects(){

    const projectsTitle = useRef(null);
    const mySwiper = useRef(null);

    useEffect(() => {

        if(projectsTitle, mySwiper) {
          const active = () => {
            if(window.scrollY > 1300){
                projectsTitle.current.style.visibility = "visible";
                projectsTitle.current.style.animation = "2s slideLeft2";
                mySwiper.current.style.visibility = "visible";
                mySwiper.current.style.animation = "2s slideLeft2";
            }
          }
          window.addEventListener("scroll", active)
        }
      },[window.scrollY]);

      
    return(<>
    <p ref={projectsTitle} className="projectsTitleText">Projects</p>

    <div className="projectsNames">
    <Swiper
        ref={mySwiper}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
        }}
        modules={[EffectCoverflow]}
      >
      

        <SwiperSlide>
        
          {({ isActive }) => (<>
            <img src="/public/portfolio.PNG"></img>
            {isActive ? <h1 className="slideDown">Portfolio</h1> : <h1 className="slideUp">Portfolio</h1>}
            </>)
            }
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/stopwatch.PNG"/>
            {isActive ? <h1 className="slideDown">Stopwatch Program</h1> : <h1 className="slideUp">Stopwatch Program</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
          <img src="/public/calculator.PNG"/>
            {isActive ? <h1 className="slideDown">Calculator Program</h1> : <h1 className="slideUp">Calculator Program</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
          <img src="/public/snakegame.PNG"/>
            {isActive ? <h1 className="slideDown">Snake Game</h1> : <h1 className="slideUp">Snake Game</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
          <img src="/public/rockpapersc.PNG"/>
            {isActive ? <h1 className="slideDown">Rock Paper Scissors Game</h1> : <h1 className="slideUp">Rock Paper Scissors Game</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/dicegame.PNG"></img>
            {isActive ? <h1 className="slideDown">Dice Game</h1> : <h1 className="slideUp">Dice Game</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/digitalclock.PNG"></img>
            {isActive ? <h1 className="slideDown">Digital Clock</h1> : <h1 className="slideUp">Digital Clock</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/minigame.PNG"></img>
            {isActive ? <h1 className="slideDown">Encryption Game</h1> : <h1 className="slideUp">Encryption Game</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/pingpong.PNG"></img>
            {isActive ? <h1 className="slideDown">PingPong Game</h1> : <h1 className="slideUp">PingPong Game</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/tictactoe.PNG"></img>
            {isActive ? <h1 className="slideDown">TicTacToe Game</h1> : <h1 className="slideUp">TicTacToe Game</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/tipcalculator.PNG"></img>
            {isActive ? <h1 className="slideDown">Tip Calculator</h1> : <h1 className="slideUp">Tip Calculator</h1>}
            </>)}
        </SwiperSlide>
    </Swiper>
    </div>
   
    </>);
}
export default Projects