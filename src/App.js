import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./initialData";
import Column from "./Column";
import "./App.css";
function App() {
  //console.log(initialData);

  const [state, setState] = useState(initialData);

  function onDragEnd(result) {
    console.log("Inside the onDragEnd function...");
    const { destination, source, draggableId } = result;
    //Dropped into an undroppable zone?
    if (!destination) {
      console.log("Undroppable destination");
      return;
    }
    // Dropped into the original droppable?
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log("Another case");
      return;
    }
    //At this point we need to reorder the task ids
    console.log("reordering the elements...");
    //Get the source column id
    const column = state.columns[source.droppableId];
    console.log("source column:");
    console.log(column);
    //Create the new taskIds
    const newTaskIds = Array.from(column.taskIds);
    console.log("New taskIds");
    console.log(newTaskIds);
    //Delete one item from the array, then add another (?)
    newTaskIds.splice(source.index, 1); //Delete ONE
    newTaskIds.splice(destination.index, 0, draggableId); // (?)
    console.log();
    console.log();

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    console.log();
    console.log();
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };
    console.log();
    //Finally, set the state
    setState(newState);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        // const tasks = column.taskIds;
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        // console.log(tasks); era un arreglo de ids.
        {
          /* console.log(tasks); //pero esto es un arreglo de objetos */
        }
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
