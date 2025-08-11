import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo-container">
          <Link className="nav-link" to="/">
            <h3 className="logo">Chatter</h3>
          </Link>
        </div>
        <div className="nav-container">
          <nav>
            <ul className="nav-ul">
              <Link className="nav-link" to="/">
                <li className="nav-li">Home</li>
              </Link>
              <Link className="nav-link" to="/about">
                <li className="nav-li">About</li>
              </Link>
              <li className="nav-li">
                <Link className="nav-signin-link" to="/signin">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
