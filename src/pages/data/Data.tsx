import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CreateBox from "../../components/createBox/CreateBox";
import DataForm from "../../components/dataForm/DataForm";
import Layout from "../../components/layout/layoutPage/Layout";
import { toggleDataActive } from "./dataSlice";

const Data = () => {
  const dispatch = useAppDispatch();
  const dataActive = useAppSelector((state) => state.data.dataFormActive);
  const handleData = () => {
    if (dataActive === false) {
      dispatch(toggleDataActive());
    }
  };
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <Layout>
      <DataForm />
      <CreateBox
        page={"Data"}
        add={"data"}
        to={"group"}
        handleClick={handleData}
      />
    </Layout>
  );
};

export default Data;
