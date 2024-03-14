import React, {useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Slide from "./ProjectProp.jsx";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

function Projects(){

    const projectsTitle = useRef(null);
    const mySwiper = useRef(null);

    useEffect(() => {

        if(projectsTitle, mySwiper) {
          const active = () => {
            if(window.scrollY > 1300){
                projectsTitle.current.style.visibility = "visible";
                projectsTitle.current.style.animation = "2s slideLeft";
                projectsTitle.current.style.animationIterationCount = "1";
                mySwiper.current.style.visibility = "visible";
                mySwiper.current.style.animation = "2s slideLeft";
                mySwiper.current.style.animationIterationCount = "1";
            }
          }
          window.addEventListener("scroll", active)
        }
      },[window.scrollY]);

    return(<>
    <p ref={projectsTitle} className="projectsTitleText">Projects</p>

    
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
        {({ isActive }) => 
        (<>
            {isActive ?
           
            <Slide name="Portfolio" nameClass="slideDown" iconClass="iconsDown" imgName="/public/portfolio.PNG"></Slide>
             : 
             <Slide name="Portfolio" nameClass="slideUp" iconClass="iconsUp" imgName="/public/portfolio.PNG"></Slide>
            }
        </>)
            }
        </SwiperSlide>

        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/todolist.PNG"></img>
            {isActive ? <h1 className="slideDown">To-Do List App</h1> : <h1 className="slideUp">To-Do List App</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            
            
            {isActive ?
            <>
            <img src="/public/stopwatch.PNG"></img>
              <h1 className="slideDown">Stopwatch Program</h1>
            <div className="iconsDown">
              <img src="/public/javascriptIcon.PNG"></img>
              <img src="/public/htmlIcon.PNG"></img>
              <img src="/public/cssIcon.PNG"></img>
            </div>
            </>
             : 
             <>
             <img src="/public/stopwatch.PNG"></img>
              <h1 className="slideUp">Stopwatch Program</h1>
            <div className="iconsUp">
              <img src="/public/javascriptIcon.PNG"></img>
              <img src="/public/htmlIcon.PNG"></img>
              <img src="/public/cssIcon.PNG"></img>
            </div>
            </>}
            </>)
            }
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/digitalclock.PNG"></img>
            {isActive ? <h1 className="slideDown">Digital Clock</h1> : <h1 className="slideUp">Digital Clock</h1>}
            </>)}
        </SwiperSlide>
        <SwiperSlide>
        {({ isActive }) => (<>
            
            
            {isActive ?
            <>
            <img src="/public/calculator.PNG"></img>
              <h1 className="slideDown">Calculator Program</h1>
            <div className="iconsDown">
              <img src="/public/javascriptIcon.PNG"></img>
              <img src="/public/htmlIcon.PNG"></img>
              <img src="/public/cssIcon.PNG"></img>
            </div>
            </>
             : 
             <>
             <img src="/public/calculator.PNG"></img>
              <h1 className="slideUp">Calculator Program</h1>
            <div className="iconsUp">
              <img src="/public/javascriptIcon.PNG"></img>
              <img src="/public/htmlIcon.PNG"></img>
              <img src="/public/cssIcon.PNG"></img>
            </div>
            </>}
            </>)
            }
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
        <SwiperSlide>
        {({ isActive }) => (<>
            <img src="/public/colorpicker.PNG"></img>
            {isActive ? <h1 className="slideDown">Color Picker</h1> : <h1 className="slideUp">Color Picker</h1>}
            </>)}
        </SwiperSlide>
    </Swiper>
   
   
    </>);
}
export default Projects