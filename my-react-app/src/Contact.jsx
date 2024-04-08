import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

function Contact(){

  const form = useRef();
  const submitBtn = useRef();
  const [isActiveBtn, setisActiveBtn] = useState(false);

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

    const checkBtn = (e) => {

      e.preventDefault();

      if(!isActiveBtn){
        submitBtn.current.classList.add("activeBtn")
        setisActiveBtn(!isActiveBtn)
        sendEmail(e)
      }else if(isActiveBtn){
        submitBtn.current.classList.remove("activeBtn")
        setisActiveBtn(!isActiveBtn)
      }
    }

    const textBtn = isActiveBtn ? <FaCheck /> : "Submit"
    
    return(<>
    <div className="contactDiv">
            <p className="contactTitleText">Contact</p>
            <p className="contactText">Have a question or want to work together?</p>
            <div className="formDiv">
              <form ref={form} onSubmit={checkBtn}>
                <div>
                <label>Name</label><br/>
                <input type="text" name="user_name" className="contactInputs" required/>
                </div>
                <div>
                <label>Email</label><br/>
                <input type="email" name="user_email" className="contactInputs" required/>
                </div>
                <div>
                <label>Message</label><br/>
                <textarea name="message" className="contactInputs" style={{minHeight:"80px"}} required/>
                </div>
                <div className="contactItems">
                  <a className="mailIcon" href="mailto:filipscerbik@gmail.com"><HiOutlineMail /></a>
                  <a className="mailText" href="mailto:filipscerbik@gmail.com">filipscerbik@gmail.com</a>
                  <button className="submitBtn" ref={submitBtn}>  
                    <span>{textBtn}</span>
                  </button>
                </div>
              </form>
            </div>
        </div>
        </>)}
export default Contact