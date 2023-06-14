import React from "react";

function Bulk({ onRemoveAllTodos, onShowAllDetails }) {
  const handleRemoveAllTodos = () => {
    onRemoveAllTodos();
  };

  return (
    <div className="bulk-action">
      <label htmlFor="nametask" className="nametask">
        Bulk-action:
      </label>
      <div className="button">
        <button className="remove-button" onClick={handleRemoveAllTodos}>
          Remove
        </button>
        <button className="detail-button">Details</button>
      </div>
    </div>
  );
}

export default Bulk;
