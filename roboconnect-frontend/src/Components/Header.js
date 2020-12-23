import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import LoginForm from "./Forms/LoginForm";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: 280,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = ({ user, handleLogin, setUser }) => {
  const [modalOpen, setModalopen] = useState(false);

  const handleModalopen = () => {
    setModalopen(true);
  };

  const handleModalclose = () => {
    setModalopen(false);
  };

  const handleLog = (user) => {
    if (user === null) handleModalopen();
    else setUser(null);
  };

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
          <Button color="inherit" onClick={() => handleLog(user)}>
            {user === null ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={modalOpen}
        onClose={handleModalclose}
        className={classes.paper}
      >
        <LoginForm
          handleLogin={handleLogin}
          handleModalclose={handleModalclose}
        />
      </Modal>
    </div>
  );
};

export default Header;
