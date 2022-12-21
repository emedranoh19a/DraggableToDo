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
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <ListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            backgroundColor: "white",
            border: "2px solid #ddd",
            borderRadius: "10px",
            marginBottom: "5px",
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
