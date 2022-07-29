import React from "react";
import "../../styles/_global.scss";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleStableActive } from "../../pages/stables/stableSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const StableForm = () => {
  const dispatch = useAppDispatch();
  const formActive = useAppSelector((state) => state.stable.stableFormActive);
  const handleClose = () => {
    dispatch(toggleStableActive());
  };
  return (
    <div className={formActive ? "modalContainer" : "modalClose"}>
      <div className="form">
        <div className="closeButton">
          <FontAwesomeIcon icon={faWindowClose} onClick={handleClose} />
        </div>
        <div className="formBody">
          <div>
            <div className="formTitle">Create Stable</div>
            <div className="formTitleSecond">
              Fill this form to create a Stable
            </div>
          </div>
          <div className="formInputs">
            <div>
              <label className="formLabel" >Stable name</label>
              <input className="formInput" placeholder="Enter a name" />
            </div>
            <div>
              <label className="formLabel">Location</label>
              <input className="formInput" placeholder="Enter a location" />
            </div>
          </div>
          <input type="submit" className="formSubmit" />
        </div>
      </div>
    </div>
  );
};

export default StableForm;
