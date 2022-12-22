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
        <div ref={provided.innerRef} {...snapshot.isDraggingOver}>
          <Paper
            sx={{
              padding: 2,
              width: "100%",
              minWidth: "150px",
              minHeight: "220px",
              backgroundColor: snapshot.isDraggingOver ? "skyblue" : "white",
              transition: "background-color 0.3s ease",
            }}
            elevation={4}
            {...provided.droppableProps}
          >
            <List subheader={column.title}>
              {tasks.map((task, index) => {
                return (
                  <Task
                    key={task.id}
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
        </div>
      )}
    </Droppable>
  );
}
