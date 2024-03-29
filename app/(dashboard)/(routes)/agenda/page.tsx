import Board from "@/components/Dashboard/Agenda/Board";
import prismadb from "@/lib/connect";
import React from "react";

type Props = {};

export default async function AgendaPage({}: Props) {
  const agendas = await prismadb.agenda.findMany();

  return (
    <div className="flex flex-col gap-6 p-6">
      <Board />
    </div>
  );
}
