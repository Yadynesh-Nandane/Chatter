import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axios";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";

const Navbar = () => {
  // const pathname = useLocation().pathname;
  const [loading, setLoading] = useState(false);
  const isSignedin = useSelector((state) => state.auth.isSignedIn);

  const signOutHandler = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/auth/signout");
      console.log("signout response: ", response);
    } catch (error) {
      console.error("error while signing out: ", error);
    }
  };

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
              <li className="nav-li">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-li">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {isSignedin ? (
                <li className="nav-li">
                  <CustomButton
                    disabled={false}
                    loading={loading}
                    btnText={"LogOut"}
                    btnType={"button"}
                    onClick={signOutHandler}
                    btnClass="nav-signin-btn"
                  />
                </li>
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
