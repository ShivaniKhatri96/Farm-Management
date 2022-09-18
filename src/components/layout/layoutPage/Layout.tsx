import React, { FC } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "../layoutPage/layoutPage.scss";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
//array of objects for header menu
export const headerMenu = [
  { name: "settings", route: "/settings", icon: faGear },
  { name: "logout", route: "/", icon: faRightFromBracket },
];

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { i18n, t } = useTranslation(["common"]);
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
