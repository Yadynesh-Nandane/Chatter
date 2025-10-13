import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  // const dispatch = useDispatch();
  const location = useLocation();
  const isSignedIn = useSelector((state) => state.auth?.isSignedIn);

  if (isSignedIn === null) {
    return <div>Loading...</div>; // You can replace with a spinner component
  }

  return isSignedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
