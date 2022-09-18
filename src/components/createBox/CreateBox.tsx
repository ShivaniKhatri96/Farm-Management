import React, { FC } from "react";
import "./createBox.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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
  const { i18n, t } = useTranslation(["common"]);
  return (
    <div className="grid-box">
      <div className="create-box">
        <div className="name">{page}</div>
        <div className="body-box">
          <div className="form-button" onClick={handleClick}>
            {t("create")}
          </div>
          <div className="text">
          {t("clickInfo")} {add} {t("toYour")} {to}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBox;
