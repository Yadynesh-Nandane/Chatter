import "./SignIn.css";
import chat from "../../assets/chat2.gif";
import okay from "../../assets/icons8-ok.gif";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaLock, FaEyeSlash, FaEnvelope } from "react-icons/fa6";

import { axiosInstance } from "../../utils/axios";
import { signedInSlice } from "../../utils/authSlice";

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const isSignedin = useSelector((state) => state.auth.isSignedIn);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // React built in hook.
  useEffect(() => {
    if (isSignedin) {
      navigate(location.state?.from || "/", { replace: true });
    }
    if (email && password) {
      setDisabled(false);
    }
  }, [email, password, isSignedin, location, navigate]);

  // Function: To handle form submit action.
  const onClickHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        email,
        password,
      };
      axiosInstance.post("/auth/signin", data).then((response) => {
        setSuccess(true);
        dispatch(signedInSlice(response.data));
        setTimeout(() => {
          setSuccess(false);
          navigate("/");
        }, 1000);
        console.log("Axios response: ", response);
      });
    } catch (error) {
      console.error("error occured while signing up: ", error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <div className="animation-container">
          <img className="signin-animation" src={chat} alt="Chatter" />
        </div>
        {success ? (
          <div className="success-animation-container">
            <img
              className="signin-success-animation"
              src={okay}
              alt="Success"
            />
          </div>
        ) : (
          <div className="form-container">
            <div className="signin-form-heading-container">
              <h1 className="signin-form-heading">Sign In</h1>
            </div>
            <form className="signin-form">
              <div className="signin-inp-container">
                <div className="signin-icon-container-before">
                  <FaEnvelope className="signin-icon email-icon" />
                </div>
                <CustomInput
                  inpId={"email"}
                  inpType={"email"}
                  inpName={"email"}
                  inpFocus={true}
                  inpAutoComplete={"username"}
                  inpClass={"signin-inp email"}
                  inpPlaceholder={"johndoe@xyz.com"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="signin-inp-container">
                <div className="signin-icon-container-before">
                  <FaLock className="signin-icon password-icon" />
                </div>
                <CustomInput
                  inpId={"password"}
                  inpName={"password"}
                  inpPlaceholder={"********"}
                  inpAutoComplete={"new-password"}
                  inpClass={"signin-inp password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  inpType={passwordVisibility ? "text" : "password"}
                />
                <div
                  className="signin-icon-container-after"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                  {passwordVisibility ? (
                    <FaEyeSlash className="signin-icon passvisibility-icon" />
                  ) : (
                    <FaEye className="signin-icon passvisibility-icon" />
                  )}
                </div>
              </div>
              <div className="signin-btn-container">
                <CustomButton
                  loading={loading}
                  disabled={disabled}
                  btnType={"submit"}
                  btnText={"Sign In"}
                  onClick={onClickHandler}
                  btnClass={"btn-signin-submit"}
                />
              </div>
              <p className="signup-links">
                <Link
                  className="signup-link forgetpassword-page-link"
                  to="/forgetpassword"
                >
                  Forget Password?
                </Link>
              </p>
              <p className="signup-links">
                New User?{" "}
                <Link className="signup-link signup-page-link" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
