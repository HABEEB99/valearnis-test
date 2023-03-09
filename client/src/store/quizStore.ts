import { IQuestion } from "./../../typings.d";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface IQuiz {
  category: string;
  difficulty: string;
  //   questions: Array<IQuestion>;
  questions: any;
  addQuestions: (questions: IQuestion) => void;
  setCategory: (newCategory: string) => void;
  removeCategory: () => void;
  setDifficulty: (newDifficulty: string) => void;
  removeDifficulty: () => void;
}

export const useQuizStore = create<IQuiz>()(
  devtools(
    persist(
      (set) => ({
        category: "",
        difficulty: "",
        questions: [],
        // questions: [{ category: "",
        //     correct_answers: "",
        //     difficulty: "",
        //     incorrect_answers: [""],
        //     question: "",
        //     type: ""}],
        addQuestions: (newQuestions) => set({ questions: newQuestions }),
        setCategory: (newCategory) => set({ category: newCategory }),
        removeCategory: () => set({ category: "" }),
        setDifficulty: (newDifficulty) => set({ difficulty: newDifficulty }),
        removeDifficulty: () => set({ difficulty: "" }),
      }),
      { name: "quizStore" }
    )
  )
);
