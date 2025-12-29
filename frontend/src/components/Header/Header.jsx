import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/" className="landing-logo-link">
          <h5 className="landing-logo">Chatter</h5>
        </Link>
      </div>
      <div className="nav-menu-container">
        <nav className="landing-nav-menu">
          <ul className="landing-nav-menu-ul">
            <li className="landing-nav-menu-li">
              <NavLink className="landing-nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="landing-nav-menu-li">
              <NavLink className="landing-nav-link" to="about">
                About
              </NavLink>
            </li>
            <li className="landing-nav-menu-li">
              <NavLink className="landing-nav-link" to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="signinBtn-container">
        <Link to="/signin" className="signinbtn">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
