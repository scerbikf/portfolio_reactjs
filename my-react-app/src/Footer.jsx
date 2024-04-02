import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Footer(){

return(<footer className="footerDiv">
        <button className="footerBtn" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}><FaArrowUp/></button>
        <hr className="hrFooter"></hr>
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