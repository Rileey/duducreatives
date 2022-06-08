import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"
import NavBar from '../components/navbar/navbar'
import "./contact.css"
import Footer from '../components/footer/footer';

const Contact = () => {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_t4xt03q', form.current, 'user_6GG8FBi4TqImBUfmGJ7dW')
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
                What project are you interested in?
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
            {/* <input type="text" name="subject" id="subject" placeholder="Subject" className="input" /> */}
        <select name='subject' id="subject" className="inpu-t">
            <option>Subject</option>
            <option value='Events'>Events</option>
            <option value='Music Video'>Music Video</option>
            <option value='Photography'>Photgraphy</option>
            <option value='Film Production'>Film Production</option>
            <option value='Commercials'>Commercials</option>
          </select>
            <input type="text" name="name" id="name" placeholder="Your Full Name" className="input" />
            <input type="email" name="email" id="email" placeholder="Your Email Address" className="input" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="How can we be of help?" className="text-area"></textarea>
            <input type="submit" value="Submit" className="input-btn" />
          </form>
      </div>
  </div>
  <Footer />
  </div>);
};

export default Contact;