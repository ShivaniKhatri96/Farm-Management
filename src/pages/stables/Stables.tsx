import React from "react";
import CreateBox from "../../components/createBox/CreateBox";
import Layout from "../../components/layout/layoutPage/Layout";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleStableActive } from "./stableSlice";
import StableForm from "../../components/stableForm/StableForm";
const Stables = () => {
  const dispatch = useAppDispatch();
  const stableActive = useAppSelector((state) => state.stable.stableFormActive);
  const handleStable = () => {
    if (stableActive === false) {
      dispatch(toggleStableActive());
    }
  };
  console.log(stableActive);
  return (
    <Layout>
      <StableForm />
      <CreateBox
        page={"Stable Management"}
        add={"stable"}
        to={"farm"}
        handleClick={handleStable}
      />
    </Layout>
  );
};

export default Stables;
