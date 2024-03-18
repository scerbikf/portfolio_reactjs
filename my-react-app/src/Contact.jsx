import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {

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
    
    return(<div className="contactDiv">
            <p className="contactTitle">Contact</p>
            <p className="contactText">Have a question or want to work together?</p>
            <div className="formDiv">
              <form ref={form} onSubmit={checkBtn}>
                <label>Name</label>
                <input type="text" name="user_name" className="contactInputs"/>
                <label>Email</label>
                <input type="email" name="user_email" className="contactInputs"/>
                <label>Message</label>
                <textarea name="message" className="contactInputs" style={{minHeight:"80px"}}/>
                <div className="contactRightSide">
                  <a className="mailIcon" href="mailto:filipscerbik@gmail.com"><HiOutlineMail /></a>
                  <a className="mailText" href="mailto:filipscerbik@gmail.com">filipscerbik@gmail.com</a>
                  <button className="submitBtn" ref={submitBtn}>  
                  <span>Submit</span>
                    <div className="success">
                      <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 29.756 29.756" style={{enableBackground:"new 0 0 29.756 29.756"}} xmlSpace="preserve">
	                    <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>
        </div>);
}
export default Contact