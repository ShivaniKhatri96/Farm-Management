import React, { FC } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "../layoutPage/layoutPage.scss";

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
