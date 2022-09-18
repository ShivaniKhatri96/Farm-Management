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
import { useTranslation } from "react-i18next";

const DataForm = () => {
  const { t } = useTranslation(["common", "data"]);
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
    <div className={dataFormActive ? "modalVisible" : "modalContainer"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handledataClose} />
        </div>
        <div className="formBody">
          <div>
            <div className="formTitle">{t("data:createData")}</div>
            <div className="formTitleSecond">{t("data:fillDataForm")}</div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel">{t("data:date")}</label>
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
                <label className="formLabel">{t("data:selectStable")}</label>
                <Select options={options} styles={colorStyles} />
              </div>
              <div>
                <label className="formLabel">{t("data:selectGroup")}</label>
                <Select options={options} styles={colorStyles} />
              </div>
            </div>
            <div>
              <label className="formLabel">{t("data:feedIntake")}</label>
              <input
                className="formInput"
                placeholder={t("data:enterFeedIntake")}
              />
            </div>
            <div className="gridForm">
              <div>
                <label className="formLabel">{t("data:waterIntake")}</label>
                <input
                  className="formInput"
                  placeholder={t("data:enterWaterIntake")}
                />
              </div>
              <div>
                <label className="formLabel">{t("data:temperature")}</label>
                <input
                  className="formInput"
                  placeholder={t("data:enterTemperature")}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="formSubmit"
            value={t("common:submit")}
          />
        </div>
      </div>
    </div>
  );
};

export default DataForm;
