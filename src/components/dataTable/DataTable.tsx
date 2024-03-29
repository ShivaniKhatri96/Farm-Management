import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addDataId, removeDataId } from "../../pages/data/dataSlice";
import Checkbox from "../miniComponents/Checkbox";
import "./dataTable.scss";
import DataTableRow from "./DataTableRow";
import { useTranslation } from "react-i18next";
export const dataContent = [
  {
    data_date: "2022-06-02",
    feed: 100.0,
    water: 1000.0,
    temperature: "33.5",
    group_id: "f6e3e02b-f53d-4f11-8cdf-bdc6ca9883e8",
    id: "9956d865-ccdb-4347-88f0-1bfd66a84ca1",
  },
  {
    data_date: "2022-06-03",
    feed: 110.0,
    water: 1050.0,
    temperature: "32.5",
    group_id: "f6e3e02b-f53d-4f11-8cdf-bdc6ca9883e8",
    id: "4a18d94d-17b0-42f0-be37-87f4b9b9b054",
  },
  {
    data_date: "2022-06-04",
    feed: 120.0,
    water: 1100.0,
    temperature: "30.5",
    group_id: "f6e3e02b-f53d-4f11-8cdf-bdc6ca9883e8",
    id: "8700cf35-022a-43ad-953b-3f22f76d5446",
  },
  {
    data_date: "2022-06-05",
    feed: 130.0,
    water: 1200.0,
    temperature: "27.5",
    group_id: "f6e3e02b-f53d-4f11-8cdf-bdc6ca9883e8",
    id: "80ac8336-6d36-4e18-bb20-ff1301097a92",
  },
  {
    data_date: "2022-06-06",
    feed: 115.0,
    water: 1150.0,
    temperature: "28.0",
    group_id: "f6e3e02b-f53d-4f11-8cdf-bdc6ca9883e8",
    id: "621ccc8e-c574-432d-8d40-8258ec974b74",
  },
];
const DataTable = () => {
  const { t } = useTranslation(["data"]);
  const dataHeading = [
    "date",
    "feedIntake",
    "waterIntake",
    "temperature",
  ];
  const mobileDataHeading = ["date", "feed", "water", "temp"];
  const dispatch = useAppDispatch();
  const selectedDataIds = useAppSelector((state) => state.data.selectedIds);
  const clickDataHandler = (id: string) => {
    if (selectedDataIds?.find((elem) => elem === id)) {
      dispatch(removeDataId(id));
    } else {
      dispatch(addDataId(id));
    }
  };
  return (
    <div className="tableFlex">
      <div className="tableBox">
        <div className="tableTitle">{t("data")}</div>
        <div className="innerBox">
          <div className="hideMobile">
            <div className="gridDataRow">
              <Checkbox />
              {dataHeading.map((heading) => (
                <div key={heading}>{t(heading)}</div>
              ))}
            </div>
          </div>
          <div className="showMobile">
            <div className="gridDataRow">
              <Checkbox />
              {mobileDataHeading.map((heading) => (
                <div key={heading}>{t(heading)}</div>
              ))}
            </div>
          </div>

          {dataContent.map((content) => (
            <DataTableRow
              id={content.id}
              key={content.id}
              date={content.data_date}
              feed={content.feed}
              temp={content.temperature}
              water={content.water}
              clickDataHandler={() => clickDataHandler(content.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
