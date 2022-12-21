import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import ChargingStationRoundedIcon from "@mui/icons-material/ChargingStationRounded";
import RamenDiningRoundedIcon from "@mui/icons-material/RamenDiningRounded";
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
      icon: <DeleteRoundedIcon />,
    },
    "task-2": {
      id: "task-2",
      content: "Watch y favorite show",
      icon: <TvRoundedIcon />,
    },
    "task-3": {
      id: "task-3",
      content: "Charge my phone",
      icon: <ChargingStationRoundedIcon />,
    },
    "task-4": {
      id: "task-4",
      content: "Cook dinner",
      icon: <RamenDiningRoundedIcon />,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      //hacemos referencia a cada objeto de task
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default initialData;
