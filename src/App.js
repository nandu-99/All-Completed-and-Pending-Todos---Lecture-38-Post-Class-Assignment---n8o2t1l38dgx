import React, { useState } from "react";
import "./App.css";

const App = () => {
  // State variables
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [input, setInput] = useState("");

  // Function to add a new task
  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(), // Unique ID based on current time
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput(""); // Clear input field after adding
    }
  };

  // Function to toggle completion status of a task
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to filter tasks based on completion status
  const filteredTodos = () => {
    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.completed);
      case "Pending":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
      </div>
      <ul>
        {filteredTodos().map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
