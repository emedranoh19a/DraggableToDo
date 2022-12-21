import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

export default function Task({ id, content, icon, index }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          sx={{
            marginBottom: "5px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            backgroundColor: snapshot.isDragging ? "lightgreen" : "white",
            transition: "background-color 0.3s ease",
          }}
        >
          <ListItemAvatar>
            <Avatar>{icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={id} secondary={content} />
        </ListItem>
      )}
    </Draggable>
  );
}
