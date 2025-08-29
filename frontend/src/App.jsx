import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import { checkAuth } from "./utils/authSlice.js";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

import Layout from "./components/Layout/Layout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home.jsx";
import Chats from "./pages/Chat/Chat.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Explore from "./pages/Explore/Explore.jsx";
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
      {pathname === "/signin" || pathname === "/signup" ? <Navbar /> : ""}
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
          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />}>
              <Route index path="/" element={<Explore />} />
              <Route path="friends/*" element={<Chat />} />
            </Route>
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
