"use client";

import { useBoardStore } from "@/store/BoardStore";
import { Divide } from "lucide-react";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import ColumnContainer from "./ColumnContainer";
import NoSSR from "@/components/NoSSR";

export default function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    console.log(result);
  };

  return (
    <NoSSR>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {Array.from(board.columns.entries()).map(
                ([id, column], index) => (
                  <ColumnContainer
                    key={id}
                    agendas={column.agendas}
                    status={column.id}
                    index={index}
                  />
                ),
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </NoSSR>
  );
}
