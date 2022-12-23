import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./initialData";
import Column from "./Column";
import "./App.css";
import { Grid } from "@mui/material";
function App() {
  //console.log(initialData);

  const [state, setState] = useState(initialData);
  function onDragStart(start) {
    const homeIndex = state.columnOrder.indexOf(start.source.droppableId);
    setState({ ...state, homeIndex });
  }
  function onDragEnd(result) {
    setState({ ...state, homeIndex: null });

    const { destination, source, draggableId } = result;
    //Dropped into an undroppable zone?
    if (!destination) {
      return;
    }
    // Dropped into the original droppable?
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //Get the source column id
    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    //If the destination is the same column, just reorder with the same logic
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }
    //Moving from one list to another.
    //We first modify the array, then shape the column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    //The same thing, for the destination column
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.inde, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  }
  console.log(state);
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Grid container spacing={8} sx={{ width: "80%", margin: "0 auto" }}>
        {state.columnOrder.map((columnId, index) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          const isDropDisabled = index < state.homeIndex;
          return (
            <Grid key={column.id} item xs={4}>
              <Column
                column={column}
                tasks={tasks}
                isDropDisabled={isDropDisabled}
              />
            </Grid>
          );
        })}
      </Grid>
    </DragDropContext>
  );
}

export default App;
