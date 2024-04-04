import PropTypes from 'prop-types'


function Slide(props){
    
    return(<>
            <img src={props.imgName}></img>
            <h1 className={props.nameClass}>{props.name}</h1>
            <div className={props.iconClass}>
                <img src="/public/reactIcon.PNG" style={{display:props.react, zIndex:"0"}}></img>
                <img src="/public/javascriptIcon.PNG" style={{display:props.js, zIndex:"0"}}></img>
                <img src="/public/htmlIcon.PNG" style={{display:props.html, zIndex:"0"}}></img>
                <img src="/public/cssIcon.PNG" style={{display:props.css, zIndex:"0"}}></img>
            </div>
      </>)}
     

Slide.propTypes = {
    name: PropTypes.string,
    imgName: PropTypes.string,
    react: PropTypes.string,
    js: PropTypes.string,
    html: PropTypes.string,
    css: PropTypes.string,
    nameClass: PropTypes.string,
    iconClass: PropTypes.string,
}
Slide.defaultProps = {
    name: "Project",
    img: "NoImage",
    react: "block",
    js: "block",
    html: "block",
    css: "block",
    nameClass: "",
    iconClass: "",
}
export default Slide