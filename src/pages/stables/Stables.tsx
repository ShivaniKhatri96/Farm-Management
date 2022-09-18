import React from "react";
import CreateBox from "../../components/createBox/CreateBox";
import Layout from "../../components/layout/layoutPage/Layout";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleStableActive } from "./stableSlice";
import StableForm from "../../components/stableForm/StableForm";
import StableTable from "../../components/stableTable/StableTable";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Stables = () => {
  const dispatch = useAppDispatch();
  const stableActive = useAppSelector((state) => state.stable.stableFormActive);
  const { i18n, t } = useTranslation(["common","stable"]);
  const handleStable = () => {
    if (stableActive === false) {
      dispatch(toggleStableActive());
    }
  };
  // console.log(stableActive);
  return (
    <Layout>
      <StableForm />
      <CreateBox
        page={t("common:stableManagement")}
        add={t("common:stable")}
        to={t("stable:farm")}
        handleClick={handleStable}
      />
      <StableTable />
    </Layout>
  );
};

export default Stables;
