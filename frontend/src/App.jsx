import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import { checkAuth } from "./utils/authSlice.js";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

import Layout from "./components/Layout/Layout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import Chat from "./pages/Chat/Chat.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Notfound from "./pages/NotFound/Notfound.jsx";
import ChatPane from "./components/ChatPane/ChatPane.jsx";
import ChatsList from "./components/ChatsList/ChatsList.jsx";
import Settings from "./pages/Settings/Settings.jsx";

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
            <Route element={<Layout />}>
              <Route path="/" element={<Explore />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="friends" element={<Chat />}>
                <Route index element={<ChatsList />} />
                <Route path=":id" element={<ChatPane />} />
              </Route>
            </Route>
          </Route>

          {/* Default Route */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
