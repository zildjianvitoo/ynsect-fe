import { Agenda } from "@prisma/client";

export interface Board {
  columns: Map<TypeColumn, Column>;
}

export type TypeColumn = "prepare" | "inprogress" | "done";

export const TypeColumnValues = ["prepare", "inprogress", "done"] as const;

export interface Column {
  id: TypeColumn;
  agendas: Agenda[];
}
