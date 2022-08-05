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
    { stable: "Stable1", location: "location1", group: "Group1" },
    { stable: "Stable2", location: "location2", group: "Group2" },
    { stable: "Stable3", location: "location3", group: "Group3" },
    { stable: "Stable4", location: "location4", group: "Group4" },
    { stable: "Stable5", location: "location5", group: "Group5" },
  ];

  return (
    <div className="tableFlex">
      <div className="tableBox">
        <div>Stables</div>
        <div className="gridRow">
          <Checkbox />
          {tableHeading.map((heading) => (
            <div>{heading.name}</div>
          ))}
        </div>

        {tableContent.map((content) => (
          <div className="gridRow">
            <Checkbox />
            <div>{content.stable}</div>
            <div>{content.location}</div>
            <div>{content.group}</div>
            <div>Edit</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StableTable;
