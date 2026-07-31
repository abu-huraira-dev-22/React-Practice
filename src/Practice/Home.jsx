import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const projects = [
    {
      title: "Todo App",
      icon: "📝",
      description: "Organize your daily tasks efficiently.",
      gradient: "from-cyan-500 to-blue-600",
      path: "/todo",
    },
    {
      title: "Quiz App",
      icon: "🧠",
      description: "Challenge yourself with interactive quizzes.",
      gradient: "from-purple-500 to-pink-600",
      path: "/quiz",
    },
    {
      title: "Expense Tracker",
      icon: "💰",
      description: "Track your income and daily expenses.",
      gradient: "from-emerald-500 to-green-600",
      path: "/expense",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">React Mini Projects</h1>

        <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
          A collection of projects built with React.js and Tailwind CSS. Click
          on any project below to explore it.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              to={project.path}
              key={index}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div className="text-6xl">{project.icon}</div>

                <h2 className="mt-6 text-3xl font-bold">{project.title}</h2>

                <p className="mt-4 text-slate-400 leading-7">
                  {project.description}
                </p>

                <button
                  className={`mt-8 w-full rounded-xl bg-gradient-to-r ${project.gradient} py-3 font-semibold transition duration-300 cursor-pointer group-hover:scale-105`}
                >
                  Open Project →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 mt-30">
        Built with ❤️ using React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Home;
