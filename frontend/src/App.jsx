import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "./reducers/authSlice.js";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  console.log("app.js authUser: ", authUser);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<SettingsPage />} />
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
