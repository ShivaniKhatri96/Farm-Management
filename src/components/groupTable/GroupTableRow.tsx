import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import Checkbox from "../miniComponents/Checkbox";
import Status from "../miniComponents/Status";
import { groupTableContent } from "./GroupTable";

interface GroupTableRowProps {
  id: string;
  group: string;
  totalAnimals: number;
  startDate: string;
  endDate: string;
  status: string;
  clickGroupHandler: () => void;
}
const GroupTableRow: FC<GroupTableRowProps> = ({
  id,
  group,
  totalAnimals,
  startDate,
  endDate,
  status,
  clickGroupHandler,
}) => {
  const selectedGroupIds = useAppSelector((state) => state.group.selectedIds);
  return (
    <div
      className={
        groupTableContent[groupTableContent.length - 1].id === id
          ? "gridGroupRowNoBorder"
          : "gridGroupRowWithBorder"
      }
      key={id}
      onClick={clickGroupHandler}
    >
      <Checkbox selectedIds={selectedGroupIds} id={id} />
      <div>{group}</div>
      <div>{totalAnimals}</div>
      <div>{startDate}</div>
      <div>{endDate}</div>
      <Status status={status} />
    </div>
  );
};

export default GroupTableRow;
