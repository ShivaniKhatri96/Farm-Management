import React from "react";
import "../../styles/_global.scss";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleStableActive } from "../../pages/stables/stableSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const StableForm = () => {
  const { t } = useTranslation(["stable", "common"]);
  const dispatch = useAppDispatch();
  const formActive = useAppSelector((state) => state.stable.stableFormActive);
  const handleClose = () => {
    if (formActive === true) {
      dispatch(toggleStableActive());
    }
  };
  return (
    <div className={formActive ? "modalVisible" : "modalContainer"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handleClose} />
        </div>
        <div className="formBody">
          <div>
            <div className="formTitle">{t("stable:createStable")}</div>
            <div className="formTitleSecond">
              {t("stable:fillStableForm")}
            </div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel">{t("stable:stableName")}</label>
              <input className="formInput" placeholder={t("stable:enterName")} />
            </div>
            <div>
              <label className="formLabel">{t("stable:location")}</label>
              <input className="formInput" placeholder={t("stable:enterLocation")} />
            </div>
          </div>
          <input type="submit" className="formSubmit" value={t("common:submit")} />
        </div>
      </div>
    </div>
  );
};

export default StableForm;
