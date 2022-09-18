import "../../styles/_global.scss";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Select from "react-select";
import { colorStyles } from "../../reactSelectStyles/SelectStyles";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./groupForm.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleGroupActive } from "../../pages/groups/groupSlice";
import { useTranslation } from "react-i18next";

const GroupForm = () => {
  const { t } = useTranslation(["common", "group"]);
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
    <div className={groupFormActive ? "modalVisible" : "modalContainer"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handleGroupClose} />
        </div>
        <div className="formBody">
          <div>
            <div className="formTitle">{t("group:createGroup")}</div>
            <div className="formTitleSecond">{t("group:fillGroupForm")}</div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel">{t("group:selectStable")}</label>
              <Select options={options} styles={colorStyles} />
            </div>
            <div className="gridForm">
              <div>
                <label className="formLabel">{t("group:groupName")}</label>
                <input
                  className="formInput"
                  placeholder={t("group:enterGroupName")}
                />
              </div>
              <div>
                <label className="formLabel">{t("group:noOfAnimals")}</label>
                <input
                  className="formInput"
                  type="number"
                  placeholder={t("group:enterTotalAnimals")}
                />
              </div>
            </div>

            <div className="gridForm">
              <div>
                <label className="formLabel">{t("group:startDate")}</label>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  dateFormat="MMMM d, yyyy"
                  className="formInput"
                  minDate={new Date()}
                />
              </div>
              <div>
                <label className="formLabel">{t("group:endDate")}</label>
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  dateFormat="MMMM d, yyyy"
                  className="formInput"
                  placeholderText={t("group:enterEndDate")}
                  minDate={startDate}
                />
              </div>
            </div>
            <div>
              <label className="formLabel">{t("group:status")}</label>
              <div className="gridStatus">
                <div className="toggleActiveBtn">{t("group:active")}</div>
                <div className="inactiveBtn">{t("group:inactive")}</div>
              </div>
            </div>
          </div>
          <input type="submit" className="formSubmit" value={t("common:submit")} />
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
