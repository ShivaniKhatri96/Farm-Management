import React from "react";
import CreateBox from "../components/createBox/CreateBox";
import Layout from "../components/layout/layoutPage/Layout";
const Groups = () => {
  return (
    <Layout>
      <CreateBox page={"Group Management"} add={"group"} to={"stable"} />
    </Layout>
  );
};

export default Groups;
