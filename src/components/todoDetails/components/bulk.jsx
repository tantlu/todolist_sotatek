import React from "react";

function Bulk({ checkedTodoIds, onRemoveSelectedTodos, setCheckedTodoIds }) {
  const handleDoneButtonClick = () => {
    setCheckedTodoIds([]);
  };

  const handleRemoveSelectedTodos = () => {
    onRemoveSelectedTodos(checkedTodoIds);
  };

  return (
    <div className="bulk-action">
      <label htmlFor="nametask" className="name">
        Bulk-action:
      </label>
      <div className="button">
        <button
          className="remove-button"
          onClick={handleRemoveSelectedTodos}
          disabled={checkedTodoIds.length === 0}>
          Remove
        </button>
        <button
          className="done-button"
          onClick={handleDoneButtonClick}
          disabled={checkedTodoIds.length === 0}>
          Done
        </button>
      </div>
    </div>
  );
}

export default Bulk;
