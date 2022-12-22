import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function Task({ id, content, icon, index }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...snapshot.isDragging}
          sx={{
            marginBottom: "5px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            backgroundColor: snapshot.isDragging ? "lightgreen" : "white",
            transition: "background-color 0.3s ease",
          }}
        >
          <div {...provided.dragHandleProps}>
            <DragIndicatorIcon fontSize="large" sx={{ fill: "#ddd" }} />
          </div>
          <ListItemAvatar>
            <Avatar>{icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={id} secondary={content} />
        </ListItem>
      )}
    </Draggable>
  );
}
