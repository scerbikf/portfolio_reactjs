
function About(){
    return(<>
        <p className="aboutTitleText">About</p>
        <div className="aboutDiv">
                <img src="/public/profile2.jpg" alt="profile" className="profile" />
                <p className="whoAmI">So, who am I?</p>
                <p className="skillsTitle">Skills</p>

                <div className="skillsDiv">
                    <div class="container">    
                        <div class="progress2 progress-moved">
                            <div class="progress-bar2" >
                            </div>                       
                        </div> 
                    </div>
                </div>

                <p className="aboutMeText">
                    My name is Filip Scerbik. Im a frontend software engineer & freelance web developer from Trebisov, Slovakia.
                    I love to improve everyday and collect new experience and skills everywhere i can.
                    Im self-taught programmer with 2 years of learning mainly HTML, CSS, JavaScript and ReactJS.
                </p>
        </div>
        </>);
}
export default About