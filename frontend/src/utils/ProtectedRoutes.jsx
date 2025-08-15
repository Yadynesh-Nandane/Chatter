// import { axiosInstance } from "./axios";
// import { signedInSlice } from "./authSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const issignedin = useSelector((state) => state.isSignedin);
  console.log("protected route is signed in: ", issignedin);

  return issignedin ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
