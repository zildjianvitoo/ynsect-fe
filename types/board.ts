import { Agenda } from "@prisma/client";

export interface Board {
  columns: Map<TypeColumn, Column>;
}

export type TypeColumn = "prepare" | "inprogress" | "done";

export interface Column {
  id: TypeColumn;
  agendas: Agenda[];
}
