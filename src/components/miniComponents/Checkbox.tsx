import React, { FC } from "react";
import "./miniStyles.scss";

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
