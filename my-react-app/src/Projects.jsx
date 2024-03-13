import React, {useEffect, useRef} from "react";

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
    <p ref={projectsTitle} className="projectsTitleText">About</p>
    <div className="projectsDiv"></div>
    </>);
}
export default Projects