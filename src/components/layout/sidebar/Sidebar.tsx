import React from "react";
import "../sidebar/sidebarContainer.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const navMenu = [
  { name: "Overview", route: "/" },
  { name: "Stable Management", route: "/stables" },
  { name: "Group Management", route: "/groups" },
  { name: "Data", route: "/data" },
];
const Sidebar = () => {
  return (
    <div className="container">
      {/* searchbar */}
      <div className="searchbar-container">
        <input
          className="searchbar-styles"
          type="text"
          placeholder="Search..."
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-icon" />
      </div>

      <div>
        {navMenu.map((menu) => (
          <div key={menu.name}>
            <Link to={menu.route}>{menu.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
