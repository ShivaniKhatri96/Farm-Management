import React from "react";
import Checkbox from "../miniComponents/Checkbox";
import "./groupTable.scss";
//temp data
//date format will be different with real data
export const groupTableContent = [
  {
    id: "6",
    group_name: "Group 1",
    number_of_animal: 13,
    start_date: "2022-08-01",
    end_date: "2022-08-30",
    status: "ACTIVE",
  },
  {
    id: "7",
    group_name: "Group 2",
    number_of_animal: 23,
    start_date: "2022-09-01",
    end_date: "2022-09-30",
    status: "ACTIVE",
  },
  {
    id: "8",
    group_name: "Group 3",
    number_of_animal: 44,
    start_date: "2022-06-01",
    end_date: "2022-06-30",
    status: "INACTIVE",
  },
  {
    id: "9",
    group_name: "Group 4",
    number_of_animal: 43,
    start_date: "2022-05-01",
    end_date: "2022-05-30",
    status: "INACTIVE",
  },
  {
    id: "10",
    group_name: "Group 5",
    number_of_animal: 62,
    start_date: "2022-04-01",
    end_date: "2022-04-30",
    status: "INACTIVE",
  },
];
const GroupTable = () => {
  const groupHeading = [
    "Group",
    "Total animals",
    "Start date",
    "End date",
    "Status",
  ];
  return (
    <div className="tableFlex">
      <div className="table_Box">
        <div className="tableTitle">Groups</div>
        <div className="innerBox">
          <div className="gridGroupRow">
            <Checkbox />
            {groupHeading.map((heading) => (
              <div key={heading}>{heading}</div>
            ))}
          </div>

          {/* {tableContent.map((content) => (
        //checking if the last id of the tableContent is same as content id
        <StableTableRow
          id={content.id}
          key={content.id}
          stable={content.stable}
          location={content.location}
          group={content.group}
          clickHandler={() => clickHandler(content.id)}
        />
      ))} */}
        </div>
      </div>
    </div>
  );
};

export default GroupTable;
