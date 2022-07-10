import React from "react";
import "../sidebar/sidebarContainer.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div className="container">
      {/* searchbar */}
      <div className="searchbar-container">
        <input
          className="searchbar-styles"
          type="text"
          placeholder="Search..."
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-icon" />
      </div>

      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default Sidebar;
