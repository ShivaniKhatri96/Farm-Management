import { FC } from "react";
import { useTranslation } from "react-i18next";

const Status: FC<{ status: string }> = ({ status }) => {
  const { t } = useTranslation(["group"]);
  return (
    <div className={status === "ACTIVE" ? "active" : "inactive"}>
      {status === "ACTIVE" ? t("active") : t("inactive")}
    </div>
  );
};

export default Status;
