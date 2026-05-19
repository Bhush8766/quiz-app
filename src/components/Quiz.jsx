import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "../data/questions";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const category =
    localStorage.getItem("category");

  const questions = quizData[category];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = (option) => {
    let updatedScore = score;

    if (
      option === questions[currentQuestion].answer
    ) {
      updatedScore++;
      setScore(updatedScore);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      localStorage.setItem("score", updatedScore);
      navigate("/result");
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container">
      <h1>{category.toUpperCase()} Quiz 🚀</h1>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <QuestionCard
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;