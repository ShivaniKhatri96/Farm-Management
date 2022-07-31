import "../../styles/_global.scss";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Select from "react-select";
import { colorStyles } from "../../styles/SelectStyles";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./groupForm.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleGroupActive } from "../../pages/groups/groupSlice";
const GroupForm = () => {
  const dispatch = useAppDispatch();
  const groupFormActive = useAppSelector(
    (state) => state.group.groupFormActive
  );
  const handleGroupClose = () => {
    if (groupFormActive === true) {
      dispatch(toggleGroupActive());
    }
  };
  // temporary options
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className={groupFormActive ? "modalContainer" : "modalClose"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handleGroupClose} />
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
            <div className="grid">
              <div>
                <label className="formLabel">Group name</label>
                <input className="formInput" placeholder="Enter a group name" />
              </div>
              <div>
                <label className="formLabel">No. of animals</label>
                <input
                  className="formInput"
                  type="number"
                  placeholder="Enter total animals"
                />
              </div>
            </div>

            <div className="grid">
              <div>
                <label className="formLabel">Start date</label>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  dateFormat="MMMM d, yyyy"
                  className="formInput"
                  minDate={new Date()}
                />
              </div>
              <div>
                <label className="formLabel">End date</label>
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  dateFormat="MMMM d, yyyy"
                  className="formInput"
                  placeholderText="Enter an end date"
                  minDate={startDate}
                />
              </div>
            </div>
            <div>
              <label className="formLabel">Status</label>
              <div className="grid">
                <div className="toggleActiveBtn">Active</div>
                <div className="inactiveBtn">Inactive</div>
              </div>
            </div>
          </div>
          <input type="submit" className="formSubmit" />
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
