import { List, Paper } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
export default function Column({ column, tasks }) {
  // console.log("Inside a column");
  // console.log(column);
  // console.log(tasks);
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <Paper
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDragginOver={snapshot.isDraggingOver}
          sx={{
            padding: 2,
            maxWidth: 200,
            backgroundColor: snapshot.isDraggingOver ? "skyblue" : "white",
            transition: "background-color 0.3s ease",
          }}
          elevation={4}
        >
          <List subheader={column.title}>
            {tasks.map((task, index) => {
              return (
                <Task
                  id={task.id}
                  content={task.content}
                  icon={task.icon}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </List>
        </Paper>
      )}
    </Droppable>
  );
}
