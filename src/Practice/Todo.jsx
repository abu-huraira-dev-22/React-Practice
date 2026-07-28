import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const listTask = todos.map((todo, id) => {
    return (
      <li key={todo.id}>
        <span
          style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTask(todo.id)}>Delete</button>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleComplete(todo.id)}
        />
      </li>
    );
  });
  const deleteTask = (id) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };
  const addTask = () => {
    const newTodo = {
      id: Date.now(),
      text: newTask,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };
  const toggleComplete = (id) => {
    const updateTask = todos.map((todo) => {
      return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
    });
    setTodos(updateTask)
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        placeholder="Add todo"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>{listTask}</ul>
    </div>
  );
};

export default Todo;
