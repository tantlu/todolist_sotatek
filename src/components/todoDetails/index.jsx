import React, { useState } from "react";
import "./styletodo.css";
import UpdateTodo from "./components/updateTodo";
import Bulk from "./components/bulk";

function TodoList({ todos }) {
  const [detailTodoIds, setDetailTodoIds] = useState([]);
  const [updateTask, setUpdateTask] = useState("");
  const [nameTask, setNameTask] = useState("");
  const [taskName, setTaskName] = useState("Name");
  const [searchTerm, setSearchTerm] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTaskNameUpdate = (newTaskName) => {
    setTaskName(newTaskName);
  };

  const handleNewTaskChange = (event) => {
    setUpdateTask(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDetailButtonClick = (id) => {
    if (detailTodoIds.includes(id)) {
      setDetailTodoIds(detailTodoIds.filter((todoId) => todoId !== id));
    } else {
      setDetailTodoIds([...detailTodoIds, id]);
    }
  };

  const handleRemoveButtonClick = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // Lọc danh sách todos dựa trên giá trị tìm kiếm
  const filteredTodos = todos.filter((todo) =>
    todo.nameTask.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="form-heading">Todo List</h1>
      <div className="form-control">
        <input
          id="addTask"
          type="text"
          placeholder="Search ..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="task-list">
        {filteredTodos.map((todo, id) => (
          <div className="items-list" key={id}>
            <input type="checkbox" className="checkbox" />
            <label htmlFor="nametask" className="nametask">
              {todo.nameTask}
            </label>
            <button
              className="remove-button"
              onClick={() => handleRemoveButtonClick(id)}>
              Remove
            </button>
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
      <Bulk />
    </div>
  );
}

export default TodoList;
