import React from "react";
import "./OverviewBefore.scss";
const OverviewBefore = () => {
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
        <div className="welcome">Welcome to the farm world</div>
      </div>
      <div className="grid-2">
        <ul>
          <li>Create stable from Stable Management </li>
          <li>Add groups to your stable from Group Management </li>
          <li>Add data to your group from Data </li>
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
