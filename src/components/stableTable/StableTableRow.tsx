import React, { FC } from "react";
import { tableContent } from "./StableTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../app/hooks";
import Checkbox from "../miniComponents/Checkbox";

interface tableRowProps {
  id: number;
  stable: string;
  location: string;
  group: string;
  clickHandler: () => void;
  selected: any[];
}
const StableTableRow: FC<tableRowProps> = ({
  id,
  stable,
  location,
  group,
  clickHandler,
  selected,
}) => {
  return (
    <div
      className={
        tableContent[tableContent.length - 1].id === id
          ? "gridRowNoBorder"
          : "gridRowWithBorder"
      }
      key={id}
      onClick={clickHandler}
    >
      <Checkbox selected={selected} id={id} />

      <div>{stable}</div>
      <div>{location}</div>
      <div>{group}</div>
      <FontAwesomeIcon
        icon={faEdit}
        className="editIcon"
        onClick={() => console.log("Edit")}
      />
    </div>
  );
};

export default StableTableRow;
