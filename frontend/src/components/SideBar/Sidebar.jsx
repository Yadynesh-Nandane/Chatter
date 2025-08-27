import "./Sidebar.css";
import { FaCircleUser, FaGear, FaUsers } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const menuItems = [
  { label: "Emplore", icon: FaSearch },
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
          <div className="side-menu-item-wrapper" key={index}>
            <div className="side-menu-item-icon-wrapper">
              <Icon className="side-menu-item-icon" />
            </div>
            <div className="side-menu-item">
              <p className="item">{itemName.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
