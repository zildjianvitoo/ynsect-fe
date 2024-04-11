import { create } from "zustand";

type ForumStore = {
  searchForum: string;
  setSearchValue: (value: string) => void;
};

export const useForumStore = create<ForumStore>((set) => ({
  searchForum: "",
  setSearchValue: (value) => set({ searchForum: value }),
}));
