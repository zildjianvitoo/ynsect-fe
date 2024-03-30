"use client";
import { useEffect, useMemo, useState } from "react";

import Preparation from "./Preparation";
import InProgress from "./InProgress";
import Done from "./Done";
import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Agenda, AgendaCategory } from "@prisma/client";
type Props = {
  agendas: (Agenda & {
    category: AgendaCategory;
  })[];
  agendaCategories: AgendaCategory[];
};

export default function Board({ agendas, agendaCategories }: Props) {
  const agendaCategoriesId = useMemo(() => {
    return agendaCategories.map((category) => category.id);
  }, [agendaCategories]);

  const [activeColumn, setActiveColumn] = useState<AgendaCategory | null>(null);

  const onDragStart = (e: DragStartEvent) => {
    console.log(e);
    if (e.active.data.current?.type === "column") {
      setActiveColumn(e.active.data.current?.column);
      return;
    }
  };

  return (
    <DndContext onDragStart={onDragStart}>
      <SortableContext items={agendaCategoriesId}>
        <div className="flex items-start gap-6 ">
          <Preparation
            agendaCategories={agendaCategories}
            agendas={agendas.filter(
              (agenda) => agenda.category.name === "PREPARATION",
            )}
          />
          <InProgress
            agendaCategories={agendaCategories}
            agendas={agendas.filter(
              (agenda) => agenda.category.name === "INPROGRESS",
            )}
          />
          <Done
            agendaCategories={agendaCategories}
            agendas={agendas.filter(
              (agenda) => agenda.category.name === "DONE",
            )}
          />
        </div>
      </SortableContext>
    </DndContext>
  );
}
