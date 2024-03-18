import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function Portfolio(){
    return(<>
            <Header/>
            <div className="homeBackground"></div>
            <div className="content">
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
            
        </>);
}
export default Portfolio