import React, { useEffect, useState } from "react";
import UpdateTodo from "./components/updateTodo";
import Bulk from "./components/Bulk";

function TodoList({
  todos,
  onRemoveTodo,
  onTaskUpdate,
  onRemoveSelectedTodos,
}) {
  const [detailTodoIds, setDetailTodoIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [checkedTodoIds, setCheckedTodoIds] = useState([]);

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

  const handleCheckboxChange = (id) => {
    if (checkedTodoIds.includes(id)) {
      setCheckedTodoIds(checkedTodoIds.filter((todoId) => todoId !== id));
    } else {
      setCheckedTodoIds([...checkedTodoIds, id]);
    }
  };

  const handleRemoveSelectedTodos = () => {
    onRemoveSelectedTodos(checkedTodoIds);
    setCheckedTodoIds([]);
  };

  const sortByDueDate = (a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return dateA - dateB;
  };

  const sortedTodos = filteredTodos.sort(sortByDueDate);

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
        {sortedTodos.map((todo, id) => (
          <div className="items-list" key={id}>
            <input
              type="checkbox"
              className="checkbox"
              checked={checkedTodoIds.includes(todo.id)}
              onChange={() => handleCheckboxChange(todo.id)}
            />
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
      <Bulk
        checkedTodoIds={checkedTodoIds}
        onRemoveSelectedTodos={handleRemoveSelectedTodos}
      />
    </div>
  );
}

export default TodoList;
