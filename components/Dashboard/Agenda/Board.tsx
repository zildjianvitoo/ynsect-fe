"use client";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Preparation from "./Preparation";

type Props = {};

export default function Board({}: Props) {
  useEffect(() => {
    //getBoard()
  }, []);

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Preparation />
            {/* <InProgress />
          <Done /> */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
