import React from "react";
import "./OverviewBefore.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const OverviewBefore = () => {
  const {i18n, t} = useTranslation(["welcome"]);
  return (
    <div className="gridOverview">
      <div className="grid-1">
        <img
          src={process.env.PUBLIC_URL + "assets/cowsv3.jpg"}
          alt="picture of cows in the field"
          className="cowsImg"
        />
        <img
          src={process.env.PUBLIC_URL + "assets/chickens.jpg"}
          alt="chickens in the field"
          className="chickenImg"
        />
        <div className="welcome">{t("welcome")}</div>
      </div>
      <div className="grid-2">
        <ul>
          <li>{t("createStable")} </li>
          <li>{t("addGroups")} </li>
          <li>{t("addData")}</li>
        </ul>
      </div>
      <div className="grid-3">
        <div>Happy Farming</div>
        <img
          src={process.env.PUBLIC_URL + "assets/newLogo.png"}
          alt="Logo"
          height="50px"
          width="180px"
        />
      </div>
    </div>
  );
};

export default OverviewBefore;
