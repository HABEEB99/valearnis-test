import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Question } from "../components";
import { useUserStore } from "../store/userStore";

const QuizPage = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    toast.error("Access denied");
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full w-full mx-auto">
      <Question />
    </div>
  );
};

export default QuizPage;
