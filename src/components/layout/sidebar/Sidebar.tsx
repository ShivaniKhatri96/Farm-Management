import React from "react";
import "../sidebar/sidebarContainer.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { headerMenu } from "../layoutPage/Layout";
import UserService from "../../../services/UserService";
import { useTranslation } from "react-i18next";
const navMenu = [
  { name: "overview", route: "/" },
  { name: "stableManagement", route: "/stables" },
  { name: "groupManagement", route: "/groups" },
  { name: "data", route: "/data" },
];
const Sidebar = () => {
  const { t } = useTranslation(["common"]);
  const location = useLocation();
  const hamburgerOn = useAppSelector((state) => state.header.hamburgerOn);
  const handleDropdown = (name: string) => {
    if (name === "logout") {
      UserService.doLogout();
    }
  };
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
                {t(menu.name)}
              </div>
            </Link>

            {/* this temporary div will be later replaced by another div */}
            {/* {menu.name === "Overview" && location.pathname === "/" && (
              <div> I am overview </div>
            )} */}
          </div>
        ))}
        <div className="menuMobile">
          {headerMenu.map((menu) => (
            <Link
              key={menu.name}
              to={menu.route}
              className="link-style"
              onClick={() => {
                handleDropdown(menu.name);
              }}
            >
              <div className="menu-data-mobile">{t(menu.name)}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
