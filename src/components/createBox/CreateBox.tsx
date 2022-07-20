import React, { FC } from "react";
import "./createBox.scss";

interface CreateProps {
  page: string;
  add: string;
  to: string;
}
const CreateBox: FC<CreateProps> = ({ page, add, to }): JSX.Element => {
  return (
    <div className="grid-box">
      <div className="create-box">
        <div className="name">{page}</div>
        <div className="body-box">
          <div>
            <div className="form-button">Create</div>
          </div>
          <div className="text">
            Click to add a {add} to your {to}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBox;
