import React from "react";

function Bulk() {
  const handleRemoveAllTodos = () => {
    // Xóa tất cả các todo
    const updatedTodos = [];
    setTodos(updatedTodos);
  };

  const handleShowAllDetails = () => {
    const allTodoIds = todos.map((todo) => todo.id);
    setDetailTodoIds(allTodoIds);
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
        <button className="detail-button" onClick={handleShowAllDetails}>
          Details
        </button>
      </div>
    </div>
  );
}

export default Bulk;
