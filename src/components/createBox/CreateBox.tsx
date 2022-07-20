import React from "react";
import "./createBox.scss";
const CreateBox = () => {
  return (
    <div className="grid-box">
      <div className="create-box">
        <div className="name">Stable Management</div>
        <div className="body-box">
          <div>
            <div className="form-button">Create</div>
          </div>
          <div className="text">Click to add a stable to your farm</div>
        </div>
      </div>
    </div>
  );
};

export default CreateBox;
