import React, {useRef} from 'react';
// import 'dotenv/config'
import emailjs from "@emailjs/browser"
import NavBar from '../components/navbar/navbar'
import { InlineWidget } from "react-calendly";
import "./contact.css"
import Footer from '../components/footer/footer';

const Contact = () => {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_serviceID}`, `${process.env.REACT_APP_templateID}`, form.current, `${process.env.REACT_APP_publicKey}`)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    });
    e.target.reset()
  };

  return (
    <div className="App">
    <NavBar />
  <div className="contact-container">
      <div className="compact-contact-container">
          <div className="contact-title-container">
              <span className="contact-title" id="contact">
                Schedule a meeting with us
              </span>
          </div>
          <div className="social">
            <span className="social-item"><a href="https://www.instagram.com/dudu.creatives/"><i class="fab fa-instagram"></i>Instagram</a></span>
            <span className="social-item"><a href="https://twitter.com/duducreatives"><i class="fab fa-twitter"></i>Twitter</a></span>
            <span className="social-item"><a href="mailto:info@duducreatives.com"><i class="fas fa-at"></i>Email</a></span>
            <span className="social-item"><a href="https://www.linkedin.com/company/d%C3%BAd%C3%BA-creatives"><i class="fab fa-linkedin"></i>Linkedin</a></span>
          </div>
            <div className="number">
            <span className="social-item"><a href="tel:+234-808-999-9844"><i class="fas fa-mobile"></i>+234-808-99-9844</a></span>     
            </div>

            <form ref={form} onSubmit={sendEmail} className="form">
            <input type="text" name="subject" id="subject" placeholder="Subject" className="input" />
            <input type="text" name="name" id="name" placeholder="Your Full Name" className="input" />
            <input type="email" name="email" id="email" placeholder="Your Email Address" className="input" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="What would you like me to do for you?" className="text-area"></textarea>
            <input type="submit" value="Submit" className="input-btn" />
          </form>
          
            <div className="calendly">
            <InlineWidget url="https://calendly.com/duducreatives/consultation_call" />
          </div>
      </div>
  </div>
  <Footer />
  </div>);
};

export default Contact;