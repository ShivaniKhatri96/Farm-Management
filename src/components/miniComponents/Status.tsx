import { FC } from "react";

const Status: FC<{ status: string }> = ({ status }) => {
  return (
    <div className={status === "ACTIVE" ? "active" : "inactive"}>{status}</div>
  );
};

export default Status;
