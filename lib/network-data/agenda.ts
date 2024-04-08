import { Board, Column, TypeColumn } from "@/types/board";
import { Agenda } from "@prisma/client";

import { axiosInstance } from "../axiosInstance";
import {
  GetAllProductsResponse,
  GetProductByIdResponse,
} from "@/types/product";

// export async function getAgendasGroupedByColumn() {
//   const agendas = await prismadb.agenda.findMany();

//   //Pakai Map Object untuk Grouping berdasarkan Status dari Agenda
//   const columns = agendas.reduce((acc, agenda) => {
//     if (!acc.get(agenda.status)) {
//       acc.set(agenda.status, {
//         id: agenda.status,
//         agendas: [],
//       });
//     }

//     acc.get(agenda.status)!.agendas.push({
//       id: agenda.id,
//       createdAt: agenda.createdAt,
//       title: agenda.title,
//       status: agenda.status,
//       description: agenda.description,
//       image: agenda.image || null,
//     });

//     return acc;
//   }, new Map<TypeColumn, Column>());

//   const columnTypes: TypeColumn[] = ["prepare", "inprogress", "done"];

//   //Jika tidak ada salah satu columnTypes diatas,tambahkan dengan jumlah agenda yang kosong
//   for (const columnType of columnTypes) {
//     if (!columns.get(columnType)) {
//       columns.set(columnType, {
//         id: columnType,
//         agendas: [],
//       });
//     }
//   }

//   //Sort Column berdasarkan status
//   const sortedColumns = new Map(
//     Array.from(columns.entries()).sort(
//       (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0]),
//     ),
//   );

//   const board: Board = {
//     columns: sortedColumns,
//   };

//   return board;
// }

// export async function updateAgenda(agenda: Agenda, columnId: TypeColumn) {
//   console.log(agenda);
//   await prismadb.agenda.update({
//     where: {
//       id: agenda.id,
//     },
//     data: {
//       title: agenda.title,
//       status: columnId,
//     },
//   });
// }

export async function getAllAgenda() {
  const { data } = await axiosInstance.get<GetAllProductsResponse>("/agendas");
  return { data: data.data };
}
