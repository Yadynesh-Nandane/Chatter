import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRouutes from "./utils/ProtectedRoutes.jsx";

import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import { axiosInstance } from "./utils/axios.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import { signedInSlice } from "./utils/authSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.isSignedIn);
  console.log("app.jsx ", signedIn);

  useEffect(() => {
    (async () => {
      const res = await axiosInstance.get("/auth/checkauth");
      dispatch(signedInSlice(res.data));
    })();
    console.log("is signed in: ", signedIn);
  }, [signedIn, dispatch]);

  return (
    <>
      <Navbar />
      <div className="main-wrapper-container">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route element={<ProtectedRouutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
