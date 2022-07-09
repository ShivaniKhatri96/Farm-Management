import React, { FC } from "react";
import Header from "../header/Header";
import Sidebar from "../Sidebar";
import "../layoutPage/layoutPage.scss";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { toggleActive } from "../header/headerSlice";
type Props = {
  children?: React.ReactNode;
};
const headerMenu = [
  { name: "Settings", route: "/settings", icon: faGear },
  { name: "Logout", route: "/welcome", icon: faRightFromBracket },
];
const Layout: FC<Props> = ({ children }) => {
  const active = useAppSelector((state) => state.header.active);
  const dispatch = useAppDispatch();
  const handleClient = () => {
    dispatch(toggleActive());
    console.log("here I am client")
  };
  return (
    <div >
      {active && (
        <div className="dropdown-client">
          {headerMenu.map((menu) => (
            <Link
              key={menu.name}
              className="dropdown-content"
              to={menu.route}
              onClick={handleClient}
            >
              <FontAwesomeIcon icon={menu.icon} className="icon-gap" />
              {menu.name}
            </Link>
          ))}
        </div>
      )}
      <div>
        <Header />
        {/* this will go inside layout body */}
        <Sidebar />
        {/* grid content is where this will go */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
