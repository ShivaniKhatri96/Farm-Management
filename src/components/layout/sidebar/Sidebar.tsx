import React from "react";
import "../sidebar/sidebarContainer.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const navMenu = [
  { name: "Overview", route: "/" },
  { name: "Stable Management", route: "/stables" },
  { name: "Group Management", route: "/groups" },
  { name: "Data", route: "/data" },
];
const Sidebar = () => {
  const location = useLocation();
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
      {/* menu */}
      <div className="menu">
        {navMenu.map((menu) => (
          <div key={menu.name}>
            <div className={menu.name === "Data" ? "menu-data" : "single-menu"}>
              <Link to={menu.route} className="link-style">
                {menu.name}
              </Link>
            </div>
            {/* this temporary div will be later replaced by another div */}
            {menu.name === "Overview" && location.pathname === "/" && (
              <div> I am overview </div>
            )}
            {/* <div className="grey-border"/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
