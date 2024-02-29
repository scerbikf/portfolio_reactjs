import React, {useEffect} from "react";

function Header(){

  useEffect(() => {
    let selectHeader = document.querySelector("#header")
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled")
        } else {
          selectHeader.classList.remove("header-scrolled")
        }
      }
      document.addEventListener("scroll", headerScrolled)
    }
  },[window.scrollY]);

  useEffect(() => {
    const home = document.querySelector("#home")
    const about = document.querySelector("#about")
    const Projects = document.querySelector("#Projects")
    if (home, about, Projects) {
      const active = () => {
        if (window.scrollY < 700){
          home.classList.add("active")
          about.classList.remove("active")
          Projects.classList.remove("active")
        }
        else if(window.scrollY > 700 && window.scrollY < 1500){
          about.classList.add("active")
          home.classList.remove("active")
          Projects.classList.remove("active")
        }
        else if(window.scrollY > 1500){
          Projects.classList.add("active")
          home.classList.remove("active")
          about.classList.remove("active")
        }
      }
      document.addEventListener("scroll", active)
    }
  },[window.scrollY]);

    return(
    <header>
        <div id="header" className="headerDiv">
            <nav id="navbar" className="navbar">
                <ul>
                <li><a id="home" className="nav-link scrollto active" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Home</a></li>
                <li><a id="about" className="nav-link scrollto" onClick={() => window.scrollTo({top: 880, behavior: "smooth"})}>About</a></li>
                <li><a id="Projects" className="nav-link scrollto" onClick={() => window.scrollTo({top: 1700, behavior: "smooth"})}>Projects</a></li>
                </ul>
            </nav>
        </div>
  </header>);
}
export default Header