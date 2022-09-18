import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CreateBox from "../../components/createBox/CreateBox";
import GroupForm from "../../components/groupForm/GroupForm";
import GroupTable from "../../components/groupTable/GroupTable";
import Layout from "../../components/layout/layoutPage/Layout";
import { toggleGroupActive } from "./groupSlice";
import { useTranslation } from "react-i18next";

const Groups = () => {
  const { t } = useTranslation(["common"]);
  const dispatch = useAppDispatch();
  const groupActive = useAppSelector((state) => state.group.groupFormActive);
  const handleGroup = () => {
    if (groupActive === false) {
      dispatch(toggleGroupActive());
    }
  };
  return (
    <Layout>
      <GroupForm />
      <CreateBox page={t("groupManagement")} add={t("group")} to={t("stable")} handleClick={handleGroup} />
      <GroupTable />
    </Layout>
  );
};

export default Groups;
