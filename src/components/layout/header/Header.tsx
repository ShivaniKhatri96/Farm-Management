import React, { useEffect } from "react";
import "../header/headerContainer.scss";
import {
  faCircleUser,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { toggleActive, toggleHamburger } from "./headerSlice";
import { useRef } from "react";
import { headerMenu } from "../layoutPage/Layout";
import UserService from "../../../services/UserService";
import Select from "react-select";
import { colorLangStyles } from "../../../reactSelectStyles/langStyles";

const Header = () => {
  const node = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.header.active);
  const hamburgerOn = useAppSelector((state) => state.header.hamburgerOn);
  const options = [
    { value: "english", label: "English" },
    { value: "Dutch", label: "Dutch" },
  ];
  const defaultOption = [{ value: "english", label: "English" }];
  const handleHamburger = () => {
    dispatch(toggleHamburger());
  };
  // for dropdown with settings and logout with redux
  const handleClient = () => {
    dispatch(toggleActive());
  };
  const handleDropdown = (name: string) => {
    if (name === "Logout") {
      UserService.doLogout();
    }
  };

  const clickOutside = (e: any) => {
    if (active === true && node.current && !node.current?.contains(e.target)) {
      dispatch(toggleActive());
    }
  };
  useEffect(() => {
    //when mouse is clicked outside the client icon, clickOutside function is called
    document.addEventListener("mousedown", clickOutside);
    // clean up function before running new effect
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [active]);
  //// Only re-runs the effect if active changes

  return (
    <div className="header-box">
      <Link className="logo" to={"/"}>
        <img
          src={process.env.PUBLIC_URL + "assets/newLogo.png"}
          alt="Logo"
          height="45px"
          width="160px"
        />
      </Link>
      {/*based on whether the user is logged in or not*/}
      <div className="client-grid">
        <Select
          options={options}
          styles={colorLangStyles}
          defaultValue={defaultOption[0]}
          components={{ DropdownIndicator: () => null }}
        />
        {!UserService.isLoggedIn() ? (
          <div className="login" onClick={() => UserService.doLogin()}>
            <FontAwesomeIcon icon={faArrowRightToBracket} /> LogIn
          </div>
        ) : (
          <div>
            {/* below large screens */}
            <div
              className={hamburgerOn ? "hamburgerOn" : "hamburger"}
              onClick={handleHamburger}
            />
            {/* this will be shown only from large screens */}
            <div className="client-area">
              <div className="client-name">Shivani</div>
              <div ref={node}>
                <div onClick={handleClient}>
                  <FontAwesomeIcon icon={faCircleUser} className="circle" />
                </div>
                {/* dropdown items */}
                {active && (
                  <div className="dropdown-client">
                    {headerMenu.map((menu) => (
                      <Link
                        key={menu.name}
                        className="dropdown-content"
                        to={menu.route}
                        onClick={() => {
                          handleDropdown(menu.name);
                          handleClient();
                        }}
                      >
                        <FontAwesomeIcon
                          icon={menu.icon}
                          className="icon-gap"
                        />
                        {menu.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
