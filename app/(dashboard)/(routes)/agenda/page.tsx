import Board from "@/components/Dashboard/Agenda/Board";

import React from "react";

type Props = {};

export default async function AgendaPage({}: Props) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Board />
    </div>
  );
}
