import "./Layout.css";
import { Routes, Route, Outlet } from "react-router-dom";

import Chats from "../Chats/Chats.jsx";
import Sidebar from "../SideBar/Sidebar.jsx";
import ChatPane from "../ChatPane/ChatPane.jsx";
import Notfound from "../../pages/NotFound/Notfound.jsx";
import Explore from "../../pages/Explore/Explore.jsx";

const Layout = () => {
  return (
    <div className="home-layout-main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
