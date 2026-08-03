import React, { useState } from "react";
import { useLocalStorage } from "./customHook";

const HabitTracker = () => {
  const [habits, setHabit] = useLocalStorage("habits", []);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim() === "") {
      return;
    }
    const newHabits = {
      id: Date.now(),
      text: newHabit,
      completedDates: [],
    };
    setHabit([...habits, newHabits]);
    setNewHabit("");
  };

  const deleteHabit = (id) => {
    const updateList = habits.filter((habit) => {
      return habit.id !== id;
    });
    setHabit(updateList);
  };

  const markToday = (habitId) => {
    const today = new Date().toISOString().split("T")[0];
    const updateHabit = habits.map((habit) => {
      if (habit.id === habitId) {
        if (habit.completedDates.includes(today)) {
          return habit;
        }
        return { ...habit, completedDates: [...habit.completedDates, today] };
      } else {
        return habit;
      }
    });
    setHabit(updateHabit);
    console.log("update");
  };

  const calculateStreak = (completedDates) => {
    let streak = 0;
    let checkDate = new Date();
    while (true) {
      const dateString = checkDate.toISOString().split("T")[0];
      if (completedDates.includes(dateString)) {
        streak = streak + 1;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };

  // -- styling-only helper: builds last-14-days grid from completedDates --
  // (pure display, no state, no change to the logic above)
  const buildGrid = (completedDates) => {
    const today = new Date().toISOString().split("T")[0];
    const boxes = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateString = d.toISOString().split("T")[0];
      boxes.push({
        date: dateString,
        done: completedDates.includes(dateString),
        isToday: dateString === today,
      });
    }
    return boxes;
  };

  const listHabit = habits.map((habit) => {
    const streak = calculateStreak(habit.completedDates);
    const grid = buildGrid(habit.completedDates);
    const doneToday = habit.completedDates.includes(
      new Date().toISOString().split("T")[0]
    );

    return (
      <li
        key={habit.id}
        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-slate-100">
              {habit.text}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-orange-400">
              <span>🔥</span>
              {streak} day{streak === 1 ? "" : "s"} streak
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => markToday(habit.id)}
              disabled={doneToday}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition active:scale-95 ${
                doneToday
                  ? "cursor-default bg-emerald-500/15 text-emerald-400"
                  : "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
              }`}
            >
              {doneToday ? "✓ Done" : "Mark today"}
            </button>
            <button
              onClick={() => deleteHabit(habit.id)}
              aria-label="Delete habit"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1.5">
          {grid.map((box) => (
            <div
              key={box.date}
              title={box.date}
              className={`aspect-square rounded-sm ${
                box.done
                  ? "bg-emerald-500"
                  : box.isToday
                  ? "border border-dashed border-slate-500 bg-transparent"
                  : "bg-slate-800"
              }`}
            ></div>
          ))}
        </div>
      </li>
    );
  });

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-100">🌱 Habit tracker</h1>
          <p className="mt-1 text-sm text-slate-500">
            Small steps, every day.
          </p>
        </div>

        <div className="mb-6 flex gap-2.5">
          <input
            type="text"
            placeholder="Enter the habit"
            onChange={(e) => setNewHabit(e.target.value)}
            value={newHabit}
            className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500"
          />
          <button
            onClick={addHabit}
            className="shrink-0 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 active:scale-95"
          >
            Add habit
          </button>
        </div>

        {habits.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-600">
            No habits yet — add your first one above.
          </p>
        ) : (
          <ul className="flex flex-col gap-4">{listHabit}</ul>
        )}
      </div>
    </div>
  );
};

export default HabitTracker;