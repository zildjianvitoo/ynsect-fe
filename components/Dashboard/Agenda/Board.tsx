"use client";

import { useBoardStore } from "@/store/BoardStore";
import { Divide } from "lucide-react";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import ColumnContainer from "./ColumnContainer";
import NoSSR from "@/components/NoSSR";
import { Column } from "@/types/board";

export default function Board() {
  const [board, getBoard, setBoard, updateAgenda] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoard,
    state.updateAgenda,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    // Check jika user drag card diluar board
    if (!destination) {
      return;
    }

    // Handle Column Drag
    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [movedColumn] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, movedColumn);
      const rearrangedColumns = new Map(entries);
      setBoard({
        ...board,
        columns: rearrangedColumns,
      });
      return;
    }

    // Step ini dibutuhkan agar indexes disimpan sebagai tipe data number 0,1,2,etc.
    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)];

    const startCol: Column = {
      id: startColIndex[0],
      agendas: startColIndex[1].agendas,
    };

    const finisihCol: Column = {
      id: finishColIndex[0],
      agendas: finishColIndex[1].agendas,
    };

    if (!startCol || !finisihCol) {
      return;
    }

    if (source.index === destination.index && startCol === finisihCol) {
      return;
    }

    const newAgendas = startCol.agendas;
    const [movedAgenda] = newAgendas.splice(source.index, 1);

    if (startCol.id === finisihCol.id) {
      // Logic untuk column yang sama
      newAgendas.splice(destination.index, 0, movedAgenda);
      const newColumns = new Map(board.columns);

      const newCol = {
        id: startCol.id,
        agendas: newAgendas,
      };
      newColumns.set(startCol.id, newCol);

      setBoard({
        ...board,
        columns: newColumns,
      });
    } else {
      const finishAgendas = Array.from(finisihCol.agendas);
      finishAgendas.splice(destination.index, 0, movedAgenda);
      const newColumns = new Map(board.columns);

      const newCol = {
        id: startCol.id,
        agendas: newAgendas,
      };

      newColumns.set(startCol.id, newCol);
      newColumns.set(finisihCol.id, {
        id: finisihCol.id,
        agendas: finishAgendas,
      });

      // Update di database
      updateAgenda(movedAgenda, finisihCol.id);

      setBoard({
        ...board,
        columns: newColumns,
      });
    }
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
