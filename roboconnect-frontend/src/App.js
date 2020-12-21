import Events from "./Components/Events";
import Projects from "./Components/Projects";
import Tournaments from "./Components/Tournaments";
import Members from "./Components/Members";
import Header from "./Components/Header";
import Pitch from "./Components/Pitch";
import getToken from "./services/login";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(8),
    textAlign: "center",
  },
}));

function App() {
  const [user, setUser] = useState(null);

  const classes = useStyles();
  const handleLogin = async () => {
    const newUser = await getToken();
    setUser(newUser);
  };
  return (
    <div className={classes.root}>
      <Header user={user} handleLogin={handleLogin} />
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Pitch user={user} />
        </Grid>
        <Grid item xs={12}>
          <Members user={user} />
        </Grid>
        <Grid item xs={12}>
          <Projects user={user} />
        </Grid>
        <Grid item xs={12}>
          <Tournaments user={user} />
        </Grid>
        <Grid item xs={12}>
          <Events user={user} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
