import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    return(
        <div className="nav-container">
            <div className="nav-logo">
                <span className="logo">
                    <Link to="/">
                    dúdú
                    </Link>
                </span>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <Link to="/">
                    Home
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/about-us">
                    About Us 
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to="/contact-us">
                    Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar