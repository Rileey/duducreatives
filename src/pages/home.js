import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'
import './home.css'
// import { Link } from 'react-router-dom';
import image from '../images/IMG_9910.jpeg'
import nigerianBrewries from "../images/nb.png"
import jameson from "../images/jameson.png"
import walker from "../images/walker.svg"
import tb from "../images/tb.png"
import video from '../videos/dudu-reel.mp4'
import slider from '../components/slider-images/slider'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InlineWidget } from "react-calendly";

const Home = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, slider.length, page)
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }
    return (
        <div className="App">
        <NavBar />
        <div className="homebody">
          <div className="top-half">
            <div className="overlay">
              <div className="overlay-writeup-container">
              <span className="overlay-title">
                We tell African Stories
              </span>
              <span className="overlay-writeup">
              Our vision is to portray global stories from an African perspective with International standards and cultural relevance.
              </span>
              </div>
            </div>
            <video
             className="jumbotron"
             src={video}
             autoplay=""
             loop
             muted
             type="video/mp4"
             width={'100%'}
             height={'100%'}
             alt="jumbotron" />
          </div>
          <div className="mid-half">
            <div className="mid-left">
              <div className="left-message">
              <span className="welcome">
                Welcome to DÚDÚ studios.
              </span>
              <span className="message">
              dúdú is an African collective focused on telling brand stories that create authentic emotional connections with audiences.
              </span>
              </div>
            </div>
            <div className="mid-right">
              <img className="team" src={image} alt="team" srcset="" />
            </div>
          </div>
          
          <div className="bottom-half">
            <span className="clients">
              Our Clients
            </span>
            <div className="clients-container">
              <div className="client-list">
                <img src={nigerianBrewries} className="client-logo" alt="" />
                <img src={jameson} className="client-logo" alt="" />
                <img src={walker}className="client-logo" alt="" />
                <img src={tb} className="client-logo" alt="" />
              </div>
            </div>
          </div>
        </div>
          <div className="calendly">
          <span className="schedule" id="contact">
                Schedule a meeting with us
              </span>
          <InlineWidget url="https://calendly.com/duducreatives/consultation_call" />
          </div>
        <Footer/>
      </div>  
    );
}

export default Home