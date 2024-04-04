"use client";

import AgendaCard from "./AgendaCard";
import { Agenda } from "@prisma/client";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TypeColumn } from "@/types/board";
import AgendaDialog from "./AgendaDialog";

type Props = {
  status: TypeColumn;
  agendas: Agenda[];
  index: number;
};

const statusToColumnText: {
  [key in TypeColumn]: string;
} = {
  prepare: "Persiapan",
  inprogress: "Proses",
  done: "Selesai",
};

export default function ColumnContainer({ agendas, status, index }: Props) {
  return (
    <Draggable key={status} draggableId={status} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex h-fit flex-grow "
        >
          <div className="relative flex flex-grow  flex-col gap-4 rounded-xl bg-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold md:text-2xl">
                {statusToColumnText[status]}
              </h3>
            </div>

            <Droppable droppableId={index.toString()} type="card">
              {(provided, snapshot) => (
                <div
                  className={"space-y-4"}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {agendas.map((agenda, index: number) => (
                    <Draggable
                      key={agenda.id}
                      draggableId={agenda.id}
                      index={index}
                    >
                      {(provided, snapshotDraggable) => (
                        <AgendaCard
                          agenda={agenda}
                          innerRef={provided.innerRef}
                          isDragging={snapshotDraggable.isDragging}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <AgendaDialog status={status} />
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
}
