
function Contact(){

    return(<div className="contactDiv">
            <p className="contactTitle">Contact</p>
            <p className="contactText">Have a question or want to work together?</p>
            <div className="formDiv">
                <form className="contactForm" method="post">
                    <label className="contactLabels" for="name">Name</label><br/>
                    <input className="contactInputs" type="text" id="name" name="name" required></input>
                    <br/>
                    <label className="contactLabels" for="email">Email</label><br/>
                    <input className="contactInputs" type="email" id="email" name="email" required></input>
                    <br/>
                    <label className="contactLabels" for="message">Message</label><br/>
                    <textarea className="contactInputs" id="message" name="message" required style={{minHeight:"80px"}}></textarea>
                    <br/>
                    <input className="submitButton" type="submit" value="Send"></input>
                </form>
            </div>
        </div>);
}
export default Contact