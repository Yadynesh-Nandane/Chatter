import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProtectedRouutes from "./utils/ProtectedRoutes.jsx";

import { useEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import { useDispatch } from "react-redux";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import { checkAuth } from "./utils/authSlice.js";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  // const isSignedIn = useSelector((state) => state.auth?.isSignedIn);

  return (
    <>
      <Navbar />
      <div className="main-wrapper-container">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route element={<ProtectedRouutes />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
