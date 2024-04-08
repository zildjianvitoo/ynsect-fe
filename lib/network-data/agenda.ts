import {
  Agenda,
  Board,
  Column,
  CreateAgendaParams,
  GetAllAgendasResponse,
  TypeColumn,
} from "@/types/board";

import { axiosInstance } from "../axiosInstance";

export async function getAllAgendasGroupedByColumn() {
  let agendas;
  try {
    const { data } = await axiosInstance.get<GetAllAgendasResponse>("/agendas");
    agendas = data.data;
  } catch (error) {
    console.log(error);
  }

  //Pakai Map Object untuk Grouping berdasarkan Status dari Agenda
  const columns = agendas!.reduce((acc, agenda) => {
    if (!acc.get(agenda.status)) {
      acc.set(agenda.status, {
        id: agenda.status,
        agendas: [],
      });
    }

    acc.get(agenda.status)!.agendas.push({
      id: agenda.id.toString(),
      title: agenda.title,
      status: agenda.status,
      description: agenda.description,
      deadline: agenda.deadline,
      image: agenda.image || undefined,
      createdAt: agenda.createdAt,
    });

    return acc;
  }, new Map<TypeColumn, Column>());

  const columnTypes: TypeColumn[] = ["prepare", "inprogress", "done"];

  //Jika tidak ada salah satu columnTypes diatas,tambahkan dengan jumlah agenda yang kosong
  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        agendas: [],
      });
    }
  }

  //Sort Column berdasarkan status
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0]),
    ),
  );

  const board: Board = {
    columns: sortedColumns,
  };

  return board;
}

export async function createAgenda({
  title,
  deadline,
  description,
  image,
  status,
}: CreateAgendaParams) {
  const formData = new FormData();

  console.log(deadline);

  formData.append("title", title);
  formData.append("deadline", deadline);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("status", status);

  const { data } = await axiosInstance.post("/agendas", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return { data: data.data };
}

export async function updateAgenda(agenda: Agenda, columnId: TypeColumn) {
  console.log(agenda);
}

export async function deleteAgenda({ agendaId }: { agendaId: string }) {
  const { data } = await axiosInstance.delete(`/agendas/${agendaId}`);

  return { data: data.data };
}
