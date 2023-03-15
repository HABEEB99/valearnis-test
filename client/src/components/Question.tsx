import { useState, useEffect, Suspense } from "react";
import { useQuizStore } from "../store/quizStore";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // quiz store
  const {
    questions,
    currentQuestion,
    prevQuestion,
    nextQuestion,
    addQuestions,
    category,
    difficulty,
    score,
    increaseScore,
  } = useQuizStore();

  // A function that fetches questions based on the category and difficulty chosen by the user
  const fetchQuestions = async () => {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    addQuestions(response.data.results);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // A funtion that shuffles the options
  const shuffleOptions = (items: any) => {
    return items.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setOptions(
      questions &&
        shuffleOptions([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [currentQuestion]);

  // A variable containing the correct answer
  const correctAnswer = questions[currentQuestion]?.correct_answer;

  // A function that applies a background color to the selected option
  const handleSelectedOption = (option: string) => {
    if (selectedOption === option && selectedOption === correctAnswer) {
      return "bg-green-600 text-white font-bold";
    } else if (selectedOption === option && selectedOption !== correctAnswer) {
      return "bg-green-600 text-white font-bold";
    }
  };

  // A funtion that increases score upon selecting the correct option
  const checkedOption = (option: string) => {
    setSelectedOption(option);

    if (option === correctAnswer) {
      increaseScore();
    } else return;
  };

  // A funtion that moves user into the previous question
  const prev = () => {
    if (currentQuestion === 0) {
      return;
    } else {
      prevQuestion();
    }
  };

  // A funtion that moves user into the next question
  const next = () => {
    if (currentQuestion === questions.length - 1) {
      return;
    } else {
      nextQuestion();
    }
  };

  // A funtion that navigates user into the result page
  const submitTest = () => {
    navigate("/result");
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center space-y-4 w-full h-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <span> Score: {score}</span>
          <h2 className="text-lg text-slate-900 font-bold">
            Question: {currentQuestion + 1}
          </h2>
          <h3
            className="text-xl my-2
        "
          >
            {questions[currentQuestion]?.question}
          </h3>
          <div className="flex flex-col space-y-2">
            {options &&
              options.map((option: string) => (
                <button
                  onClick={() => checkedOption(option)}
                  key={option}
                  className={`bg-gray-400
               hover:bg-green-300 ${
                 selectedOption && handleSelectedOption(option)
               } w-full md:w-60 h-10 px-3 rounded-md flex items-center justify-center`}
                >
                  <small>{option}</small>
                </button>
              ))}
          </div>
        </div>
        <div className="w-[80%] flex items-center justify-between">
          {currentQuestion === 0 ? (
            <div />
          ) : (
            <button
              onClick={prev}
              className="btn bg-red-400 hover:bg-red-600 active:bg-red-800 w-32"
            >
              PREV
            </button>
          )}
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={submitTest}
              className="btn bg-yellow-400 hover:bg-yellow-600 animate-pulse active:bg-yellow-800 w-32"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={next}
              className="btn bg-green-400 hover:bg-green-600 active:bg-green-800 w-32"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Question;
