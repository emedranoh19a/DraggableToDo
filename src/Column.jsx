import { List, Paper } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
export default function Column({ column, tasks }) {
  console.log("Inside a column");
  console.log(column);
  console.log(tasks);
  return (
    <Paper sx={{ padding: 2, maxWidth: 200 }} elevation={4}>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <List
            subheader={column.title}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
        )}
      </Droppable>
    </Paper>
  );
}
