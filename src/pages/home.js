import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'
import './home.css'
// import { Link } from 'react-router-dom';
import image from '../images/IMG_9910.jpeg'
import umba from "../images/Umba.png"
import cbn from "../images/CBN.png"
import Gtb from "../images/Gtbank.png"
import maggi from "../images/maggi.jpg"
import Softcom from "../images/softcom.png"
import video from '../videos/dudu-reel.mp4'
import slider from '../components/slider-images/slider'
import { useState } from 'react';
import { wrap } from '@popmotion/popcorn'
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
              Our vision is to champion authentic African stories and become trailblazers in video production across Africa. We're dedicated to revolutionizing storytelling on the continent, setting new benchmarks for excellence, and earning unwavering confidence from our clients through our expertise in delivering compelling narratives from the heart of Africa.
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
              Trusted By
            </span>
            <div className="clients-container">
              <div className="client-list">
                <img src={umba} className="client-logo" alt="Umba" />
                <img src={cbn} className="client-logo" alt="CBN" />
                <img src={Gtb}className="client-logo" alt="GTB" />
                <img src={maggi} className="client-logo" alt="Maggi" />
                <img src={Softcom} className="client-logo" alt="Softcom" />
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