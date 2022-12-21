import initialData from "./initialData";
import Column from "./Column";
function App() {
  console.log(initialData);
  const state = initialData;
  return state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    // const tasks = column.taskIds;
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
    // console.log(tasks); era un arreglo de ids.
    console.log(tasks); //pero esto es un arreglo de objetos
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
}

export default App;
