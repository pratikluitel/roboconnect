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

const Header = ({ user, handleLogin }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#191919" }}>
        <Toolbar>
          <Button>
            <Typography
              variant="h6"
              style={{ color: "white" }}
              className={classes.title}
            >
              IOE Pulchowk Robotics Club
            </Typography>
          </Button>
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
