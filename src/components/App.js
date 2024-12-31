import React from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Build a React app", complete: false },
    { id: 3, text: "Deploy a React app", complete: false },
  ]);

  function handleComplete(id) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, complete: true } : todo))
    );
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList list={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;
