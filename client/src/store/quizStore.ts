import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface IQuiz {
  category: string;
  difficulty: string;
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
        setCategory: (newCategory) => set({ category: newCategory }),
        removeCategory: () => set({ category: "" }),
        setDifficulty: (newDifficulty) => set({ difficulty: newDifficulty }),
        removeDifficulty: () => set({ difficulty: "" }),
      }),
      { name: "quizStore" }
    )
  )
);
