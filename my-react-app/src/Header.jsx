import React, {useEffect, useRef} from "react";
import ProgressBar from "./ProgressBar.jsx";

function Header(){

  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    
      const active = () => {
        if (window.scrollY < 600){
          home.current.classList.add("active")
          about.current.classList.remove("active")
          projects.current.classList.remove("active")
          contact.current.classList.remove("active")
        }
        else if(window.innerWidth > 1100 ? window.scrollY > 600 && window.scrollY < 1600 : window.scrollY > 600 && window.scrollY < 1900){
          about.current.classList.add("active")
          home.current.classList.remove("active")
          projects.current.classList.remove("active")
          contact.current.classList.remove("active")
        }
        else if(window.innerWidth > 1100 ? window.scrollY > 1500 && window.scrollY < 2530 : window.scrollY > 1900 && window.scrollY < 2600){
          projects.current.classList.add("active")
          home.current.classList.remove("active")
          about.current.classList.remove("active")
          contact.current.classList.remove("active")
        }
        else if(window.innerWidth > 1100 ? window.scrollY > 2430 : window.scrollY > 2600){
          contact.current.classList.add("active")
          home.current.classList.remove("active")
          about.current.classList.remove("active")
          projects.current.classList.remove("active")
        }
      }
      document.addEventListener("scroll", active)

  },[window.scrollY]);

  const scrollHome = () => {
      window.scrollTo({top: 0, behavior: "smooth"})
  }

  const scrollAbout = () => {
    if(window.innerWidth > 1100){
      window.scrollTo({top: 1000, behavior: "smooth"})
    }
    else{
      window.scrollTo({top: 850, behavior: "smooth"})
    }
  }

  const scrollProjects = () => {
    if(window.innerWidth > 1100){
      window.scrollTo({top: 1900, behavior: "smooth"})
    }
    else{
      window.scrollTo({top: 2050, behavior: "smooth"})
    }
  }

  const scrollContact = () => {
    if(window.innerWidth > 1100){
      window.scrollTo({top: 2900, behavior: "smooth"})
    }
    else{
      window.scrollTo({top: 2800, behavior: "smooth"})
    }
  }

    return(
    <>
        <div className="headerDiv">
            <nav className="navbar">
                <ul>
                <li><a ref={home} className="nav-link scrollto active" onClick={scrollHome}>Home</a></li>
                <li><a ref={about} className="nav-link scrollto" onClick={scrollAbout}>About</a></li>
                <li><a ref={projects} className="nav-link scrollto" onClick={scrollProjects}>Projects</a></li>
                <li><a ref={contact} className="nav-link scrollto" onClick={scrollContact}>Contact</a></li>
                </ul>
            </nav>
            <ProgressBar className="progressNav" max="100"></ProgressBar>
        </div>
  </>);
}
export default Header