import Board from "@/components/Dashboard/Agenda/Board";
import prismadb from "@/lib/connect";
import React from "react";

type Props = {};

export default async function AgendaPage({}: Props) {
  const [agendas, agendaCategories] = await Promise.all([
    prismadb.agenda.findMany({
      include: {
        category: true,
      },
    }),
    prismadb.agendaCategory.findMany(),
  ]);
  console.log(agendas);
  return (
    <div className="flexflex-col gap-6 p-6">
      <Board agendas={agendas} agendaCategories={agendaCategories} />
    </div>
  );
}
