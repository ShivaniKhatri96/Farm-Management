import React from "react";
import CreateBox from "../components/createBox/CreateBox";
import Layout from "../components/layout/layoutPage/Layout";

const Stables = () => {
  return (
    <Layout>
      <CreateBox  page={"Stable Management"} add={"stable"} to={"farm"}/>
    </Layout>
  );
};

export default Stables;
