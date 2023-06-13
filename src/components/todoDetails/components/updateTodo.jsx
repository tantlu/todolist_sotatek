import React, { useState } from "react";

function UpdateTodo({ onTaskUpdate, todo }) {
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleDueDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().substr(0, 10);

    if (selectedDate >= currentDate) {
      handleInputChange(event);
    }
  };

  const handleUpdateTask = () => {
    onTaskUpdate(updatedTodo);
  };

  return (
    <div className="update-task">
      <div className="form-control">
        <input
          id="nameTask"
          type="text"
          placeholder=""
          name="nameTask"
          value={updatedTodo.nameTask}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={updatedTodo.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control-inline">
        <div className="form-control">
          <label htmlFor="dueDate" className="input-label">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={updatedTodo.dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="priority" className="input-label">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={updatedTodo.priority}
            onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button className="update-button" onClick={handleUpdateTask}>
        Update
      </button>
    </div>
  );
}

export default UpdateTodo;
