import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";

export default function Task({ content, icon }) {
  return (
    <ListItem components={<Paper />}>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText secondary={content} />
    </ListItem>
  );
}
