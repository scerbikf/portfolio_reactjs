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
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Portfolio" nameClass="slideDown" iconClass="iconsDown" imgName="/public/portfolio.PNG"></Slide>
                : 
                <Slide name="Portfolio" nameClass="slideUp" iconClass="iconsUp" imgName="/public/portfolio.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="To-Do List App" nameClass="slideDown" iconClass="iconsDown" imgName="/public/todolist.PNG"></Slide>
                : 
                <Slide name="To-Do List App" nameClass="slideUp" iconClass="iconsUp" imgName="/public/todolist.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Stopwatch Program" nameClass="slideDown" iconClass="iconsDown" imgName="/public/stopwatch.PNG" react={"none"}></Slide>
                : 
                <Slide name="Stopwatch Program" nameClass="slideUp" iconClass="iconsUp" imgName="/public/stopwatch.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Digital Clock" nameClass="slideDown" iconClass="iconsDown" imgName="/public/digitalclock.PNG"></Slide>
                : 
                <Slide name="Digital Clock" nameClass="slideUp" iconClass="iconsUp" imgName="/public/digitalclock.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Calculator Program" nameClass="slideDown" iconClass="iconsDown" imgName="/public/calculator.PNG" react={"none"}></Slide>
                : 
                <Slide name="Calculator Program" nameClass="slideUp" iconClass="iconsUp" imgName="/public/calculator.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Snake Game" nameClass="slideDown" iconClass="iconsDown" imgName="/public/snakegame.PNG" react={"none"}></Slide>
                : 
                <Slide name="Snake Game" nameClass="slideUp" iconClass="iconsUp" imgName="/public/snakegame.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Rock Paper Scissors Game" nameClass="slideDown" iconClass="iconsDown" imgName="/public/rockpapersc.PNG" react={"none"}></Slide>
                : 
                <Slide name="Rock Paper Scissors Game" nameClass="slideUp" iconClass="iconsUp" imgName="/public/rockpapersc.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Dice Game" nameClass="slideDown" iconClass="iconsDown" imgName="/public/dicegame.PNG" react={"none"}></Slide>
                : 
                <Slide name="Dice Game" nameClass="slideUp" iconClass="iconsUp" imgName="/public/dicegame.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Encryption Game" nameClass="slideDown" iconClass="iconsDown" imgName="/public/minigame.PNG" react={"none"}></Slide>
                : 
                <Slide name="Encryption Game" nameClass="slideUp" iconClass="iconsUp" imgName="/public/minigame.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="PingPong Game" nameClass="slideDown" iconClass="iconsDown" imgName="/public/pingpong.PNG" react={"none"}></Slide>
                : 
                <Slide name="PingPong Game" nameClass="slideUp" iconClass="iconsUp" imgName="/public/pingpong.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="TicTacToe Game" nameClass="slideDown" iconClass="iconsDown" imgName="/public/tictactoe.PNG" react={"none"}></Slide>
                : 
                <Slide name="TicTacToe Game" nameClass="slideUp" iconClass="iconsUp" imgName="/public/tictactoe.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Tip Calculator" nameClass="slideDown" iconClass="iconsDown" imgName="/public/tipcalculator.PNG" react={"none"}></Slide>
                : 
                <Slide name="Tip Calculator" nameClass="slideUp" iconClass="iconsUp" imgName="/public/tipcalculator.PNG"></Slide>
            }</>)}
        </SwiperSlide>
        <SwiperSlide>
            {({ isActive }) => (<>
              {isActive ?
                <Slide name="Color Picker" nameClass="slideDown" iconClass="iconsDown" imgName="/public/colorpicker.PNG"></Slide>
                : 
                <Slide name="Color Picker" nameClass="slideUp" iconClass="iconsUp" imgName="/public/colorpicker.PNG"></Slide>
            }</>)}
        </SwiperSlide>
    </Swiper>
   
   
    </>);
}
export default Projects