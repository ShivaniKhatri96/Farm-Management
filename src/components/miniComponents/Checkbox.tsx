import React, { FC } from "react";
import "../../styles/_global.scss";

interface checkboxProps {
  selected?: any[];
  id?: number;
}
const Checkbox: FC<checkboxProps> = ({ selected, id }) => {
  return (
    <div
      className={
        selected?.find((item) => item === id) ? "yellowBullet" : "bulletDiv"
      }
    />
  );
};

export default Checkbox;
