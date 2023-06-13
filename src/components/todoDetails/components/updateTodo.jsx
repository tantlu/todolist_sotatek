import React, { useState } from "react";

function UpdateTodo({ onTaskUpdate, todo }) {
  const [taskData, setTaskData] = useState({
    nameTask: todo.nameTask,
    description: todo.description,
    dueDate: todo.dueDate,
    priority: todo.priority,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleDueDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = new Date().toISOString().substr(0, 10);

    if (selectedDate >= currentDate) {
      handleInputChange(event);
    }
  };

  const handleUpdateTask = () => {
    onTaskUpdate(taskData);
  };

  return (
    <div className="update-task">
      <div className="form-control">
        <input
          id="nameTask"
          type="text"
          placeholder=""
          name="nameTask"
          value={taskData.nameTask}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={taskData.description}
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
            value={taskData.dueDate}
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
            value={taskData.priority}
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
