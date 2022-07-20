import React from "react";
import CreateBox from "../components/createBox/CreateBox";
import Layout from "../components/layout/layoutPage/Layout";
const Data = () => {
  return (
    <Layout>
      <CreateBox page={"Data"} add={"data"} to={"group"} />
    </Layout>
  );
};

export default Data;
