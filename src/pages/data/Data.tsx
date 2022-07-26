import React from "react";
import CreateBox from "../../components/createBox/CreateBox";
import DataForm from "../../components/dataForm/DataForm";
import Layout from "../../components/layout/layoutPage/Layout";
const Data = () => {
  const handleData = () => {
    console.log("I am Data");
  };
  return (
    <Layout>
      <DataForm />
      <CreateBox page={"Data"} add={"data"} to={"group"} handleClick={handleData} />
    </Layout>
  );
};

export default Data;
