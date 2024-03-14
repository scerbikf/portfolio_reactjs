import PropTypes from 'prop-types'


function Slide(props){
    return(<>
            <img src={props.imgName}></img>
            <h1 className={props.nameClass}>{props.name}</h1>
            <div className={props.iconClass}>
                <img src="/public/reactIcon.PNG" style={{display:props.react}}></img>
                <img src="/public/javascriptIcon.PNG" style={{display:props.js}}></img>
                <img src="/public/htmlIcon.PNG" style={{display:props.html}}></img>
                <img src="/public/cssIcon.PNG" style={{display:props.css}}></img>
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