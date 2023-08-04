import React from 'react';
import "./footer.css"
import logo from "../../images/icon.jpg"

const Footer = () => {
  return (
  <div className="footer-container">
      <div className="footer-contents-container">
          <div className="riley">
            <div className="footer-ends">
                <img src={logo} className="client-logo" alt="Umba" />
                <span className="riley-subtitle">
                Company slogan <br />(DÚDÚ = BLACK in yoruba language)
              </span>
                <span className="riley-title">
                    DÚDÚ creatives
                </span>
            </div>
          </div>
          <span className="rights">
          © Copyright 2022. All right reserved
          </span>
      </div>
  </div>);
};

export default Footer;