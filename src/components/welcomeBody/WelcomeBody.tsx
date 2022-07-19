import React from "react";
import "./welcomeBody.scss";
import landscapeImg from "../../images/sheepsLandscapev3.jpg";
import portraitImg from "../../images/sheeps.jpg";
const WelcomeBody = () => {
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
        <div className="welcomeText">Welcome to the farm world</div>
        <div className="bodyText">
          <div className="secondText">
            Join our platform to make your farming journey enjoyable
          </div>
          <div className="thirdText">
            3 step guide to track your farm related data
          </div>
          <ol className="list">
            <li>Create stable from Stable Management </li>
            <li>Add groups to your stable from Group Management </li>
            <li>Add data to your group from Data </li>
          </ol>
        </div>
        <div className="signupBtn">SignUp</div>
      </div>
    </div>
  );
};

export default WelcomeBody;
