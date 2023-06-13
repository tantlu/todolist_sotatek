// Bulk.js
import React, { useState } from "react";

function Bulk({ showAllDetails }) {
  const [isShowingDetails, setIsShowingDetails] = useState(showAllDetails);

  const handleDetailBulkButtonClick = () => {
    setIsShowingDetails(!isShowingDetails);
  };

  const handleRemoveAllTodos = () => {};

  return (
    <div className="bulk-action">
      <label htmlFor="nametask" className="nametask">
        Bulk-action:
      </label>
      <div className="button">
        <button className="remove-button" onClick={handleRemoveAllTodos}>
          Remove
        </button>
        <button className="detail-button" onClick={handleDetailBulkButtonClick}>
          Details
        </button>
      </div>
    </div>
  );
}

export default Bulk;
