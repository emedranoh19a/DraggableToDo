import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/system";
import { Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function Task({ id, content, icon, index }) {
  const isDragDisabled = id === "task-1";
  return (
    <Draggable
      key={id}
      draggableId={id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          {...snapshot.isDragging}
          sx={{
            marginBottom: "5px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            backgroundColor: isDragDisabled
              ? "lightgrey"
              : snapshot.isDragging
              ? "lightgreen"
              : "white",
            transition: "background-color 0.3s ease",
          }}
        >
          <DragIndicatorIcon fontSize="large" sx={{ fill: "#ddd" }} />

          <ListItemAvatar>
            <Avatar>{icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={id} secondary={content} />
        </ListItem>
      )}
    </Draggable>
  );
}
