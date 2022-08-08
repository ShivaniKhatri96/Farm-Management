import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Checkbox from "../miniComponents/Checkbox";
import "./stableTable.scss";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "../../app/hooks";
import StableTableRow from "./StableTableRow";

export const tableContent = [
  { id: 1, stable: "Stable1", location: "location1", group: "1" },
  { id: 2, stable: "Stable2", location: "location2", group: "2" },
  { id: 3, stable: "Stable3", location: "location3", group: "3" },
  { id: 4, stable: "Stable4", location: "location4", group: "4" },
  { id: 5, stable: "Stable5", location: "location5", group: "5" },
];
const StableTable = () => {
  const tableHeading = [
    { name: "Stable" },
    { name: "Location" },
    { name: "Groups" },
  ];
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<any[]>([]);
  const clickHandler = (id: number) => {
    // dispatch(stableRowClicked());
    if (selected?.find((elem) => elem === id)) {
      let removed = selected.filter((elem) => elem !== id);
      setSelected(removed);
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <div className="tableFlex">
      <div className="tableBox">
        <div className="title">Stables</div>
        <div className="innerBox">
          <div className="gridRow">
            <Checkbox />
            {tableHeading.map((heading) => (
              <div key={heading.name}>{heading.name}</div>
            ))}
          </div>

          {tableContent.map((content) => (
            //checking if the last id of the tableContent is same as content id
            <StableTableRow
              id={content.id}
              key={content.id}
              stable={content.stable}
              location={content.location}
              group={content.group}
              clickHandler={() => clickHandler(content.id)}
              selected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StableTable;
function clickHandler(id: number): void {
  throw new Error("Function not implemented.");
}
