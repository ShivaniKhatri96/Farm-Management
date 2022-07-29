import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Select from "react-select";
import { colorStyles } from "../../styles/SelectStyles";
const GroupForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={"modalContainer"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} />
        </div>
        <div className="formBody">
          <div>
            <div className="formTitle">Create Group</div>
            <div className="formTitleSecond">
              Fill this form to create a Group
            </div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel">Select stable</label>
              <Select options={options} styles={colorStyles} />
            </div>
            <div>
              <label className="formLabel">Group name</label>
              <input className="formInput" placeholder="Enter a group name" />
            </div>
            <div>
              <label className="formLabel">Number of animals</label>
              <input
                className="formInput"
                type="number"
                placeholder="Enter number of animals"
              />
            </div>
            <div>
              <label className="formLabel">Start date</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">End date</label>
              <input className="formInput" />
            </div>
            <div>
              <label className="formLabel">Status</label>
              <input className="formInput" />
            </div>
          </div>
          <input type="submit" className="formSubmit" />
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
