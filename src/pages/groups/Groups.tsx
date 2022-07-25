import React from "react";
import CreateBox from "../../components/createBox/CreateBox";
import Layout from "../../components/layout/layoutPage/Layout";
const Groups = () => {
  const handleGroup = () => {
    console.log("I am Group");
  };
  return (
    <Layout>
      <CreateBox page={"Group Management"} add={"group"} to={"stable"} handleClick={handleGroup} />
    </Layout>
  );
};

export default Groups;
