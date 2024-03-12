import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

function Portfolio(){
    return(<>
            <Header/>
            <div className="homeBackground"></div>
            <div className="content">
                <Home/>
                <About/>
                <Projects/>
            </div>
        </>);
}
export default Portfolio