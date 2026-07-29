import React, { useState } from 'react'

const Quiz = () => {
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)

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
    options: [
      "background-color",
      "font-style",
      "color",
      "text-color",
    ],
    correctAnswer: "color",
  },
  {
    question: "Which company developed React?",
    options: [
      "Google",
      "Microsoft",
      "Facebook",
      "Amazon",
    ],
    correctAnswer: "Facebook",
  },
  {
    question: "Which hook is used to manage state in React?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useRef",
    ],
    correctAnswer: "useState",
  },
   {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      "let",
      "var",
      "const",
      "static",
    ],
    correctAnswer: "const",
  },
];

const checkAnswer = (selectedOption)=>{
    if(selectedOption===newQuestion.correctAnswer){
        setScore(score+1)
    }
    else{
        console.log('wrong answer')
    }
}

const newQuestion = quizData[currentQuestion]
const optionButtons = newQuestion.options.map((option,index)=>{
    return <button className='block'key={index}  onClick={()=>checkAnswer(option)}>{option}</button>
})
  return (
    <div>
        <h1>{newQuestion.question}</h1>
      <h1>{optionButtons}</h1>
      <h1>{score}</h1>
    </div>
  )
}

export default Quiz
