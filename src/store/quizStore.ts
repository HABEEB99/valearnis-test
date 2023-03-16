import { IQuestion } from "./../../typings.d";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface IQuiz {
  category: string;
  difficulty: string;
  currentQuestion: number;
  //   questions: Array<IQuestion>;
  questions: any;
  score: number;
  resetScore: () => void;
  resetCurrentQuestion: () => void;
  increaseScore: () => void;
  prevQuestion: () => void;
  nextQuestion: () => void;
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
        currentQuestion: 0,
        score: 0,
        questions: [],
        resetScore: () => set((state) => ({ score: (state.score = 0) })),
        resetCurrentQuestion: () =>
          set((state) => ({ currentQuestion: (state.currentQuestion = 0) })),
        increaseScore: () => set((state) => ({ score: state.score + 1 })),
        prevQuestion: () =>
          set((state) => ({ currentQuestion: state.currentQuestion - 1 })),
        nextQuestion: () =>
          set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
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
