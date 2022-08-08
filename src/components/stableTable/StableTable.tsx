import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Checkbox from "../miniComponents/Checkbox";
import "./stableTable.scss";

const StableTable = () => {
  const tableHeading = [
    { name: "Stable" },
    { name: "Location" },
    { name: "Groups" },
  ];
  const tableContent = [
    { id: 1, stable: "Stable1", location: "location1", group: "1" },
    { id: 2, stable: "Stable2", location: "location2", group: "2" },
    { id: 3, stable: "Stable3", location: "location3", group: "3" },
    { id: 4, stable: "Stable4", location: "location4", group: "4" },
    { id: 5, stable: "Stable5", location: "location5", group: "5" },
  ];

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
            <div
              className={
                tableContent[tableContent.length - 1].id === content.id ? "gridRowNoBorder" : "gridRowWithBorder"
              }
              key={content.id}
            >
              <Checkbox />
              <div>{content.stable}</div>
              <div>{content.location}</div>
              <div>{content.group}</div>
              <FontAwesomeIcon icon={faEdit} className="editIcon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StableTable;
