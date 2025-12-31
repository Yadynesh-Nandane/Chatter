import "./Footer.css";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-main-wrapper">
        <div className="footer-container">
          <div className="footer">
            <div className="footer-logo-container">
              <h5 className="landing-footer-logo">Chatter</h5>
            </div>
            <div className="footer-nav-container">
              <nav className="footer-nav">
                <ul className="footer-ul">
                  <li className="footer-nav-li">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="footer-nav-li">
                    <Link to="/">About</Link>
                  </li>
                  <li className="footer-nav-li">
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="social-icons-container">
              <a
                className="social-icon x-link"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="x" />
              </a>
              <a
                className="social-icon facebook-link"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="facebook" />
              </a>
              <a
                className="social-icon instagram-link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="instagram" />
              </a>
              <a
                className="social-icon github-link"
                href="https://github.com/Yadynesh-Nandane/Chatter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="copyright-wrapper">
            <p className="copyright-text">
              <span className="copyright-symbol">&copy;</span> 2025 Chatter. All
              rights reserved.
            </p>
            <div className="conditions-container">
              <p className="privacy-policy-text">
                <Link>Privacy Policy</Link>
              </p>
              <p className="copyright-text">
                <Link>Terms & Conditions</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
