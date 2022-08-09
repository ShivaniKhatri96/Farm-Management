import React, { FC } from "react";
import "../../styles/_global.scss";

interface checkboxProps {
  selectedIds?: string[];
  id?: string;
}
const Checkbox: FC<checkboxProps> = ({ selectedIds, id }) => {
  return (
    <div
      className={
        selectedIds?.find((item) => item === id) ? "yellowBullet" : "bulletDiv"
      }
    />
  );
};

export default Checkbox;
