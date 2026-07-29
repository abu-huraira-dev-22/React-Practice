const TodoItem = ({ todo, deleteTask, toggleComplete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 shadow-md">
      <div className="flex items-center gap-3">
        <input
          className="w-5 h-5 accent-emerald-500 cursor-pointer"
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleComplete(todo.id)}
        />
        <span
          className={`text-lg ${todo.complete ? "line-through text-gray-400" : "text-white"}`}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition active:scale-95"
        onClick={() => deleteTask(todo.id)}
      >
        Delete Task
      </button>
    </li>
  );
};

export default TodoItem;
