import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [taskData, setTaskData] = useState({
    nameTask: "",
    description: "",
    dueDate: new Date().toISOString().substr(0, 10),
    priority: "normal",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleAddTask = () => {
    if (taskData.nameTask.trim() === "" || taskData.description.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      nameTask: taskData.nameTask,
      description: taskData.description,
      dueDate: taskData.dueDate,
      priority: taskData.priority,
    };

    onAddTask(newTask);
    setTaskData({
      nameTask: "",
      description: "",
      dueDate: new Date().toISOString().substr(0, 10),
      priority: "normal",
    });
  };

  return (
    <div className="container">
      <h1 className="form-heading">New Task</h1>
      <div className="form-control">
        <input
          id="addTask"
          type="text"
          name="nameTask"
          placeholder="Add new task..."
          value={taskData.nameTask}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleInputChange}
          required
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
            onChange={handleInputChange}
            required
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
            onChange={handleInputChange}
            required>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button className="add-button" onClick={handleAddTask}>
        ADD
      </button>
    </div>
  );
}

export default AddTask;
