import React from "react";
import "../../styles/_global.scss";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleStableActive } from "../../pages/stables/stableSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { registerLocale } from "react-datepicker";
import { SubmitHandler, useForm } from "react-hook-form";
import AsterikError from "../miniComponents/AsterikError";
import ErrorMessage from "../miniComponents/ErrorMessage";

type Inputs = {
  stableName: string;
  stableLocation: string;
};
const StableForm = () => {
  const { t } = useTranslation(["stable", "common"]);
  const dispatch = useAppDispatch();
  const formActive = useAppSelector((state) => state.stable.stableFormActive);
  const handleClose = () => {
    if (formActive === true) {
      dispatch(toggleStableActive());
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={formActive ? "modalVisible" : "modalContainer"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handleClose} />
        </div>
        <form className="formBody" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="formTitle">{t("stable:createStable")}</div>
            <div className="formTitleSecond">{t("stable:fillStableForm")}</div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel">
                {t("stable:stableName")}
                {errors?.stableName && <AsterikError />}
              </label>
              <input
                className="formInput"
                placeholder={t("stable:enterName")}
                {...register("stableName", { required: true })}
              />
              {errors?.stableName && <ErrorMessage />}
            </div>

            <div>
              <label className="formLabel">
                {t("stable:location")}
                {errors?.stableName && <AsterikError />}
              </label>
              <input
                className="formInput"
                placeholder={t("stable:enterLocation")}
                {...register("stableLocation", { required: true })}
              />
              {errors?.stableLocation && <ErrorMessage />}
            </div>
          </div>
          <input
            type="submit"
            className="formSubmit"
            value={t("common:submit")}
          />
        </form>
      </div>
    </div>
  );
};

export default StableForm;
