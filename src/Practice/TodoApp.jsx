import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    setTodos(updateComplete);
  };
    const listTask = todos.map((todo, id) => {
    return (
     <TodoItem
     key={todo.id}
     todo={todo}
     deleteTask={deleteTask}
     toggleComplete={toggleComplete}
     />
    );
  });

  const addTask = () => {
    if (newTask.trim() === ''){
      return
    }
    const newTodo = {
      id: Date.now(),
      text: newTask,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-5">
    <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        📝 Todo App
      </h1>

      
      <div className="flex gap-3 mb-6">
        <input
          className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-600 outline-none focus:border-emerald-500 transition"
          type="text"
          placeholder="Enter a new task..."
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />

        <button
          onClick={addTask}
          className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition px-5 rounded-xl text-white font-semibold"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
       {listTask}
      </ul>

      {todos.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          No tasks yet 🚀
        </div>
      )}
    </div>
  </div>
);
};

export default TodoApp;
