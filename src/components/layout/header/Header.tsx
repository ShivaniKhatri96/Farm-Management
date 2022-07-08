import React from "react";
import "../header/headerContainer.scss";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { toggleActive } from "./headerSlice";
const Header = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.header.active);
  // for dropdown with settings and logout with redux
  const handleClient = () => {
    dispatch(toggleActive());
  };
  const handleToggleLogo = () => {
    if (active === true) {
      dispatch(toggleActive());
    }
  };
  return (
    <div className="header-box">
      <Link className="logo" to={"/"} onClick={handleToggleLogo}>
        <img
          src={process.env.PUBLIC_URL + "assets/logo.png"}
          alt="Logo"
          height="85px"
          width="250px"
        />
      </Link>
      <div className="client-area">
        <div className="client-name">Shivani</div>
        <div onClick={handleClient}>
          <FontAwesomeIcon icon={faCircleUser} className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Header;
