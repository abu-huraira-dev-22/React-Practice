import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const listTask = todos.map((todo, id) => {
    return (
      <li key={id}>
        {" "}
        <span
          style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          Delete Task
        </button>
        <input type="checkbox" checked={todo.complete} onChange={()=>toggleComplete(todo.id)}  />
      </li>
    );
  });

  const deleteTask = (id) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updateTodos);
  };

  const toggleComplete = (id) => {
    const updateComplete = todos.map((todo) => {
      return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
    });
    setTodos(updateComplete)
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

  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center">
      <div className="bg-gray-500 h-auto w-[40%] rounded p-5 max-w-md">
        <div className="flex gap-5">
          <input
            className="p-2 flex-1 rounded border border-gray-600 outline-none"
            type="text"
            placeholder="Add Todo"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button
            className="bg-gray-700 p-3 rounded-xl cursor-pointer active:scale-95"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div>
          <ul>{listTask}</ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
