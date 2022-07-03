import React, { FC } from "react";
import Header from "../header/Header";
import Sidebar from "../Sidebar";
import "../layoutPage/layoutPage.scss"
type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="dropdown-client">bla bla</div>
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
