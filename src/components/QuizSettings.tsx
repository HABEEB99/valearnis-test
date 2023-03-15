import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { categories, difficulties } from "../utils/settings";
import { useQuery } from "@tanstack/react-query";
import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";

interface IFormData {
  category: string;
  difficulty: string;
}

const QuizSettings = () => {
  const { setCategory, setDifficulty } = useQuizStore();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>();

  const submitForm: SubmitHandler<IFormData> = ({ category, difficulty }) => {
    setCategory(category);
    setDifficulty(difficulty);
    navigate("/quiz");
  };

  const { data } = useQuery({
    queryKey: ["questions"],
    queryFn: () =>
      fetch(
        `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`
      ).then((response) => response.json()),
  });

  return (
    <motion.div
      initial={{ y: -500, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full md:w-[25rem] flex flex-col gap-4 rounded-md min-h-[20rem] p-3 shadow-lg shadow-green-900"
    >
      <h1 className="text-center text-3xl font-bold text-btn">Quiz Settings</h1>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="categories"
            className="text-lg font-bold text-gray-700"
          >
            Select Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="p-2 bg-gray-300 hover:bg-gray-400 outline-none rounded-md "
          >
            {categories.map((item) => (
              <option
                key={item.category}
                value={item.value}
                className="text-gray-200"
              >
                {item.category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="difficulty"
            className="text-lg font-bold text-gray-700"
          >
            Select Difficulty
          </label>
          <select
            id="difficulty"
            {...register("difficulty")}
            className="p-2 bg-gray-300 hover:bg-gray-400 outline-none rounded-md "
          >
            {difficulties.map((item) => (
              <option
                key={item.category}
                value={item.value}
                className="text-gray-200"
              >
                {item.category}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" type="submit">
          Start Quiz
        </button>
      </form>
    </motion.div>
  );
};

export default QuizSettings;
