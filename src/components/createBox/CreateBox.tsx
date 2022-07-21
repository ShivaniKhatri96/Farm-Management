import React, { FC } from "react";
import "./createBox.scss";

interface CreateProps {
  page: string;
  add: string;
  to: string;
  handleClick: () => void;
}
const CreateBox: FC<CreateProps> = ({
  page,
  add,
  to,
  handleClick,
}): JSX.Element => {
  return (
    <div className="grid-box">
      <div className="create-box">
        <div className="name">{page}</div>
        <div className="body-box">
          <div className="form-button" onClick={handleClick}>
            Create
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
