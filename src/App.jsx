import { useEffect, useState } from "react";
import AddTask from "./components/addTodo";
import TodoList from "./components/todoDetails";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const handleAddTodo = (newTask) => {
    const newTodos = [...todos, newTask];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleTaskUpdate = (updatedTodos) => {
    setTodos(updatedTodos);
  };

  const handleRemoveSelectedTodos = (selectedTodoIds) => {
    const updatedTodos = todos.filter(
      (todo) => !selectedTodoIds.includes(todo.id)
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div width="100%">
      <div className="left-form">
        <AddTask onAddTask={handleAddTodo} />
      </div>
      <div className="right-form">
        <TodoList
          todos={todos}
          onRemoveTodo={handleRemoveTodo}
          onTaskUpdate={handleTaskUpdate}
          onRemoveSelectedTodos={handleRemoveSelectedTodos}
        />
      </div>
    </div>
  );
}

export default App;
