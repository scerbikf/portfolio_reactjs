import React, {useEffect, useRef} from "react";
import ProgressBar from "./ProgressBar.jsx";

function Header(){

  const selectHeader = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 500) {
          selectHeader.current.classList.add("header-scrolled")
        } else {
          selectHeader.current.classList.remove("header-scrolled")
        }
      }
      document.addEventListener("scroll", headerScrolled)
    }
  },[window.scrollY]);

  useEffect(() => {
    
      const active = () => {
        if (window.scrollY < 500){
          home.current.classList.add("active")
          about.current.classList.remove("active")
          projects.current.classList.remove("active")
          contact.current.classList.remove("active")
        }
        else if(window.scrollY > 500 && window.scrollY < 1400){
          about.current.classList.add("active")
          home.current.classList.remove("active")
          projects.current.classList.remove("active")
          contact.current.classList.remove("active")
        }
        else if(window.scrollY > 1400 && window.scrollY < 2330){
          projects.current.classList.add("active")
          home.current.classList.remove("active")
          about.current.classList.remove("active")
          contact.current.classList.remove("active")
        }
        else if(window.scrollY > 2330){
          contact.current.classList.add("active")
          home.current.classList.remove("active")
          about.current.classList.remove("active")
          projects.current.classList.remove("active")
        }
      }
      document.addEventListener("scroll", active)

  },[window.scrollY]);

    return(
    <header>
        <div ref={selectHeader} id="header" className="headerDiv">
            <nav id="navbar" className="navbar">
                <ul>
                <li><a ref={home} className="nav-link scrollto active" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Home</a></li>
                <li><a ref={about} className="nav-link scrollto" onClick={() => window.scrollTo({top: 1000, behavior: "smooth"})}>About</a></li>
                <li><a ref={projects} className="nav-link scrollto" onClick={() => window.scrollTo({top: 1900, behavior: "smooth"})}>Projects</a></li>
                <li><a ref={contact} className="nav-link scrollto" onClick={() => window.scrollTo({top: 2900, behavior: "smooth"})}>Contact</a></li>
                </ul>
            </nav>
            <ProgressBar className="progressNav" max="100"></ProgressBar>
        </div>
  </header>);
}
export default Header