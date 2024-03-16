import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m4od11t',
       'template_rp6n3nb',
        form.current, {
        publicKey: 'hQBxcvV88KKAAxJfY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(<div className="contactDiv">
            <p className="contactTitle">Contact</p>
            <p className="contactText">Have a question or want to work together?</p>
            <div className="formDiv">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" className="contactInputs"/>
                <br/>
                <label>Email</label>
                <input type="email" name="user_email" className="contactInputs"/>
                <br/>
                <label>Message</label>
                <textarea name="message" className="contactInputs" style={{minHeight:"80px"}}/>
                <br/>
                <input type="submit" value="Send"/>
              </form>
            </div>
        </div>);
}
export default Contact