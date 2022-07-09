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

const Layout: FC<Props> = ({ children }) => {
  const active = useAppSelector((state) => state.header.active);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Header />
      {/* this will go inside layout body */}
      <Sidebar />
      {/* grid content is where this will go */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
