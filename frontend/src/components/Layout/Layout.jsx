import "./Layout.css";
import { Outlet } from "react-router-dom";

import Sidebar from "../SideBar/Sidebar.jsx";
const Layout = () => {
  return (
    <div className="home-layout-main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
