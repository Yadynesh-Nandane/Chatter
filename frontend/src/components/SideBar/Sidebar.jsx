import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCircleUser, FaGear, FaUsers } from "react-icons/fa6";

const menuItems = [
  { label: "Explore", icon: FaSearch },
  { label: "Friends", icon: FaUsers },
  { label: "Profile", icon: FaCircleUser },
  { label: "Settings", icon: FaGear },
];

const Sidebar = () => {
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-logo-container">
        <div className="sidebar-logo-wrapper">
          <p className="sidebar-logo">C</p>
        </div>
        <div className="sidebar-logo-label-container">
          <p className="sidebar-logo-label">Chatter</p>
        </div>
      </div>
      {menuItems.map((itemName, index) => {
        const Icon = itemName.icon;
        return (
          <Link
            to={`/${itemName.label.toLowerCase()}`}
            className="sidebar-nav-links"
            key={index}
          >
            <div className="side-menu-item-wrapper">
              <div className="side-menu-item-icon-wrapper">
                <Icon className="side-menu-item-icon" />
              </div>
              <div className="side-menu-item">
                <p className="item">{itemName.label}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
