import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { useUserStore } from "../store/userStore";

const ResultPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { score, resetScore, resetCurrentQuestion } = useQuizStore();

  if (!user && !score) {
    navigate("/");
    toast.error("Access denied");
  }

  const restartQuiz = () => {
    resetScore();
    resetCurrentQuestion();
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-2 h-full w-full mx-auto">
      <h1 className="text-gray-500">
        Hello {user.name}, you scored{" "}
        <strong className="text-pink-500">{score}/10</strong>
      </h1>

      <button onClick={restartQuiz} className="btn w-60">
        Start a new quiz
      </button>
    </div>
  );
};

export default ResultPage;
