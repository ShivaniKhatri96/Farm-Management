import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addGroupId, removeGroupId } from "../../pages/groups/groupSlice";
import Checkbox from "../miniComponents/Checkbox";
import "./groupTable.scss";
import GroupTableRow from "./GroupTableRow";
import { useTranslation } from "react-i18next";
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
    "group",
    "totalAnimals",
    "startDate",
    "endDate",
    "status",
  ];
  const mobileGroupHeading = ["group", "totalAnimals", "status"];
  const dispatch = useAppDispatch();
  const selectedGroupIds = useAppSelector((state) => state.group.selectedIds);
  const clickGroupHandler = (id: string) => {
    if (selectedGroupIds?.find((elem) => elem === id)) {
      dispatch(removeGroupId(id));
    } else {
      dispatch(addGroupId(id));
    }
  };
  const { t } = useTranslation(["group"]);
  // console.log(selectedGroupIds);
  return (
    <div className="tableFlex">
      <div className="tableBox">
        <div className="tableTitle">{t("groups")}</div>
        <div className="innerBox">
          <div className="hideMobile">
            <div className="gridGroupRow">
              <Checkbox />
              {groupHeading.map((heading) => (
                <div key={heading}>{t(heading)}</div>
              ))}
            </div>
          </div>
          <div className="showMobile">
            <div className="gridGroupRow">
              <Checkbox />
              {mobileGroupHeading.map((heading) => (
                <div key={heading}>{t(heading)}</div>
              ))}
            </div>
          </div>

          {groupTableContent.map((content) => (
            <GroupTableRow
              id={content.id}
              key={content.id}
              group={content.group_name}
              totalAnimals={content.number_of_animal}
              startDate={content.start_date}
              endDate={content.end_date}
              status={content.status}
              clickGroupHandler={() => clickGroupHandler(content.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupTable;
