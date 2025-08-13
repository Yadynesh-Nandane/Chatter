import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation().pathname;

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
              {pathname == "/signin" || pathname == "/signup" ? (
                ""
              ) : (
                <li className="nav-li">
                  <Link className="nav-signin-link" to="/signin">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
