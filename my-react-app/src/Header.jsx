import React, {useEffect, useRef} from "react";

function Header(){

  const selectHeader = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

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
    
    if (home, about, projects, contact) {
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
    }
  },[window.scrollY]);

    return(
    <header>
        <div ref={selectHeader} id="header" className="headerDiv">
            <nav id="navbar" className="navbar">
                <ul>
                <li><a ref={home} className="nav-link scrollto active" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Home</a></li>
                <li><a ref={about} className="nav-link scrollto" onClick={() => window.scrollTo({top: 955, behavior: "smooth"})}>About</a></li>
                <li><a ref={projects} className="nav-link scrollto" onClick={() => window.scrollTo({top: 1915, behavior: "smooth"})}>Projects</a></li>
                <li><a ref={contact} className="nav-link scrollto" onClick={() => window.scrollTo({top: 2875, behavior: "smooth"})}>Contact</a></li>
                </ul>
            </nav>
        </div>
  </header>);
}
export default Header