import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 280,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
