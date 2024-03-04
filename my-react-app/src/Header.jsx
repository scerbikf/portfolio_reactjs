import React, {useEffect, useRef} from "react";

function Header(){

  const selectHeader = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);

  useEffect(() => {
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.current.classList.add("header-scrolled")
        } else {
          selectHeader.current.classList.remove("header-scrolled")
        }
      }
      document.addEventListener("scroll", headerScrolled)
    }
  },[window.scrollY]);

  useEffect(() => {
    
    if (home, about, projects) {
      const active = () => {
        if (window.scrollY < 700){
          home.current.classList.add("active")
          about.current.classList.remove("active")
          projects.current.classList.remove("active")
        }
        else if(window.scrollY > 700 && window.scrollY < 1500){
          about.current.classList.add("active")
          home.current.classList.remove("active")
          projects.current.classList.remove("active")
        }
        else if(window.scrollY > 1500){
          projects.current.classList.add("active")
          home.current.classList.remove("active")
          about.current.classList.remove("active")
        }
      }
      document.addEventListener("scroll", active)
    }
  },[window.scrollY]);

    return(
    <header>
        <div ref={selectHeader} id="header" className="headerDiv">
            <nav id="navbar" className="navbar">
                <ul>
                <li><a ref={home} id="home" className="nav-link scrollto active" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Home</a></li>
                <li><a ref={about} id="about" className="nav-link scrollto" onClick={() => window.scrollTo({top: 880, behavior: "smooth"})}>About</a></li>
                <li><a ref={projects} id="Projects" className="nav-link scrollto" onClick={() => window.scrollTo({top: 1700, behavior: "smooth"})}>Projects</a></li>
                </ul>
            </nav>
        </div>
  </header>);
}
export default Header