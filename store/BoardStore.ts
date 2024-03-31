import { getAgendasGroupedByColumn } from "@/lib/network-data/board";
import { Board, Column, TypeColumn } from "@/types/board";
import { create } from "zustand";

type BoardState = {
  board: Board;
  getBoard: () => void;
};

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getAgendasGroupedByColumn();

    set({ board });
  },
}));
