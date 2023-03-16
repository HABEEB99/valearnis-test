import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Iuser } from "../../typings";

interface IUserStore {
  user: any;
  addUser: (newUser: Iuser) => void;
  removeUser: () => void;
}

export const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        addUser: (newUser) => set({ user: newUser }),
        removeUser: () => set({ user: null }),
      }),
      { name: "userStore" }
    )
  )
);
