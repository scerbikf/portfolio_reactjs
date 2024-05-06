import React, {useEffect, useRef} from "react";


function About(){

    const barHTML = useRef(null);
    const barCSS = useRef(null);
    const barJS = useRef(null);
    const barSASS = useRef(null);
    const barTW = useRef(null);
    const barBT = useRef(null);
    const barREACT = useRef(null);
    const barPHP = useRef(null);
    const barSQL = useRef(null);
    const barPYTHON = useRef(null);
    const barJAVA = useRef(null);

    useEffect(() => {

        if(barHTML, barCSS, barJS, barSASS, barTW, barBT, barREACT, barPHP, barSQL, barPYTHON, barJAVA) {
          const active = () => {
            if(window.innerWidth > 1100 ? window.scrollY > 600 : window.scrollY > 1100){
                barHTML.current.style.width = "95%"
                barCSS.current.style.transition = "1.5s 0.4s width ease-in-out"
                barCSS.current.style.width = "95%"
                barJS.current.style.transition = "1.5s 0.6s width ease-in-out"
                barJS.current.style.width = "95%"
                barREACT.current.style.transition = "1.5s 0.8s width ease-in-out"
                barREACT.current.style.width = "90%"
                barSASS.current.style.transition = "1.5s 1s width ease-in-out"
                barSASS.current.style.width = "85%"
                barTW.current.style.transition = "1.5s 1.2s width ease-in-out"
                barTW.current.style.width = "80%"
                barBT.current.style.transition = "1.5s 1.4s width ease-in-out"
                barBT.current.style.width = "80%"
                barPHP.current.style.transition = "1.5s 1.6s width ease-in-out"
                barPHP.current.style.width = "75%"
                barSQL.current.style.transition = "1.5s 1.8s width ease-in-out"
                barSQL.current.style.width = "70%"
                barPYTHON.current.style.transition = "1.5s 2s width ease-in-out"
                barPYTHON.current.style.width = "60%"
                barJAVA.current.style.transition = "1.5s 2.2s width ease-in-out"
                barJAVA.current.style.width = "55%"
            }
          }
          window.addEventListener("scroll", active)
        }
      },[window.scrollY]);

    return(<>
        <div className="aboutDiv">
                        <p className="aboutTitleText">About</p>
                        <div className="aboutDivContent">
                        <div className="imgAbout">
                            <img src="/public/profile2.jpg" alt="profile" className="profile" />
                            <p className="whoAmI">So, who am I?</p>
                            <p className="aboutMeText">
                                Im Frontend & Freelance web developer from Trebisov, Slovakia.
                                I intend to improve everyday and collect new experience and skills everywhere i possibly can.
                                Im self-taught developer with 2 years of learning mainly ReactJS, JavaScript, HTML and CSS.
                            </p>
                        </div>
                    <div className="skillsDiv">
                            <p>HTML</p> 
                            <div className="progress">
                                <div ref={barHTML} className="progress-bar2"></div>                       
                            </div> 
                    
                            <p>CSS</p>  
                            <div className="progress">
                                <div ref={barCSS} className="progress-bar2"></div>                       
                            </div> 
                   
                            <p>JavaScript</p> 
                            <div className="progress">
                                <div ref={barJS} className="progress-bar2"></div>                       
                            </div> 

                            <p>ReactJS</p> 
                            <div className="progress">
                                <div ref={barREACT} className="progress-bar2"></div>                       
                            </div> 

                            <p>SASS</p>  
                            <div className="progress">
                                <div ref={barSASS} className="progress-bar2"></div>                       
                            </div>

                            <p>Tailwind</p> 
                            <div className="progress">
                                <div ref={barTW} className="progress-bar2"></div>                       
                            </div>

                            <p>Bootstrap</p> 
                            <div className="progress">
                                <div ref={barBT} className="progress-bar2"></div>                       
                            </div>

                            <p>PHP</p> 
                            <div className="progress">
                                <div ref={barPHP} className="progress-bar2"></div>                       
                            </div> 

                            <p>SQL</p> 
                            <div className="progress">
                                <div ref={barSQL} className="progress-bar2"></div>                       
                            </div> 

                            <p>Python</p> 
                            <div className="progress">
                                <div ref={barPYTHON} className="progress-bar2"></div>                       
                            </div> 

                            <p>Java</p> 
                            <div className="progress">
                                <div ref={barJAVA} className="progress-bar2"></div>                       
                            </div>
                
                    </div>
                </div>
        </div>
        <hr className="hrAbout"></hr>
        </>);
}
export default About