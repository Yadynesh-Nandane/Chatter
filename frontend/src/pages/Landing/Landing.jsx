import "./Landing.css";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import { MdOutlineSecurity } from "react-icons/md";
import { IoIosVideocam, IoIosCall } from "react-icons/io";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import chatGif from "../../assets/Groupchats.gif";
import videoCalls from "../../assets/pexels-shvetsa-4226140.jpg";
import chat from "../../assets/vecteezy_concept-illustration-chat.jpg";
import audioCalls from "../../assets/pexels-mart-production-7709264.jpg";

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
              <Header />
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
        <div className="features-container" id="about">
          <div className="features-wrapper">
            <h1 className="features-main-heading">Here’s What You’ll Love</h1>
            <div className="features-benifit-container">
              <div className="video-call-feature-container">
                <div className="video-call-feature-wrapper">
                  <div className="video-call-feature-icon-wrapper">
                    <IoIosVideocam className="feature-icon video" />
                  </div>
                  <div className="video-sub-heading-description-container">
                    <h3 className="video-call-feature-heading">
                      High Quality Video Calls
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
                    <IoIosCall className="feature-icon audio" />
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
                    <MdOutlineSecurity className="feature-icon messaging" />
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
          <div className="about-features-wrapper">
            <div className="videocall-feature-container">
              <div className="videocall-feature-wrapper">
                <div className="videocall-img-container">
                  <img
                    className="videocall-img"
                    src={videoCalls}
                    alt="Video Call Image"
                  />
                </div>
                <div className="videoCall-feature-info-container">
                  <h2 className="videocall-heading">
                    From Texts to Talking — Start a Video Call in One Click!
                  </h2>
                  <p className="videocall-subHeading">
                    Turn every chat into a real conversation with instant video
                    calling. Connect face-to-face in seconds and enjoy smooth,
                    high-quality video communication that makes every
                    interaction more personal, engaging, and effortless.
                  </p>
                  <Link className="startvideocall" to="/signin">
                    Start Video Call
                  </Link>
                </div>
              </div>
            </div>
            <div className="audiocall-feature-container">
              <div className="audiocall-feature-wrapper">
                <div className="audiocall-feature-info-container">
                  <h1 className="audiocall-heading">
                    Turn every chat into a real conversation with instant audio
                    calling.
                  </h1>
                  <p className="audiocall-subheading">
                    Connect instantly through crystal-clear audio calls and make
                    your conversations more natural and personal. Enjoy smooth,
                    high-quality voice communication that keeps you connected
                    anytime, anywhere — effortlessly.
                  </p>
                  <Link className="startaudiocall" to="/signin">
                    Start Audio Call
                  </Link>
                </div>
                <div className="audiocall-img-container">
                  <img
                    src={audioCalls}
                    alt="Audio Call Image"
                    className="audiocall-img"
                  />
                </div>
              </div>
            </div>
            <div className="chat-feature-container">
              <div className="chat-feature-wrapper">
                <div className="chat-img-container">
                  <img src={chat} alt="Audio Call Image" className="chat-img" />
                </div>
                <div className="chat-feature-info-container">
                  <h1 className="chat-heading">
                    Keep every conversation alive with instant real-time chat.
                  </h1>
                  <p className="chat-subheading">
                    Experience fast, secure, and seamless messaging that keeps
                    your conversations flowing. Share texts, emojis, and files
                    instantly — all in one place — for effortless, engaging, and
                    real-time communication.
                  </p>
                  <Link className="startchatnow" to="/signin">
                    Start Chatting Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
