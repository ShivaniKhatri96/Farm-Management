import React, { useEffect } from "react";
import "../header/headerContainer.scss";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { toggleActive } from "./headerSlice";
import { useRef } from "react";
const Header = () => {
  const node = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.header.active);
  // for dropdown with settings and logout with redux
  const handleClient = () => {
    dispatch(toggleActive());
  };

  const clickOutside = (e: any) => {
    if (active === true && node.current && !node.current?.contains(e.target)) {
      dispatch(toggleActive());
      console.log("here I am outside")
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
          src={process.env.PUBLIC_URL + "assets/logo.png"}
          alt="Logo"
          height="85px"
          width="250px"
        />
      </Link>
      <div className="client-area">
        <div className="client-name">Shivani</div>
        <div ref={node} onClick={handleClient}>
          <FontAwesomeIcon icon={faCircleUser} className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Header;
