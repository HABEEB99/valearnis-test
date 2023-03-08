import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QuizSettings } from "../components";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <QuizSettings />
    </div>
    // <motion.div
    //     initial={{ y: -500, opacity: 0, scale: 0.5 }}
    //     animate={{ y: 0, opacity: 1, scale: 1 }}
    //     transition={{ duration: 1.5 }}
    //     className="flex flex-col gap-4"
    //   >
    //     <h2 className="text-3xl md:text-5xl font-bold text-red-800">
    //       Instructions
    //     </h2>

    //     <ol className="text-sm text-gray-700 flex flex-col gap-3">
    //       <li>
    //         <span className="font-bold text-header">1.</span> The test consists
    //         of 10 questions
    //       </li>
    //       <li>
    //         <span className="font-bold text-header">2.</span> Each question
    //         carries 10 points
    //       </li>
    //       <li>
    //         <span className="font-bold text-header">3.</span> Each question has
    //         4 options in which you can only choose one option
    //       </li>
    //       <li>
    //         <span className="font-bold text-header">4.</span> You have the right
    //         to review your options before submitting
    //       </li>
    //       <li>
    //         <span className="font-bold text-header">5.</span> After submitting,
    //         you will be redirected to the result page
    //       </li>
    //     </ol>

    //     <Link to="/quiz" className="btn flex items-center justify-center">
    //       Start Quiz
    //     </Link>
    //   </motion.div>
  );
};

export default HomePage;
