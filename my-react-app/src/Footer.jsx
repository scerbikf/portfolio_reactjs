import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer(){

return(<footer className="footerDiv">
        <button className="button-57" role="button"><span className="text">Button 57</span><span>Alternate text</span></button>
        <ul className="iconsList">
            <li>
                <a className="facebook" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i aria-hidden="true"><FaFacebookF /></i>
                </a>
            </li>
            <li>
                <a className="twitter" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i aria-hidden="true"><CiLinkedin /></i>
                </a>
            </li>
            <li>
                <a className="instagram" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i aria-hidden="true"><FaInstagram /></i>
                </a>
            </li>
            <li>
                <a className="google" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i aria-hidden="true"><FaGithub /></i>
                </a>
            </li>
        </ul>
        <p>Filip Ščerbík ©2024</p>
        </footer>)}
export default Footer