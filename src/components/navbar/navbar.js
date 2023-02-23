import { Link } from "react-router-dom"
// import { animateScroll as scroll, Link } from 'react-scroll';
import "./navbar.css"
import dudu from "../../images/icon.jpg"

const NavBar = () => {
    return(
        <div className="nav-container">
            <div className="nav-logo">
                <span className="logo">
                    <Link to="/">
                    <img className="logo-img" src={dudu} alt="" />
                    </Link>
                </span>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <Link to="/about-us" >
                        About Us 
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/works" >
                        Works
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/contact-us" >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar