import Checkbox from "../miniComponents/Checkbox";
import "./stableTable.scss";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "../../app/hooks";
import StableTableRow from "./StableTableRow";
import { addId, removeId } from "../../pages/stables/stableSlice";
import { useTranslation } from "react-i18next";
//temp data
export const tableContent = [
  { id: "1", stable: "Stable1", location: "location1", group: 1 },
  { id: "2", stable: "Stable2", location: "location2", group: 2 },
  { id: "3", stable: "Stable3", location: "location3", group: 3 },
  { id: "4", stable: "Stable4", location: "location4", group: 4 },
  { id: "5", stable: "Stable5", location: "location5", group: 5 },
];
const StableTable = () => {
  const { t } = useTranslation(["common", "stable"]);
  const tableHeading = ["stable", "location", "groups"];
  const dispatch = useAppDispatch();
  const selectedIds = useAppSelector((state) => state.stable.selectedIds);
  const clickHandler = (id: string) => {
    if (selectedIds?.find((elem) => elem === id)) {
      dispatch(removeId(id));
    } else {
      dispatch(addId(id));
    }
  };
  // console.log(selectedIds);
  return (
    <div className="tableFlex">
      <div className="tableBox">
        <div className="tableTitle">{t("stable:stables")}</div>
        <div className="innerBox">
          <div className="gridRow">
            <Checkbox />
            {tableHeading.map((heading) => (
              <div key={heading}>{t(`stable:${heading}`)}</div>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StableTable;

