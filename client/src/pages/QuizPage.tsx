import { useQuery } from "@tanstack/react-query";
import { Question } from "../components";
import { useQuizStore } from "../store/quizStore";

const QuizPage = () => {
  const { category, difficulty, questions, addQuestions } = useQuizStore();

  const { data } = useQuery({
    queryKey: ["questions"],
    queryFn: () =>
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      ).then((response) => response.json()),
  });
  // console.log(data);
  addQuestions(data.result);
  // console.log(questions);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <Question />
      <div className="w-[80%] flex items-center justify-between">
        <button className="btn bg-red-400 hover:bg-red-600 active:bg-red-800 w-32">
          PREV
        </button>
        <button className="btn bg-green-400 hover:bg-green-600 active:bg-green-800 w-32">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
