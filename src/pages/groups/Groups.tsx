import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CreateBox from "../../components/createBox/CreateBox";
import GroupForm from "../../components/groupForm/GroupForm";
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
 console.log(groupActive);
  return (
    <Layout>
      <GroupForm />
      <CreateBox page={"Group Management"} add={"group"} to={"stable"} handleClick={handleGroup} />
    </Layout>
  );
};

export default Groups;
