import { useState } from "react";
import AddTask from "./components/addTodo";
import TodoList from "./components/todoDetails";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };

  return (
    <div width="100%">
      <div className="left-form">
        <AddTask onAddTask={handleAddTodo} />
      </div>
      <div className="right-form">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
