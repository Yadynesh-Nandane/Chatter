import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import { checkAuth } from "./utils/authSlice.js";
import ProtectedRouutes from "./utils/ProtectedRoutes.jsx";

import Layout from "./components/Layout/Layout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Notfound from "./pages/NotFound/Notfound.jsx";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  // const isSignedIn = useSelector((state) => state.auth?.isSignedIn);

  return (
    <>
      {pathname !== "/" ? <Navbar /> : ""}
      {/* <Navbar /> */}
      <div
        className={
          pathname !== "/"
            ? "main-wrapper-container"
            : "fullscreen-main-wrapper-container"
        }
      >
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRouutes />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
          </Route>

          {/* Default Route */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
