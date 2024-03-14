import PropTypes from 'prop-types'


function Slide(props){
    return(<>
            <img src={props.imgName}></img>
            <h1 className={props.nameClass}>{props.name}</h1>
            <div className={props.iconClass}>
                <img src="/public/reactIcon.PNG"></img>
                <img src="/public/javascriptIcon.PNG"></img>
                <img src="/public/htmlIcon.PNG"></img>
                <img src="/public/cssIcon.PNG"></img>
            </div>
      </>)}
     

Slide.propTypes = {
    name: PropTypes.string,
}
Slide.defaultProps = {
    name: "Project",
}
export default Slide