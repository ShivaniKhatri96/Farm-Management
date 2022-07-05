import React from "react";
import "../header/headerContainer.scss";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // for dropdown with settings and logout
  const [on, setOn] = useState<boolean>(false);
  const handleClient = () => {
    setOn(!on);
  };
  console.log(on);
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
        <div onClick={handleClient}>
          <FontAwesomeIcon icon={faCircleUser} className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Header;
