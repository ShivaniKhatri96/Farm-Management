import React from "react";
import CreateBox from "../../components/createBox/CreateBox";
import GroupForm from "../../components/groupForm/GroupForm";
import Layout from "../../components/layout/layoutPage/Layout";
const Groups = () => {
  const handleGroup = () => {
    console.log("I am Group");
  };
  return (
    <Layout>
      <GroupForm />
      <CreateBox page={"Group Management"} add={"group"} to={"stable"} handleClick={handleGroup} />
    </Layout>
  );
};

export default Groups;
