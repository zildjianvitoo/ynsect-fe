export interface Board {
  columns: Map<TypeColumn, Column>;
}

export type TypeColumn = "prepare" | "inprogress" | "done";

export const TypeColumnValues = ["prepare", "inprogress", "done"] as const;

export interface Column {
  id: TypeColumn;
  agendas: Agenda[];
}

export interface Agenda {
  id: string;
  status: TypeColumn;
  title: string;
  description: string;
  image?: string;
  deadline: string;
  createdAt: string;
}

export interface GetAllAgendasResponse {
  data: {
    id: number;
    status: TypeColumn;
    title: string;
    description: string;
    image?: string;
    deadline: string;
    createdAt: string;
  }[];
}

export interface CreateAgendaParams {
  title: string;
  description: string;
  status: string;
  deadline: string;
  image: string;
}
