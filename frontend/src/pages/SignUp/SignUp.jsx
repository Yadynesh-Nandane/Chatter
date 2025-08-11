import "./SignUp.css";
import chat from "../../assets/chat2.gif";
import okay from "../../assets/icons8-ok.gif";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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

  // React built in hook.
  useEffect(() => {
    if (name && email && phone && password) {
      setDisabled(false);
    }
  }, [name, email, phone, password]);

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
                <CustomInput
                  inpId={"name"}
                  inpType={"text"}
                  inpName={"namel"}
                  inpFocus={"true"}
                  inpAutoComplete={"name"}
                  inpPlaceholder={"John Doe"}
                  inpClass={"signup-inp name"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="signup-inp-container">
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
                <CustomInput
                  inpId={"password"}
                  inpType={"password"}
                  inpName={"password"}
                  inpPlaceholder={"********"}
                  inpAutoComplete={"new-password"}
                  inpClass={"signup-inp password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
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
                <Link className="signup-link forget-password-link" to="/signin">
                  Forget Password?
                </Link>
              </p>
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
