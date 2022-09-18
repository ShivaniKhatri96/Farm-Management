import React from "react";
import "./welcomeBody.scss";
import landscapeImg from "../../images/sheepsLandscapev3.jpg";
import portraitImg from "../../images/sheeps.jpg";
import { useTranslation } from "react-i18next";
const WelcomeBody = () => {
  const { t } = useTranslation(["welcome"]);
  return (
    <div>
      <img
        src={landscapeImg}
        alt="Sheeps in the field"
        className="landscapeImg"
      />
      <img
        src={portraitImg}
        alt="Sheeps in the field"
        className="portraitImg"
      />
      <div className="blackBox">
        <div className="welcomeText">{t("welcome")} </div>
        <div className="bodyText">
          <div className="secondText">
            {t("joinPlatform")}
          </div>
          <div className="thirdText">
           {t("guide")}
          </div>
          <ol className="list">
            <li>{t('createStable')} </li>
            <li>{t('addGroups')}</li>
            <li>{t('addData')}</li>
          </ol>
        </div>
        <div className="signupBtn">{t('signUp')}</div>
      </div>
    </div>
  );
};

export default WelcomeBody;
