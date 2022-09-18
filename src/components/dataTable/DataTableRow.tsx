import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import Checkbox from "../miniComponents/Checkbox";
import { dataContent } from "./DataTable";

interface dataProps {
  id: string;
  date: string;
  temp: string;
  feed: number;
  water: number;
  clickDataHandler: () => void;
}
const DataTableRow: FC<dataProps> = ({
  id,
  date,
  temp,
  water,
  feed,
  clickDataHandler,
}) => {
  const selectedDataIds = useAppSelector((state) => state.data.selectedIds);
  return (
    <div
      className={
        dataContent[dataContent.length - 1].id === id
          ? "gridDataRowNoBorder"
          : "gridDataRowWithBorder"
      }
      key={id}
      onClick={clickDataHandler}
    >
      <Checkbox selectedIds={selectedDataIds} id={id} />
      <div>{date}</div>
      <div>{feed}</div>
      <div>{water}</div>
      <div>{JSON.parse(localStorage.getItem("selectedLanguage") || "{}") === "nl" ? temp.replace(".",","): temp}</div>
    </div>
  );
};

export default DataTableRow;
