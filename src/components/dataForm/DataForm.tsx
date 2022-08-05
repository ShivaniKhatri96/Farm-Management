import React from "react";
import "../../styles/_global.scss";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Select from "react-select";
import { colorStyles } from "../../reactSelectStyles/SelectStyles";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleDataActive } from "../../pages/data/dataSlice";
const DataForm = () => {
  const dispatch = useAppDispatch();
  const dataFormActive = useAppSelector((state) => state.data.dataFormActive);
  const handledataClose = () => {
    if (dataFormActive === true) {
      dispatch(toggleDataActive());
    }
  };
  const [date, setDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  // temporary options
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={dataFormActive ? "modalContainer" : "modalClose"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handledataClose} />
        </div>
        <div className="formBody">
          <div>
            <div className="formTitle">Create Data</div>
            <div className="formTitleSecond">
              Fill this form to create a Data
            </div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel">Date</label>
              <ReactDatePicker
                selected={date}
                onChange={(date: Date) => setDate(date)}
                dateFormat="MMMM d, yyyy"
                className="formInput"
                minDate={new Date()}
              />
            </div>
            <div className="gridForm">
              <div>
                <label className="formLabel">Select stable</label>
                <Select options={options} styles={colorStyles} />
              </div>
              <div>
                <label className="formLabel">Select group</label>
                <Select options={options} styles={colorStyles} />
              </div>
            </div>
            <div>
              <label className="formLabel">Feed intake(kg)</label>
              <input className="formInput" placeholder="Enter feed intake" />
            </div>
            <div className="gridForm">
              <div>
                <label className="formLabel">Water intake(l)</label>
                <input className="formInput" placeholder="Enter water intake" />
              </div>
              <div>
                <label className="formLabel">Temperature(°C)</label>
                <input className="formInput" placeholder="Enter temperature" />
              </div>
            </div>
          </div>
          <input type="submit" className="formSubmit" />
        </div>
      </div>
    </div>
  );
};

export default DataForm;
