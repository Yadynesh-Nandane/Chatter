import "./Landing.css";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import chatGif from "../../assets/Groupchats.gif";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosVideocam, IoIosCall } from "react-icons/io";

const Landing = () => {
  // const navigate = useNavigate();
  // const isSignedin = useSelector((state) => state.auth.isSignedIn);
  // useEffect(() => {
  //   if (isSignedin) {
  //     // navigate(location.state?.from || "/explore", { replace: true });
  //   }
  // }, [isSignedin, navigate]);

  return (
    <div className="landing-main-container">
      <div className="landing-wrapper">
        <div className="home-container">
          <div className="background-shape-wrapper">
            <div className="shape-container"></div>
            <div className="home-wrapper">
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
                        <Link className="landing-nav-link" to="/" active>
                          Home
                        </Link>
                      </li>
                      <li className="landing-nav-menu-li">
                        <Link className="landing-nav-link" to="about">
                          About
                        </Link>
                      </li>
                      <li className="landing-nav-menu-li">
                        <Link className="landing-nav-link" to="/contact">
                          Contact Us
                        </Link>
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
              <div className="landing-heading-wrapper">
                <div className="landing-heading-container">
                  <h1 className="landing-heading">
                    Your new favourite way to chat.
                  </h1>
                  <h2 className="landing-sub-heading">
                    Instant messaging, media sharing, and more — all at your
                    fingertips.
                  </h2>
                  <Link to="/signin" className="letsChatBtn">
                    Get Started
                  </Link>
                </div>
                <div className="chatgif-container">
                  <img className="chatGif" src={chatGif} alt="Group Chat" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-container" id="about">
          <div className="about-features-wrapper">
            <h1 className="about-main-heading">Here’s What You’ll Love</h1>
            <div className="features-benifit-container">
              <div className="video-call-feature-container">
                <div className="video-call-feature-wrapper">
                  <div className="video-call-feature-icon-wrapper">
                    <IoIosVideocam className="feature-icon" />
                  </div>
                  <div className="video-sub-heading-description-container">
                    <h3 className="video-call-feature-heading">
                      Easy Video Calls
                    </h3>
                    <p>
                      Seamless video calls that bring your conversations to
                      life—no downloads, just click and connect.
                    </p>
                  </div>
                </div>
              </div>
              <div className="audio-call-feature-container">
                <div className="audio-call-feature-wrapper">
                  <div className="audio-call-feature-icon-wrapper">
                    <IoIosCall className="feature-icon" />
                  </div>
                  <div className="audio-sub-heading-description-container">
                    <h3 className="audio-call-feature-heading">
                      Easy Audio Calls
                    </h3>
                    <p>
                      Crystal-clear, low-latency audio built for efficient and
                      uninterrupted communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="messaging-feature-container">
                <div className="messaging-feature-wrapper">
                  <div className="messaging-feature-icon-wrapper">
                    <MdOutlineSecurity className="feature-icon" />
                  </div>
                  <div className="messaging-heading-description-container">
                    <h3 className="messaging-feature-heading">
                      Safe, Private & Instant Messaging
                    </h3>
                    <p>
                      Fast, encrypted messaging that keeps your conversations
                      private and protected—every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
