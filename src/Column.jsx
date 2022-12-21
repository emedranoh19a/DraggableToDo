import { List, Paper } from "@mui/material";
import Task from "./Task";
export default function Column({ column, tasks }) {
  console.log("Inside a column");
  console.log(column);
  console.log(tasks);
  return (
    <Paper sx={{ padding: 2, maxWidth: 200 }} elevation={4}>
      <List subheader={column.title}>
        {tasks.map((task) => {
          return <Task content={task.content} icon={task.icon} />;
        })}
      </List>
    </Paper>
  );
}
