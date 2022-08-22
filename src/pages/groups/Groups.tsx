import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CreateBox from "../../components/createBox/CreateBox";
import GroupForm from "../../components/groupForm/GroupForm";
import GroupTable from "../../components/groupTable/GroupTable";
import Layout from "../../components/layout/layoutPage/Layout";
import { toggleGroupActive } from "./groupSlice";
const Groups = () => {
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
      <CreateBox page={"Group Management"} add={"group"} to={"stable"} handleClick={handleGroup} />
      <GroupTable />
    </Layout>
  );
};

export default Groups;
