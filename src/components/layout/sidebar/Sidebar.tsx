import React from "react";
import "../sidebar/sidebarContainer.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

const navMenu = [
  { name: "Overview", route: "/" },
  { name: "Stable Management", route: "/stables" },
  { name: "Group Management", route: "/groups" },
  { name: "Data", route: "/data" },
];
const Sidebar = () => {
  const location = useLocation();
  const hamburgerOn = useAppSelector(state => state.header.hamburgerOn);
  return (
    <div className={hamburgerOn ? "containerOn" : "container"}>
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
            <Link to={menu.route} className="link-style">
              <div
                className={menu.name === "Data" ? "menu-data" : "single-menu"}
              >
                {menu.name}
              </div>
            </Link>

            {/* this temporary div will be later replaced by another div */}
            {/* {menu.name === "Overview" && location.pathname === "/" && (
              <div> I am overview </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
