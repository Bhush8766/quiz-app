import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "../data/questions";

const Result = () => {
  const navigate = useNavigate();

  const [showAnswers, setShowAnswers] =
    useState(false);

  const score = localStorage.getItem("score");

  const category =
    localStorage.getItem("category");

  const questions = quizData[category];

  return (
    <div className="container">
      <h1>🎉 Quiz Completed</h1>

      <div className="score">
        Your Score: {score} / 10
      </div>

      <div className="result-buttons">
        <button onClick={() => navigate("/")}>
          🏠 Home
        </button>

        <button
          onClick={() =>
            setShowAnswers(!showAnswers)
          }
        >
          📖 {showAnswers
            ? "Hide Answers"
            : "Show Answers"}
        </button>
      </div>

      {showAnswers && (
        <div className="answers-container">
          {questions.map((q, index) => (
            <div
              key={index}
              className="answer-card"
            >
              <h3>
                Q{index + 1}. {q.question}
              </h3>

              <p>
                ✅ Correct Answer:
                <span> {q.answer}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;