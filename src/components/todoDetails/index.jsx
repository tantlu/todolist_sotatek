import React, { useState } from "react";
import UpdateTodo from "./components/updateTodo";
import Bulk from "./components/bulk";

function TodoList({
  todos,
  onRemoveTodo,
  onTaskUpdate,
  onRemoveAllTodos,
  onShowAllDetails,
}) {
  const [detailTodoIds, setDetailTodoIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDetailButtonClick = (id) => {
    if (detailTodoIds.includes(id)) {
      setDetailTodoIds(detailTodoIds.filter((todoId) => todoId !== id));
      setSelectedTodoId(null);
    } else {
      setDetailTodoIds([...detailTodoIds, id]);
      setSelectedTodoId(id);
    }
  };

  const handleRemoveButtonClick = (id) => {
    onRemoveTodo(id);
  };

  const handleTaskUpdate = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodoId) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
    onTaskUpdate(updatedTodos);
    setSelectedTodoId(null);
    setDetailTodoIds(
      detailTodoIds.filter((todoId) => todoId !== selectedTodoId)
    );
  };

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
              onClick={() => handleRemoveButtonClick(todo.id)}>
              Remove
            </button>
            <button
              className="detail-button"
              onClick={() => handleDetailButtonClick(todo.id)}>
              Details
            </button>
            {detailTodoIds.includes(todo.id) && selectedTodoId === todo.id && (
              <UpdateTodo onTaskUpdate={handleTaskUpdate} todo={todo} />
            )}
          </div>
        ))}
      </div>
      <Bulk onRemoveAllTodos={onRemoveAllTodos} />
    </div>
  );
}

export default TodoList;
