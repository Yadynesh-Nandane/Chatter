import "./SignUp.css";
import chat from "../../assets/chat2.gif";
import okay from "../../assets/icons8-ok.gif";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FaEye,
  FaLock,
  FaEyeSlash,
  FaEnvelope,
  FaCircleUser,
  FaMobileButton,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { axiosInstance } from "../../utils/axios";
import { signedInSlice } from "../../utils/authSlice";

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [cnfPassword, setCnfPassword] = useState("");
  const signedIn = useSelector((state) => state.signedIn);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [cnfPasswordVisibility, setCnfPasswordVisibility] = useState(false);

  // React built in hook.
  useEffect(() => {
    if (name && email && phone && password && cnfPassword) {
      setDisabled(false);
    }
    console.log("sign up: ", signedIn);
  }, [name, email, phone, password, cnfPassword]);

  // Function: To handle form submit action.
  const onClickHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        name,
        email,
        phone,
        password,
      };
      axiosInstance.post("/auth/signup", data).then((response) => {
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
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="animation-container">
          <img className="signup-animation" src={chat} alt="Chatter" />
        </div>
        {success ? (
          <div className="success-animation-container">
            <img
              className="signup-success-animation"
              src={okay}
              alt="Success"
            />
          </div>
        ) : (
          <div className="form-container">
            <div className="signup-form-heading-container">
              <h1 className="signup-form-heading">Sign Up</h1>
            </div>
            <form className="signup-form">
              <div className="signup-inp-container">
                <div className="signup-icon-container-before">
                  <FaCircleUser className="signup-icon name-icon" />
                </div>
                <CustomInput
                  inpId={"name"}
                  inpType={"text"}
                  inpName={"namel"}
                  inpFocus={true}
                  inpAutoComplete={"name"}
                  inpPlaceholder={"John Doe"}
                  inpClass={"signup-inp name"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="signup-inp-container">
                <div className="signup-icon-container-before">
                  <FaEnvelope className="signup-icon email-icon" />
                </div>
                <CustomInput
                  inpId={"email"}
                  inpType={"email"}
                  inpName={"email"}
                  inpAutoComplete={"username"}
                  inpClass={"signup-inp email"}
                  inpPlaceholder={"johndoe@xyz.com"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="signup-inp-container">
                <div className="signup-icon-container-before">
                  <FaMobileButton className="signup-icon phone-icon" />
                </div>
                <CustomInput
                  inpId={"phone"}
                  inpType={"tel"}
                  inpName={"phone"}
                  inpClass={"signup-inp phone"}
                  inpAutoComplete={"mobile tel"}
                  inpPlaceholder={"+91 xxxxxxxxxx"}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="signup-inp-container">
                <div className="signup-icon-container-before">
                  <FaLock className="signup-icon password-icon" />
                </div>
                <CustomInput
                  inpId={"password"}
                  inpName={"password"}
                  inpPlaceholder={"********"}
                  inpAutoComplete={"new-password"}
                  inpClass={"signup-inp password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  inpType={passwordVisibility ? "text" : "password"}
                />
                <div
                  className="signup-icon-container-after"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                  {passwordVisibility ? (
                    <FaEyeSlash className="signup-icon passvisibility-icon" />
                  ) : (
                    <FaEye className="signup-icon passvisibility-icon" />
                  )}
                </div>
              </div>
              <div className="signup-inp-container">
                <div className="signup-icon-container-before">
                  <FaLock className="signup-icon passvisibility-icon" />
                </div>
                <CustomInput
                  inpId={"cnf-password"}
                  inpName={"cnf-password"}
                  inpPlaceholder={"Confirm Password"}
                  inpAutoComplete={"new-password"}
                  inpClass={"signup-inp cnf-password"}
                  onChange={(e) => {
                    setCnfPassword(e.target.value);
                  }}
                  inpType={cnfPasswordVisibility ? "text" : "password"}
                />
                <div
                  className="signup-icon-container-after"
                  onClick={() =>
                    setCnfPasswordVisibility(!cnfPasswordVisibility)
                  }
                >
                  {cnfPasswordVisibility ? (
                    <FaEyeSlash className="signup-icon passvisibility-icon" />
                  ) : (
                    <FaEye className="signup-icon passvisibility-icon" />
                  )}
                </div>
              </div>
              <div className="signup-btn-container">
                <CustomButton
                  loading={loading}
                  disabled={disabled}
                  btnType={"submit"}
                  btnText={"Sign Up"}
                  onClick={onClickHandler}
                  btnClass={"btn-signup-submit"}
                />
              </div>
              <p className="signup-links">
                Already have an account?{" "}
                <Link className="signup-link signin-page-link" to="/signin">
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
