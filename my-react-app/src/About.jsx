
function About(){
    return(<>
        <p className="aboutTitleText">About</p>
        <div className="aboutDiv">
                <img src="/public/profile2.jpg" alt="profile" className="profile" />
                <p className="whoAmI">So, who am I?</p>
                <p className="skillsTitle">Skills</p>
                <ul className="skills">
                    <li className="skillsBtns">HTML</li>
                    <li className="skillsBtns">CSS</li>
                    <li className="skillsBtns">JavaScript</li>
                    <li className="skillsBtns">ReactJs</li>
                    <li className="skillsBtns">NodeJs</li>
                    <li className="skillsBtns">Bootstrap</li>
                    <li className="skillsBtns">PHP</li>
                    <li className="skillsBtns">Python</li>
                    <li className="skillsBtns">Java</li>
                    <li className="skillsBtns">SQL</li>
                    <li className="skillsBtns">Git</li>
                </ul>
                <p className="aboutMeText">
                    My name is Filip. Im a frontend software engineer & freelance web developer from Trebisov, Slovakia.
                    I love to improve everyday and collect new experience and skills everywhere i can.
                    Im self-taught programmer with 2 years of learning mainly HTML, CSS, JavaScript and ReactJS.
                </p>
        </div>
        </>);
}
export default About