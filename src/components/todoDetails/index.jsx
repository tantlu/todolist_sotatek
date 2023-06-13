import React, { useState } from "react";
import "./styletodo.css";
import UpdateTodo from "./components/updateTodo";
import Bulk from "./components/bulk";

function TodoList({ todos }) {
  const [detailTodoIds, setDetailTodoIds] = useState([]);
  const [updateTask, setUpdateTask] = useState("");
  const [nameTask, setNameTask] = useState("");
  const [taskName, setTaskName] = useState("Name");
  const [showAllDetails, setShowAllDetails] = useState(false);

  const handleDetailBulkButtonClick = () => {
    setShowAllDetails(!showAllDetails);
  };

  const handleTaskNameUpdate = (newTaskName) => {
    setTaskName(newTaskName);
  };

  const handleNewTaskChange = (event) => {
    setUpdateTask(event.target.value);
  };

  const handleDetailButtonClick = (id) => {
    if (detailTodoIds.includes(id)) {
      setDetailTodoIds(detailTodoIds.filter((todoId) => todoId !== id));
    } else {
      setDetailTodoIds([...detailTodoIds, id]);
    }
  };

  return (
    <div className="container">
      <h1 className="form-heading">Todo List</h1>
      <div className="form-control">
        <input
          id="addTask"
          type="text"
          placeholder="Search ..."
          value={updateTask}
          onChange={handleNewTaskChange}
        />
      </div>
      <div className="task-list">
        {todos.map((todo, id) => (
          <div className="items-list" key={id}>
            <input type="checkbox" className="checkbox" />
            <label htmlFor="nametask" className="nametask">
              {todo.nameTask}
            </label>
            <button className="remove-button">Remove</button>
            <button
              className="detail-button"
              onClick={() => handleDetailButtonClick(id)}>
              Details
            </button>
            {detailTodoIds.includes(id) && (
              <UpdateTodo onTaskNameUpdate={handleTaskNameUpdate} todo={todo} />
            )}
          </div>
        ))}
      </div>
      <Bulk showAllDetails={showAllDetails} />
    </div>
  );
}

export default TodoList;
