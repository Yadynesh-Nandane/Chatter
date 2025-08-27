import "./Layout.css";
import ChatPane from "../ChatPane/ChatPane.jsx";
import Chats from "../Chats/Chats.jsx";
import Sidebar from "../SideBar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Notfound from "../../pages/NotFound/Notfound.jsx";

const Layout = () => {
  return (
    <div className="home-layout-main-container">
      <Sidebar />
      <Chats />
      <ChatPane />

      <Routes>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Layout;
