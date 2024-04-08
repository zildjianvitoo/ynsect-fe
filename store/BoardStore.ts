import {
  getAllAgendasGroupedByColumn,
  updateAgenda,
} from "@/lib/network-data/agenda";
import { Agenda, Board, Column, TypeColumn } from "@/types/board";
import { create } from "zustand";

type BoardState = {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  updateAgenda: (agenda: Agenda, columnId: TypeColumn) => void;
};

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getAllAgendasGroupedByColumn();

    set({ board });
  },
  setBoard: (board) => {
    set({ board });
  },

  updateAgenda: async (agenda, columnId) => {
    await updateAgenda(agenda, columnId);
  },
}));
