import NavBar from '../components/navbar/navbar';
import './about.css'
import React, { useRef, useState } from 'react'
import Footer from '../components/footer/footer';

const About = () => {

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    return (
        <div className="App">
        <NavBar />
            <div className="about-container">
            <div className="about-heading">
                <div className="our-processes">
                    <span className="about-title">
                    About Us
                    </span>
                    <span className="process-sub">
                    DÚDÚ is an African collective focused on telling brand stories that create authentic emotional connections with audiences.
                    Our vision is to portray global stories from an African perspective with International standards and cultural relevance.
                    </span>
                    <span className="process-sub">
                    At DÚDÚ, we believe in the BLACK renaissance. We decode culture and put an unfiltered spotlight on your brand through future-focused thinking and creative storytelling.
                    Our team, birthed in Lagos , has worked on various projects for some of the biggest media outlets, record labels and global brands.
                    </span>
                </div>
            </div>
            </div>  
            <div className="about-container">
                <div className="about-heading">
                <div className="our-processes">
            <div className="about-title">Our Processes</div>
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
                <a className="under" href="https://calendly.com/duducreatives/consultation_call">
                  Schedule a FREE 15 Minutes Consultation.
                </a>
            </span>
          </div>

                </div>
            </div>
        <Footer/>


        </div>
    )
}

export default About