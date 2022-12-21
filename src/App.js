import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./initialData";
import Column from "./Column";
import "./App.css";
function App() {
  //console.log(initialData);
  const state = initialData;

  function result() {
    return null;
  }
  return (
    <DragDropContext onDragEnd={result}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        // const tasks = column.taskIds;
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        // console.log(tasks); era un arreglo de ids.
        console.log(tasks); //pero esto es un arreglo de objetos
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
