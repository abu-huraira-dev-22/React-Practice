import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Which CSS property changes the text color?",
      options: ["background-color", "font-style", "color", "text-color"],
      correctAnswer: "color",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      correctAnswer: "Facebook",
    },
    {
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useState", "useContext", "useRef"],
      correctAnswer: "useState",
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["let", "var", "const", "static"],
      correctAnswer: "const",
    },
  ];

  const checkAnswer = (selectedOption) => {
    if (isAnswered === true) {
      return;
    } else {
      if (selectedOption === newQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const PrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setIsAnswered(false);
    }
  };

  const newQuestion = quizData[currentQuestion];
  const letters = ["A", "B", "C", "D"];

  const optionButtons = newQuestion.options.map((option, index) => {
    const isCorrect = isAnswered && option === newQuestion.correctAnswer;
    return (
      <button
        key={index}
        onClick={() => checkAnswer(option)}
        disabled={isAnswered}
        className={`flex w-full items-center gap-3.5 rounded-lg border px-4 py-3.5 text-left font-mono text-[14.5px] transition
          ${
            isCorrect
              ? "border-emerald-500 bg-emerald-500/10 text-emerald-50 opacity-100"
              : isAnswered
              ? "border-slate-700 bg-slate-800/60 text-slate-300 opacity-50 cursor-default"
              : "border-slate-700 bg-slate-800/60 text-slate-200 cursor-pointer hover:border-amber-400 hover:bg-slate-800 hover:translate-x-0.5 active:scale-[0.99]"
          }`}
      >
        <span
          className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-md text-xs font-semibold
            ${
              isCorrect
                ? "bg-emerald-500 text-slate-900"
                : "bg-slate-700 text-slate-400"
            }`}
        >
          {letters[index]}
        </span>
        <span>{option}</span>
      </button>
    );
  });

  const restartBtn = () => {
    setCurrentQuestion(0);
    setIsAnswered(false);
    setShowResult(false);
    setScore(0);
  };

  const scorePct = (score / quizData.length) * 100;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 bg-[radial-gradient(circle_at_15%_20%,rgba(255,176,59,0.08),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(86,182,194,0.08),transparent_40%)] p-4 font-mono">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        {showResult ? (
          // ---------- RESULT SCREEN ----------
          <div className="px-8 py-12 text-center">
            <div
              className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(#ffb03b ${scorePct}%, #1c232d 0)`,
              }}
            >
              <div className="absolute inset-2 rounded-full bg-slate-900"></div>
              <div className="relative">
                <div className="font-sans text-3xl font-bold text-slate-100">
                  {score}/{quizData.length}
                </div>
                <div className="mt-0.5 text-[11px] tracking-wide text-slate-500">
                  SCORE
                </div>
              </div>
            </div>
            <h1 className="mb-2 font-sans text-2xl font-bold text-slate-100">
              Quiz complete
            </h1>
            <p className="mb-7 text-[13.5px] text-slate-400">
              You got {score} out of {quizData.length} questions right.
            </p>
            <button
              onClick={restartBtn}
              className="rounded-lg bg-amber-400 px-6 py-3 text-[13.5px] font-semibold text-slate-900 transition hover:bg-amber-300 active:scale-95"
            >
              Try again
            </button>
          </div>
        ) : (
          // ---------- QUIZ SCREEN ----------
          <>
            <div className="flex items-center gap-2.5 border-b border-slate-800 bg-slate-950/60 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              <span className="ml-2 text-xs tracking-wide text-slate-500">
                web-dev-quiz.js
              </span>
              <span className="ml-auto text-xs font-semibold text-amber-400">
                {currentQuestion + 1} / {quizData.length}
              </span>
            </div>

            <div className="h-[3px] w-full bg-slate-800">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="px-7 pb-7 pt-8">
              <p className="mb-2.5 text-xs uppercase tracking-wider text-cyan-400">
                Question {currentQuestion + 1}
              </p>
              <h1 className="mb-6 font-sans text-2xl font-bold leading-snug text-slate-100">
                {newQuestion.question}
              </h1>

              <div className="mb-6 flex flex-col gap-2.5">{optionButtons}</div>

              <div className="flex items-center justify-between">
                <button
                  onClick={PrevQuestion}
                  disabled={currentQuestion === 0}
                  className="rounded-lg border border-slate-700 px-4.5 py-2.5 text-[13px] font-medium text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400 disabled:cursor-default disabled:opacity-30 disabled:hover:border-slate-700 disabled:hover:text-slate-400"
                >
                  ← Previous
                </button>
                <button
                  onClick={nextQuestion}
                  className="rounded-lg border border-amber-400 bg-amber-400 px-4.5 py-2.5 text-[13px] font-semibold text-slate-900 transition hover:bg-amber-300 active:scale-95"
                >
                  {currentQuestion === quizData.length - 1
                    ? "Finish →"
                    : "Next →"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;