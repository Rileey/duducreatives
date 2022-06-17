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
          <div className="carousel-container">
            <div className="carousel">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
              width='100%'
              style={{display: 'flex'}}
              key={page}
              src={slider[imageIndex]}
              custom={direction}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{
                x: {type: 'spring', stiffness: 300, damping: 300}, 
                opacity: {duration: 1}
              }}
              drag='x'
              dragConstraints={{left: 0, right: 0}}
              dragElastic={1}
              />
            </AnimatePresence>  
            <motion.button
              whileHover={{scale: 1.2, transition: {duration: 0.5}}}
              whileTap={{scale: 0.9}}
              onClick={() => paginate(1)}
              className="next"
              >
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </motion.button>

            <motion.button
              whileHover={{scale: 1.2, transition: {duration: 0.5}}}
              whileTap={{scale: 0.9}}
              className="prev"
              onClick={() => paginate(-1)}
              >
              <FontAwesomeIcon icon={faArrowLeft} size="1x" />
            </motion.button>
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



        <div className="wwd">
            <div className="wwd-container">
              <div className="wwd-img">
                <img className='left-img' src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
              </div>
              <div className="wwd-writeup">
                <div className="writeup-container">
                <h1 className='wwd-h1'>What we do</h1>
                <h2><strong>01- Strategy & Insight</strong></h2>
                <div className="wwd-sub">
                  <ul>
                   <li>Brand Strategy</li> 
                   <li>Communications strategy</li> 
                   <li>Content & Social Strategy</li> 
                   <li>Research, Insight & Reporting</li> 
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="wwd-container">
              <div className="wwd-writeup">
                <div className="writeup-container">
                <h2><strong>02 - Integrated Brand Campaigns</strong></h2>
                <div className="wwd-sub">
                  <ul>
                   <li>Integrated 360° campaigns</li> 
                   <li>Social/Content/Digital</li> 
                   <li>In-store/Ecomm</li> 
                  </ul>
                </div>
                </div>
              </div>
              <div className="wwd-img">
                <img className="right-img" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="" />
              </div>
            </div>
            <div className="wwd-container">
              <div className="wwd-img">
                <img className='left-img' src="https://images.pexels.com/photos/5157200/pexels-photo-5157200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              </div>
              <div className="wwd-writeup">
                <div className="writeup-container">
                <h2><strong>03 - Content & Production</strong></h2>
                <div className="wwd-sub">
                  <ul>
                   <li>Content strategy and creative</li> 
                   <li>Film and photography</li> 
                   <li>Graphic and animated content</li> 
                   <li>End-to-end production</li> 
                  </ul>
                  
                </div>
                <div className="yellow">
                <span className="sub-sub">
                  <a className="sub-sub under" href="https://calendly.com/duducreatives">
                  Schedule a FREE 15 Minutes Consultation.
                  </a>
                </span>
                </div>
                </div>
              </div>
            </div>
          </div>




          <div className="our-processes">
            <h1>Our Processes</h1>
            <span className="process-sub">
            Each creative consultation begins with a call. </span>
           <span className="process-sub"> Here we want to make sure we understand your brand thoroughly and your vision. 
            Our goal is to see through your eyes as much as possible and know what success looks like to you. </span>
           <span className="process-sub"> After this, our stellar creative team will provide you with insights and a roadmap based on your project requirements.
            Once aligned, we engage with you to execute each campaign, working as an extension of your team. </span>
           <span className="process-sub"> You will also be provided with a dedicated account manager to ensure that communication is fluid and efficient throughout.
            We love to work with disruptive brands who are interested in telling their stories in the most creative and authentic way.
            </span>
            <span className="sub-sub">
                <a className="sub-sub under" href="https://calendly.com/duducreatives">
                  Schedule a FREE 15 Minutes Consultation.
                </a>
            </span>
          </div>

          <div className="calendly">
          <InlineWidget url="https://calendly.com/duducreatives/15min" />
          </div>
        <Footer/>
      </div>  
    );
}

export default Home