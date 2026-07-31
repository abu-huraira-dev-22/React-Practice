import React, { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORY_STYLES = {
  Food: { bg: "bg-orange-500/15", text: "text-orange-400", icon: "🍔" },
  Transport: { bg: "bg-sky-500/15", text: "text-sky-400", icon: "🚗" },
  Shopping: { bg: "bg-fuchsia-500/15", text: "text-fuchsia-400", icon: "🛍️" },
};

const ExpenseTracker = () => {
  const [expense, setExpense] = useState([]);
  const [amount, setamount] = useState();
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addExpense = () => {
    const newExpense = {
      id: Date.now(),
      amount: amount,
      category: newCategory,
      description: newDescription,
    };
    setExpense([...expense, newExpense]);
    setamount("");
    setNewCategory("");
    setNewDescription("");
  };

  const totalExpense = () => {
    const updateTotal = expense.reduce((total, item) => {
      return total + Number(item.amount);
    }, 0);
    return updateTotal;
  };

  const deleteExpense = (id) => {
    const updateExpense = expense.filter((item) => {
      return item.id !== id;
    });
    setExpense(updateExpense);
  };

  const listExpense = expense.map((item, id) => {
    const style = CATEGORY_STYLES[item.category] || {
      bg: "bg-slate-500/15",
      text: "text-slate-400",
      icon: "💵",
    };
    return (
      <li
        key={id}
        className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3"
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg ${style.bg}`}
        >
          {style.icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-100">
            {item.description || "No description"}
          </p>
          <p className={`text-xs font-medium ${style.text}`}>
            {item.category || "Uncategorized"}
          </p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-slate-100">
          Rs. {Number(item.amount).toLocaleString()}
        </span>
        <button
          onClick={() => deleteExpense(item.id)}
          aria-label="Delete expense"
          className="shrink-0 rounded-lg p-1.5 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
        >
          ✕
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4 font-sans">
        <Link 
    to="/" 
    className="absolute bottom-5 left-5 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 backdrop-blur text-sm text-slate-300 hover:bg-white/20 transition"
  >
    ← Home
  </Link>
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Header / total card */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 px-6 py-7">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-100/80">
            Total spent
          </p>
          <p className="mt-1 text-3xl font-bold text-white">
            Rs. {totalExpense().toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-emerald-100/70">
            {expense.length} {expense.length === 1 ? "expense" : "expenses"}{" "}
            recorded
          </p>
        </div>

        {/* Add expense form */}
        <div className="border-b border-slate-800 px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Add expense
          </p>
          <div className="flex gap-2.5">
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => setamount(e.target.value)}
              value={amount}
              className="w-28 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500"
            />
            <select
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-emerald-500"
            >
              <option value="">Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>
          <div className="mt-2.5 flex gap-2.5">
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500"
            />
            <button
              onClick={addExpense}
              className="shrink-0 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 active:scale-95"
            >
              Add
            </button>
          </div>
        </div>

        {/* Expense list */}
        <div className="px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Recent expenses
          </p>
          {expense.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-600">
              No expenses yet — add your first one above.
            </p>
          ) : (
            <ul className="flex flex-col gap-2.5">{listExpense}</ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
