import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Typography
              variant="h6"
              style={{ color: "white" }}
              className={classes.title}
            >
              IOE Robotics Club
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
