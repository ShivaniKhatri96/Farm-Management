import React, { FC } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "../layoutPage/layoutPage.scss";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const headerMenu = [
  { name: "Settings", route: "/settings", icon: faGear },
  { name: "Logout", route: "/", icon: faRightFromBracket },
];

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layoutBody">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
