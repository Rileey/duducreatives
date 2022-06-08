import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'
import './home.css'
import { Link } from 'react-router-dom';
import image from '../images/IMG_9910.jpg'
import nigerianBrewries from "../images/nb.png"
import jameson from "../images/jameson.png"
import walker from "../images/walker.svg"
import sunday from "../images/sunday.png"
import mavin from "../images/mavin.png"
import tb from "../images/tb.png"
import uma from "../images/uma.png"
import cc from "../images/cc.png"
import aristo from "../images/aristo.png"
import raa from "../images/raa.png"
import radioxity from "../images/radioxity.png"
import redtown from "../images/redtown.png"
import nh from "../images/nh.png"
import plus from "../images/plus-tv.webp"
import video from '../videos/dudu-reel.mp4'

const Home = () => {
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
              <Link to="/about-us">
              <button type="button" className="overlay-button">More Info</button>
              </Link>
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
                Welcome to dúdú studios.
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
                <img src={sunday} className="client-logo" alt="" />
                <img src={mavin} className="client-logo" alt="" />
                <img src={tb} className="client-logo" alt="" />
                <img src={uma} className="client-logo" alt="" />
                <img src={cc} className="client-logo" alt="" />
                <img src={aristo} className="client-logo" alt="" />
                <img src={raa} className="client-logo" alt="" />
                <img src={plus} className="client-logo" alt="" />
                <img src={radioxity} className="client-logo" alt="" />
                <img src={redtown} className="client-logo" alt="" />
                <img src={nh} className="client-logo" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>  
    );
}

export default Home