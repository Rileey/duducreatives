// import { Link } from "react-router-dom"
import { animateScroll as scroll, Link } from 'react-scroll';
import "./navbar.css"
import dudu from "../../images/icon.jpg"

const NavBar = () => {
    return(
        <div className="nav-container">
            <div className="nav-logo">
                <span className="logo">
                    {/* <Link to="/"> */}
                    <img className="logo-img" onClick={() => scroll.scrollToTop()} src={dudu} alt="" />
                    {/* </Link> */}
                </span>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <Link to="wwd-h1" style={{display: "contents"}} smooth={true} duration={1000}>
                        About Us 
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="calendly" style={{display: "contents"}} smooth={true} duration={1000}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar